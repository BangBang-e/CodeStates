import React from 'react';
import './App.css';
import './global-style.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-regular-svg-icons'

console.log(dummyTweets); // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* TODO : 메세지 아이콘을 작성합니다. */}
      <i className='far fa-comment-dots'></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          {/* TODO : dummyTweet로 전달되는 데이터의 갯수를 보여줍니다. */}
          Total : {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <img id="logo" src={`${process.env.PUBLIC_URL}/codestates-logo.png`} />
      Copyright @ 2022 Code States
    </footer>
  );
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* TODO: 트윗 저자의 프로필 사진이 있어야 합니다.  */}
              <img src={tweet.picture} />
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {/* TODO : 유져 이름이 있어야 합니다. */}
                {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
                <>
                  {(tweet.username === "parkhacker") ?
                  <span className="tweet__username tweet__username--purple">{tweet.username}</span> :
                  <span className="tweet__username">{tweet.username}</span>}
                </>
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className="tweet__message">
                {tweet.content}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      {/* TODO : Footer 컴포넌트를 작성합니다. */}
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        {/* TODO : Sidebar 컴포넌트를 작성합니다. */}
        <Sidebar />
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
