import React, { Component } from "react";
import "./step-two.css";
import { Container, Row, Col } from "react-bootstrap";
import Arrow from "./arrow.png";
import { FormErrors } from "./formErrors";

export default class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nams: "",
      term: "",
      number: "",
      CW: "",
      formErrors: { CW: "", number: "", term: "", nams: "" },
      formValid: false,
      namsValid: false,
      termValid: false,
      numberValid: false,
      CWValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let namsValid = this.state.namsValid;
    let termValid = this.state.termValid;
    let numberValid = this.state.numberValid;
    let CWValid = this.state.CWValid;

    switch (fieldName) {
      case "CW":
        CWValid = value.length >= 4;
        fieldValidationErrors.CW = CWValid ? "" : " is invalid";
        break;

      case "number":
        numberValid = value.length >= 20;
        fieldValidationErrors.number = numberValid ? "" : "card is invalid";
        break;

      case "term":
        termValid = value.length >= 5;
        fieldValidationErrors.term = termValid ? "" : " is invalid";
        break;

      case "nams":
        namsValid = value.length >= 4;
        fieldValidationErrors.nams = namsValid ? "" : " is invalid";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        CWValid: CWValid,
        numberValid: numberValid,
        termValid: termValid,
        namsValid: namsValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.namsValid &&
        this.state.termValid &&
        this.state.citiValid &&
        this.state.CWValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div>
        
        

        <div className="form d-flex justify-content-center form-two-step">
          <Col  lg={4}>
            <Container>
              <Row className="form-margin-main">
                <p className="form-text-title-next   ">Доставка</p>
                <img src={Arrow} className='ml-3' alt="Arrow" />
                <p className="    form-text-title">Оплата</p>
                
              </Row>
			  <h2 className="form-margin-main"> Оплата </h2>
			  
              <form className="form-order" action="/step-three">
                <div className="panel panel-default form-margin-main">
                  <FormErrors formErrors={this.state.formErrors} />
                </div>

                <div
                  className={`form-margin-main form-group ${this.errorClass(
                    this.state.formErrors.nams
                  )}`}
                >
                  <label htmlFor="nams">Имя на карте</label>
                  <input
                    required
                    className="form-control "
                    name="nams"
                    placeholder="Konstantin Ivanov"
                    value={this.state.nams}
                    onChange={this.handleUserInput}
                  />
                </div>

                <div
                  className={`pt-2 form-group form-margin-main ${this.errorClass(
                    this.state.formErrors.number
                  )}`}
                >
                  <label htmlFor="number">Номер карти</label>
                  <input
                    required
                    className="form-control "
                    name="number"
                    placeholder="ХХХХ ХХХХ ХХХХ ХХХХ ХХХХХ"
                    value={this.state.number}
                    onChange={this.handleUserInput}
                  />
                </div>

             

                <Container>
                <Row>
                <Col xl={4} className="px-0 ">
				<div
                  className={`form-group form-margin-main  ${this.errorClass(
                    this.state.formErrors.term
                  )}`}
                >
				  <label htmlFor="term">Срок</label>
                  <input
                    required
                    className="form-control "
                    name="term"
                    placeholder="MM / YY"
                    value={this.state.term}
                    onChange={this.handleUserInput}
                  />
                </div>
                    
                </Col>           

                <Col xl={4}
                  className={`form-group ${this.errorClass(
                    this.state.formErrors.CW
                  )}`}
                >
                  <label htmlFor="CW">CW</label>
                  <input
                    required
                    className="form-control form-CW-media "
                    name="CW"
                    placeholder=""
                    value={this.state.CW}
                    onChange={this.handleUserInput}
                  />
                </Col>
                </Row> 
                </Container>


                <Container>
                    <Row>
                        <Col lg={7} className="pr-1 pl-2">   
                            <button
                            type="submit"
                            className=""
                            disabled={!this.state.formValid}
                            >
                            Оплатить
                            </button>
                        </Col>       
                    </Row> 
                </Container>
              </form>
            </Container>
          </Col>
        </div>
      </div>
    );
  }
}
