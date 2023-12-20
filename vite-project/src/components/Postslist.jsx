import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./Postslist.module.css";
import axios from "axios";

function Postslist() {
  const posts = useLoaderData();

  const addPostHandler = async (postData) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/posts",
        data: postData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("post 요청 성공\n", response);
      setPosts((existingPosts) => [postData, ...existingPosts]);
    } catch (error) {
      console.log("에러 발생\n", error);
    }
  };

  return (
    //형제 요소는 나란히 쓸 수 없다. 다른 태그로 묶어줘야 한다.
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default Postslist;
