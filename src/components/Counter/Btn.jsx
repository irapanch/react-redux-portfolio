import React, { Component } from "react";

export default class Btn extends Component {
  componentDidMount() {
    console.log("Btn did mount");
  }
  componentDidUpdate(prevProps) {
    // prevProps отримує попередні пропси, що прокидуються в компонент
    // console.log(prevProps.counter);
  }
  componentWillUnmount() {
    console.log("Btn UNMOUNT");
  }
  render() {
    return <button>{this.props.counter}</button>;
  }
}
