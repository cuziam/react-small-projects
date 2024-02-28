import { Link } from "react-router-dom";

function EventsPage() {
  const events = [
    {
      id: "a1",
      item: "",
      image: "../",
      title: "event1",
      content: "event1",
      date: new Date().getDate(),
    },
    {
      id: "a2",
      item: "",
      image: "../",
      title: "event2",
      content: "event2",
      date: new Date().getDate(),
    },
    {
      id: "a3",
      item: "",
      image: "../",
      title: "event3",
      content: "event3",
      date: new Date().getDate(),
    },
  ];

  return (
    <>
      <h1>Events Page</h1>
      <ul></ul>
      {events.map((data) => {
        return (
          <li key={data.id}>
            <Link to={`${data.id}`}>{data.title}</Link>
          </li>
        );
      })}
    </>
  );
}

export default EventsPage;
