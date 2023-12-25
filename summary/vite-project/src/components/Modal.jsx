import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
function Modal({ children }) {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate(".."); //부모 라우트로 이동
  };
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
