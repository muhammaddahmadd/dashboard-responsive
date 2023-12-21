import React from "react";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";

function Container() {
  return (
    <Nav
      variant="underline"
      defaultActiveKey="/home"
      className="justify-content-center  mb-lg-5"
    >
      <Nav.Item>
        <Nav.Link className="text-dark" href="link-1">
          {/* <span className="nav-square"></span> */}
          Time Tracked
          <Button className="px-2 mx-2 py-2 bg-success border-success rounded-0"></Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="link-2">
          {/* <span className="nav-square"></span> */}
          Productive Time
          <Button className="px-2 mx-2 py-2 bg-danger border-danger rounded-0"></Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="link-3">
          {/* <span className="nav-square"></span> */}
          Unproductive Time
          <Button className="px-2 mx-2 py-2 bg-warning border-warning rounded-0"></Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="link-4">
          {/* <span className="nav-square"></span> */}
          Neutral
          <Button className="px-2 mx-2 py-2 bg-dark border-dark rounded-0"></Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="link-5">
          {/* <span className="nav-square"></span> */}
          Unrated
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Container;
