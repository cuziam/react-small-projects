import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./Postslist.module.css";

function Postslist() {
  return (
    //형제 요소는 나란히 쓸 수 없다. 다른 태그로 묶어줘야 한다.
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Kang" body="React.js is awesome!" />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default Postslist;
