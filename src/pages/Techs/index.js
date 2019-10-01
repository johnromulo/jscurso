import React, { Component } from "react";

export default class Techs extends Component {

  componentDidMount(){
      
  }

  state = {
    techs: ["NodeJs", "ReactJs", "React-Native"],
    newTech: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { techs, newTech } = this.state;
    techs.push(newTech);
    this.setState(techs);
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
