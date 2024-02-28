import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products"); //imperative navigation 프로그래밍 적으로 필요할 때가 있다.
  }

  return (
    <div>
      <h1>Homepage Title</h1>
      <p>
        Go to <Link to="products"> the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
}
export default Homepage;
