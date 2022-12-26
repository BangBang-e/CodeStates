import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
`;

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;
export const ExitBtn = styled(ModalBtn)`
  text-decoration: none;
  font-size: 1rem;
  width: 30px;
  height: 30px;
  border: none;
  padding: 5px;
  margin-top: 40px;
  color: white;
  border-radius: 50%;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
}))`
  // TODO : Modal창 CSS를 구현합니다.
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: white;
  width: 400px;
  height: 200px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    > div.child{
      font-size: 1.5rem;
      margin-top: 25px;
      color: rgba(0, 0, 0, 0.6);
    }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen)
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn
          // TODO : 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
          onClick={openModalHandler}
        >
          {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현해야 합니다. */}
          {isOpen ? 'Opened!' : 'Open Modal'}
        </ModalBtn>
        {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}
        {isOpen === false ? null
          : <ModalBackdrop onClick={openModalHandler}>
            <ModalView>
              <div className='child' >Congraturations!</div>
              <ExitBtn onclick={openModalHandler}>&times;</ExitBtn>
            </ModalView>
          </ModalBackdrop>
        }
      </ModalContainer>
    </>
  );
};
