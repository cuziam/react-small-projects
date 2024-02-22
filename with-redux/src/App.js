import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticate = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticate);
  return (
    <>
      <Header />
      {!isAuthenticate && <Auth />}
      {isAuthenticate && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
