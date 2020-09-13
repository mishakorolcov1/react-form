import React, { Component } from "react";
import "./app-header.css";
import logo from "./logo.svg";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import StepOne from "../step-one/step-one";
import Form from "../form/form";
import StepTwo from "../step-two/step-two";
import StepThree from "../step-three/step-three";




export default class AppHeader extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" >
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav order-md-first order-last" />
           <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto">
                <Nav.Link href="/"> Тестовое задание </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/" className="order-md-last order-first" >
              <img src={logo}  alt="Logo" />
            </Navbar.Brand>
           
          
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/step-two" component={StepTwo} />
            <Route exact path="/step-three" component={StepThree} />
          </Switch>
        </Router>
      </>
    );
  }
}

