import React, { Component } from "react";

export default class Techs extends Component {
  state = {
    techs: [],
    newTech: ""
  };

  componentDidMount() {
    const techs = JSON.parse(localStorage.getItem("techs"));
    if (techs) {
      this.setState({ techs });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { techs, newTech } = this.state;
    techs.push(newTech);
    this.setState(techs);
    localStorage.setItem("techs", JSON.stringify(techs));
    this.setState({ newTech: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}> {tech}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={e => this.setState({ newTech: e.target.value })}
          value={this.state.newTech}
        />
      </form>
    );
  }
}
