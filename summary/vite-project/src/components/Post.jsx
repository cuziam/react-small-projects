//use uppercase for component name
import classes from "./Post.module.css";

function Post({ author, body }) {
  return (
    //순수 html작성방식과 달리 style은 객체로 작성한다.
    //class는 className으로 작성한다. ele.className이런 식으로 작성한 걸 떠올리면 된다.
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}
export default Post;
