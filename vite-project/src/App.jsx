import { useState } from "react";
import Postslist from "./components/Postslist";
import MainHeader from "./components/MainHeader";
//컴포넌트를 사용할 때는 반드시 대문자로 시작해야 한다.
//소문자로 시작하면 리액트가 일반 HTML 태그로 인식한다.
import "./index.css";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };
  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      {/* self-closing태그는 <Post></Post>과 동일함
      props는 xml에서 속성을 줄 때와 동일하게 사용한다*/}
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <Postslist
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
