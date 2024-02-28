import { useParams } from "react-router-dom";
function EventDetailPage() {
  const params = useParams();
  return (
    <section>
      <h1>EventDetailPage</h1>
      <p>event id: {params.eventId}</p>
    </section>
  );
}
export default EventDetailPage;
