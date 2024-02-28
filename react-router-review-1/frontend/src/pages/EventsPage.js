import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

//loader는 컴포넌트가 렌더링되기 전에 실행되는 함수
//따라서 로딩이 지연되면 컴포넌트 렌더링도 지연된다.
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {
    //   isError: true,
    //   status: response.status,
    //   message: "Could not fetch events. Please try again!",
    // };
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch events. Please try again!" }),
    //   { status: 500 }
    // );
    return json(
      { message: "Could not fetch events. Please try again!" },
      { status: 500 }
    );
  } else {
    return response;
  }
};
