import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserLogin, setUserLogout } from "../Redux/app/appAction";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userDetails = useSelector((state) => state.app);
  console.log(userDetails);
  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        history.push("/home");
      }
    });
  }, [userDetails.name]);

  const handleAuth = () => {
    if (!userDetails.name) {
      auth
        .signInWithPopup(provider)
        .then((response) => {
          console.log(response);
          setUser(response.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userDetails.name) {
      auth
        .signOut()
        .then((response) => {
          dispatch(setUserLogout());
          history.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(setUserLogin({ name: user.displayName, email: user.email, photo: user.photoURL }));
  };

  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt="logo" />
      </Logo>
      {!userDetails.name ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="./images/home-icon.svg" alt="Home" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src="./images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src="./images/watchlist-icon.svg" alt="watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img src="./images/original-icon.svg" alt="original" />
              <span>ORIGINAL</span>
            </a>
            <a href="/home">
              <img src="./images/movie-icon.svg" alt="movie" />
              <span>MOVIE</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userDetails.photo} alt={userDetails.name} />
            <Dropdown>
              <span onClick={handleAuth}>Sign out</span>
            </Dropdown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

//styled-components

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.5px;
      line-height: 1px;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -10px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgb(0, 0, 0, 0.6);
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 0.5px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: black;
    border: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.3);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
  }
  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
