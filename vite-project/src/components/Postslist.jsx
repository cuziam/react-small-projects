import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./Postslist.module.css";

function Postslist({ isPosting, onStopPosting }) {
  return (
    //형제 요소는 나란히 쓸 수 없다. 다른 태그로 묶어줘야 한다.
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default Postslist;
