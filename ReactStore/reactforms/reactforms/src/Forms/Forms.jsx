import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: ""
    };
  }

  handleChange = event => {
   // console.log(event.target.name, event.target.value);
    const name= event.target.name;
    const value = event.target.value;
    this.setState({
        [name]:value
    })


  };

  handleSumbit = (event) => {
      event.preventDefault();
    console.log("submit= ",this.state)

    this.setState({
        firstName: "",
        lastName: "",
        phone: "",
        email: ""

    })

}

  render() {
     // console.log(this.state);
    return (
      <form  onSubmit={this.handleSumbit} 
       style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <label>
          First Name
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <label>
          Phone
          <input type="text"name="phone" value={this.state.phone} onChange={this.handleChange} />
        </label>
        <label>
          Email
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <input type="submit"/>
      </form>
    );
  }
}
export default Form;
