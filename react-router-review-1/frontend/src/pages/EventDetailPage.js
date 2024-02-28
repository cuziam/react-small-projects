import {
  useParams,
  json,
  useLoaderData,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage() {
  // const params = useParams();
  // const data = useLoaderData(); //그냥 useLoaderData()를 사용하면 부모 요소의 loader 값을 받아오지 못한다.
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event}></EventItem>;
}
export async function loader({ request, params }) {
  console.log("request:", request);
  console.log("params:", params);
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch event. Please try again!" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Failed to fetch event" }, { status: 500 });
  }

  return redirect("/events");
}
export default EventDetailPage;
