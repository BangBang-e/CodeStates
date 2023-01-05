import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 모든 요청에 withCredentials가 true로 설정됩니다.
axios.defaults.withCredentials = true;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const authHandler = () => {
    // TODO: 초기 화면 렌더링시, 서버에 유저 정보를 요청하여 Login 또는 Mypage가 렌더링되도록 구현합니다.
    return axios
      .get('https://localhost:4000/userinfo')
      .then((res) => {
        setIsLogin(true);
        setUserInfo(res.data);
      })
      .catch((err) => {
        alert('err!')
      });
  };

  useEffect(() => {
    // 컴포넌트 생성 시 아래 함수가 실행됩니다.
    authHandler();
  }, []);

  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          <Route
            path='/'
            element={
              isLogin ? (
                <Mypage
                  // TODO: 렌더링에 필요한 App의 상태와 이를 하위 컴포넌트에서 변경할 수 있도록 props를 전달하세요.
                  setIsLogin={setIsLogin}
                  setUserInfo={setUserInfo}
                  userInfo={userInfo}
                />
              ) : (
                <Login
                  // TODO: App의 상태를 변경할 수 있도록 props를 전달하세요.
                  setIsLogin={setIsLogin}
                  setUserInfo={setUserInfo}
                />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
