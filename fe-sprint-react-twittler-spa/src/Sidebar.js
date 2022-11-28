import React from 'react';
import { Link } from "react-router-dom";
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1)
  }
  const handleGoForward = () => {
    navigate(1)
  }
  const handleReload = () => {
    navigate(0)
  }
  
  return (
    <section className="sidebar">
      {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}
        <Link onClick={handleGoBack}><span className="far">◀︎</span></Link>
        <Link onClick={handleGoForward}><span className="far">▶︎</span></Link>
        <Link onClick={handleReload}><span className="far">reset</span></Link>
        <Link to="/"><i className="far fa-comment-dots"></i></Link>
        <Link to="/about"><i className="far fa-question-circle"></i></Link>
        <Link to="/mypage"><i className="far fa-user"></i></Link>
    </section>
  );
};

export default Sidebar;

{/* <Link onClick={handleGoBack}><i className="far fa-circle-left"></i></Link> */}