import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.jpg';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#1f2a3e",
  },
  logostyle: {
    width: "80px",
    height: "80px"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,

    marginLeft: "38px",
  },
  menuButtons: {
    textAllign: "right",
    },
  }));

export default function Header() {
  const [error, setError] = useState("")
  const history = useHistory()
  const { logout } = useAuth()
  const [userLogged, setUserLogged] = useState(false);
  const { header, menuButton, menuButtons, logostyle, toolbar } = useStyles();
  var loginText = "Log In"
  var href = "/login"
  var accountLogin = "/"

  var loginButton = () => {
    return (
      <Button
        {...{
          key: {loginText},
          color: "inherit",
          className: menuButton
        }}
      onClick = {handleLogout}>
        {loginText}
    </Button>
    )
  }
  var accountButton = () => {
    return (
      <Button
        {...{
          key: "My Account",
          color: "inherit",
          to: "/",
          component: Link,
          className: menuButton
        }}
      >
        My Account {accountLogin}
      </Button>
    )
  }

  async function handleLogout() {
    setError('')
    console.log("USE HANDLELOGOUT")
    if(true){
      try{
        await logout()
        history.go("/login")
      } catch {
          setError("Failed to log out")
      }
    }

  }

  useEffect(() => {
    const authListener = auth.onAuthStateChanged((user) => {
      setUserLogged(user ? true : false);
     
    });
    return authListener;
  }, []);

  if(userLogged) {
    loginText = "Log Out"
    href = "/login"

    loginButton = () => {
      return (
        <Button
          {...{
            key: {loginText},
            target: "_top",
            color: "inherit",
            className: menuButton
          }}
        onClick = {handleLogout}>
          {loginText}
      </Button>
      )
    }

    accountButton = () => {
      return (
        <Button
          {...{
            key: "My Account",
            color: "inherit",
            to: "/dashboard",
            component: Link,
            className: menuButton
          }}
        >
          My Account
        </Button>
      )
    }

    accountLogin = "/dashboard"
  }
  else {
    loginText = "Log In"

    loginButton = () => {
      return (
        <Button
            {...{
              key: "Log In",
              target: "_top",
              color: "inherit",
              to: "/login",
              component: Link,
              className: menuButton
            }}
          >
           Log In
        </Button>
      )
    }
    accountButton = () => {
      return (
        <Button
          {...{
            key: "My Account",
            color: "inherit",
            to: "/login",
            component: Link,
            className: menuButton
          }}
        >
          My Account
        </Button>
      )
    }

  }

  const displayDesktop = () => {
    return ( 
    <Toolbar>
      <div style={{ flex: 1 }}>
      {LucidTradingLogo}
      </div>

      <div>
        <Button
            {...{
              key: "News",
              color: "inherit",
              to: "/news",
              component: Link,
              className: menuButton,
              float: "right",
              marginLeft: 5,
            }}
          >
           News
        </Button>
        <Button
            {...{
              key: "Course",
              color: "inherit",
              to: "/course",
              component: Link,
              className: menuButton,
              
            }}
          >
           Courses
        </Button>
        {/* {accountButton()} */}
        {/* {loginButton()} */}
      </div></Toolbar>
    );
  };

  const LucidTradingLogo = (
    <Link to = "/" target = "_top">
      <img src={logo} alt="Logo" className={logostyle}/>
    </Link>
  );

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}