import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./step-three.css";
import Verified from "./verified.png";

export default class StepThree extends Component {
    render() {
        return (
            <div>
                
        <div className="form d-flex justify-content-center form-three-step">
          <Col  lg={4} className="pb-0">

            <div className="text-center">
             <img src={Verified}  alt="Verified" />
            <h2>Спасибо!</h2>
            </div>
          </Col>
        </div>
      
            </div>
        )
    }
}
