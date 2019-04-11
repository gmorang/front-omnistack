import React, { Component } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import api from "../../services/api";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBox: null
    };
  }

  handleInputChange = e => {
    this.setState({ inputBox: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post("/boxes", {
      title: this.state.inputBox
    });
    this.props.history.push(`/box/${response.data._id}`);
  };
  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="logo" />
          <input
            value={this.state.inputBox}
            onChange={this.handleInputChange}
            placeholder="criar um box"
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}

export default Main;
