import React, { Component } from "react";
import ReactDOM from "react-dom";
import BusinessCard from "./BusinessCard.js";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FName: "",
      LName: "",
      Address: "",
      Email: "",
      PhoneNumber: "",
      register: false
    };
  }

  inputHandler = event => {
    const { FName, LName, Address, Email, PhoneNumber } = this.state;
    if (
      FName !== " " &&
      LName !== " " &&
      Address !== " " &&
      Email !== " " &&
      PhoneNumber !== " "
    ) {
      this.setState({ register: true });
    } else {
      this.setState({ register: false });
      alert("please complete the given form!!");
    }
  };

  render() {
    const { FName, LName, Address, Email, PhoneNumber, register } = this.state;
    if (!register) {
      return (
        <div style={{ backgroundColor: "aqua", padding: "10px" }}>
          <h1>registration form</h1>
          <br />
          <label>firstname:</label>
          <br />
          <br />
          <input
            style={{ height: "30px", width: "235px" }}
            type="text"
            placeholder="Firstname"
            onChange={event => this.setState({ FName: event.target.value })}
          />
          <br />
          <br />
          <label>lastname:</label>
          <br />
          <br />
          <input
            style={{ height: "30px", width: "235px" }}
            type="text"
            placeholder="Lastname"
            onChange={event => this.setState({ LName: event.target.value })}
          />
          <br />
          <br />
          <label>address:</label>
          <br />
          <br />
          <input
            style={{ height: "30px", width: "235px" }}
            type="text"
            placeholder="Address"
            onChange={event => this.setState({ Address: event.target.value })}
          />
          <br />
          <br />
          <label>email:</label>
          <br />
          <br />
          <input
            style={{ height: "30px", width: "235px" }}
            type="email"
            placeholder="Email"
            onChange={event => this.setState({ Email: event.target.value })}
          />
          <br />
          <br />
          <label>phonenumber:</label>
          <br />
          <br />
          <input
            style={{ height: "30px", width: "235px" }}
            type="number"
            placeholder="PhoneNumber"
            onChange={event =>
              this.setState({ PhoneNumber: event.target.value })
            }
          />
          <div>
            <br />
            <button
              style={{ backgroundColor: "yellow", width: "235px" }}
              onClick={event => this.inputHandler(event)}
            >
              Submit
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <BusinessCard firstname={FName} />
          <BusinessCard lastname={LName} />
          <BusinessCard address={Address} />
          <BusinessCard email={Email} />
          <BusinessCard phonenumber={PhoneNumber} />
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
