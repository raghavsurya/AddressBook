import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import { Fields } from '../Fields';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
        contact_name: "",
        line_one:"",
        line_two: "",
        city: "",
        postcode: "",
        telephone: "",
        email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    return (
      <form id="address-form">

        { Fields.map((question, key) => {
            return <Input key={key}
                text={question.text}
                label={question.label}
                type="text"
                id={question.id}
                value={this.state[question.id]}
                handleChange={this.handleChange}
                errorMessage={question.errorMesage}
                
                />
        }) }
        <button className="btn btn-primary btn-success">Submit</button>
        </form>
    );
  }
}


export default FormContainer;


const wrapper = document.getElementById('create-addressbook-form');
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
