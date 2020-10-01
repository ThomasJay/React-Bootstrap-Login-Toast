import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


import "bootstrap/dist/css/bootstrap.css";
import { Button, Alert, Col, Row, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col>
            <LeftSide></LeftSide>
          </Col>
          <Col className="d-none d-sm-block">
            <RightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
