import styled from 'styled-components';
import '../App.css';
import { ReactComponent as TopIcon } from '../icon/top_icon.svg';
import logo_png from '../icon/cat.png';
import search_png from '../icon/search.png';
import user_png from '../icon/user.png';
import 'animate.css';

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

const Wrapper = styled.div`
  width: 100%;
  padding: 0 8px;
  margin: auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: white;

  .logo {
    height: 100%;
    padding: 12px;
    float: left;
    margin: 0 15px 0 30px;
    .logo_icon {
      margin-top: 5px;
      height: 50px;
      position: relative;
      animation-name: bounce;
      animation-duration : 4s;
      animation-iteration-count : infinite;
    }
  }

  @keyframes bounce {
      0% {
        top: 0;
      }

      40% {
        top: 0;
      }

      45% {
        top: -10px;
      }

      50% {
        top: 0;
      }

      55% {
        top: -10px;
      }

      60% {
        top: 0;
      }

      100% {
        top: 0;
      }
}

  .user {
    height: 100%;
    padding: 12px;
    float: left;
    margin: 0 30px 0 25px;
    .user_icon {
      margin-top: 5px;
      height: 40px;
      opacity: 0.6;
    }
  }
`;

const TopButton = styled.div`
    position: fixed;
    width: 48px;
    height: 48px;
    border-radius: 999px;
    background-color: #C4573A;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    bottom: 24px;
    right: 16px;
    padding-top: 3px;
    z-index: 10;
    display: block;
    &.hidden {
        display: none;
    }
    svg {
        padding: 12px 18px;
        opacity: 0.9;
    }
`;

const SearchBox = styled.div`
  flex-grow: 1;
  display: flex;
  height: 38px;
`;

const SearchInput = styled.input.attrs(
  {
    type: 'text',
    placeholder: 'Search cute Cats meow~!',
  }
)`
  flex-grow: 1;
  border-radius: 20px 0 0 20px;
  border: none;
  background-color: rgba(233, 233, 233);
  padding-left: 20px;
  font-size: 1rem;
`;

const SearchBtn = styled.div`
  width: 40px;
  background-color: rgba(233, 233, 233);
  border-radius: 0 20px 20px 0;
  .search_icon {
    width: 1.6rem;
    margin-top: 5px;
    opacity: 0.3;
  }
`;

const Nav = () => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <Container>
      <TopButton>
        <TopIcon onClick={toTheTop}></TopIcon>
      </TopButton>
      <div className="header">
        <Wrapper>
          <div className="logo">
            <img src={logo_png} className="logo_icon" alt="logo_icon" />
          </div>
          <SearchBox>
            <SearchInput />
            <SearchBtn>
              <img src={search_png} className="search_icon" alt="search_icon" />
            </SearchBtn>
          </SearchBox>
          <div className="user">
            <img src={user_png} className="user_icon" alt="user_icon" />
          </div>
        </Wrapper>
      </div>
    </Container>
  );
};

export default Nav;