import { Outlet } from "react-router-dom";

function Homepage() {
  return (
    <main>
      <Outlet></Outlet>
      <h1>Homepage</h1>
    </main>
  );
}

export default Homepage;
