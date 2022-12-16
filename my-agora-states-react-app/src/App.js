import React from 'react';
import './App.css';
import{ BrowserRouter } from "react-router-dom";

import { useEffect, useState } from 'react';
import { Discussions } from './components/Discussions';
// import { Discussion } from './components/Discussion';
import { Form } from './components/Form';

function App() {
  const [discussion, setDiscussion] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
    .then(res => res.json())
    .then(data => {
      setDiscussion(data);
    })
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <main className='main'>
            <h1 className="header">BangBang's Agora States</h1>
            <Form discussion={discussion} addData={setDiscussion} />
            <Discussions discussion={discussion} />
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
