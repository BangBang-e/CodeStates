import styled from 'styled-components';
import '../App.css';
import catData from '../catData/catData.js'
import Cat from '../component/Cat.js';

const MainArea = styled.div`
  column-width:350px;
  column-gap: 15px;
  overflow-y: scroll;
  padding: 40px 30px 0 30px;

  @media only screen and (max-width: 950px) {
    background-color: rgba(180, 180, 180, 0.1);
  }
  @media only screen and (max-width: 900px) {
    background-color: rgba(180, 180, 180, 0.2);
  }
  @media only screen and (max-width: 850px) {
    background-color: rgba(180, 180, 180, 0.3);
  }
  @media only screen and (max-width: 800px) {
    background-color: rgba(180, 180, 180, 0.4);
  }
  @media only screen and (max-width: 750px) {
    background-color: rgba(180, 180, 180, 0.5);
  }
  @media only screen and (max-width: 700px) {
    background-color: rgba(180, 180, 180, 0.6);
  }
  @media only screen and (max-width: 650px) {
    background-color: rgba(180, 180, 180, 0.7);
  }
  @media only screen and (max-width: 600px) {
    background-color: rgba(180, 180, 180, 0.8);
  }
  @media only screen and (max-width: 550px) {
    background-color: rgba(180, 180, 180, 0.9);
  }
`;

const Render = () => {
  return (
    <>
      <MainArea>
        {catData.sort(() => Math.random() - 0.5).map((catObj, idx) => <Cat key={idx} catObj={catObj} />)}
      </MainArea>
    </>
  );
};

export default Render;
