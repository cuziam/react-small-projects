import { Outlet } from "react-router-dom";
import Postslist from "../components/Postslist";

import axios from "axios";
//컴포넌트를 사용할 때는 반드시 대문자로 시작해야 한다.
//소문자로 시작하면 리액트가 일반 HTML 태그로 인식한다.
import "./index.css";
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <Postslist />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await axios.get("http://localhost:8080/posts");
  console.log("get 요청 성공\n", response);
  const posts = response.data.posts;
  return posts;
}
