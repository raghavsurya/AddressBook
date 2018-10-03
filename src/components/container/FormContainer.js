import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
        contact_name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
      console.log('Input', Input);
    const { contact_name } = this.state;
    return (
      <form id="address-form">
        <Input
          text="Name"
          label="address_contact_name"
          type="text"
          id="contact_name"
          value={contact_name}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}


export default FormContainer;


const wrapper = document.getElementById('create-addressbook-form');
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
