import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

function EventsRoot() {
  return (
    <EventsNavigation>
      <Outlet />
    </EventsNavigation>
  );
}

export default EventsRoot;
