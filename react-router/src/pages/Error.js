import MainNavigation from "../components/MainNavigation";

function Error() {
  return (
    <div>
      <MainNavigation />
      <main>
        <h1>Page not found!</h1>
        <p>Could not find this page</p>
      </main>
    </div>
  );
}

export default Error;
