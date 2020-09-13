import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="">
      <Navbar className="nav2 flex-column" bg="dark" variant="dark">
        <Navbar.Brand style={{ fontSize: "1.5vw" }}>Dashboard</Navbar.Brand>
        <div className="color">
          <Nav.Link
            as={NavLink}
            to="/test"
            style={{ color: "white", fontFamily: "Hanalei" }}
          >
            test
          </Nav.Link>
          <Nav.Link as={NavLink} to="/test2" style={{ color: "white" }}>
            test2
          </Nav.Link>
          <Nav className="mr-auto"></Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbar2;
