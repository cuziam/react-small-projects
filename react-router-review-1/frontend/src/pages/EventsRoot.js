import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

function EventsRoot() {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <Outlet />
    </>
  );
}

export default EventsRoot;
