import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
function NewEventPage() {
  return (
    <section>
      <EventForm></EventForm>
    </section>
  );
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData(); //capture the (internal) form data
  console.log("data", data);
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw json({ message: "Failed to create event" }, { status: 500 });
  }
  return redirect("/events");
}
