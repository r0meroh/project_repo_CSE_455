import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { Container, Button, Jumbotron, Row, Col } from "react-bootstrap";
const SignIn = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const [currentUser, setUser] = useState(false);

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("");
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            console.log(user);
          }
        });
        setUser(true);
      });
  };

  const logOutFunction = () => {
    firebase.logout();
    setUser(false);
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
      } else {
        console.log("no user found, you are logged out");
      }
    });
  };

  return (
    <Container className="LoginModal font rounded">
      <Row>
        <Col sm={4} md={12} className="UserName">
          {currentUser ? <h1>user found</h1> : <h1>Not Signed In</h1>}
        </Col>
      </Row>
      <Row className="LoginLogo">
        <i className="fas fa-virus mr-1 LoginLogo2"> </i>{" "}
      </Row>
      <Row className="LoginButtonsRow">
        <Col sm={4} md={5} className="GoogleSignButton">
          <Button
            variant="dark"
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }}
          >
            Sign In with Google
          </Button>
        </Col>
        <Col sm={4} md={5} className="LogOut">
          <Button
            variant="dark"
            onClick={(e) => {
              e.preventDefault();
              logOutFunction();
            }}
          >
            Log Out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
