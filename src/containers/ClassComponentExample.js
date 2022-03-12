import React from "react";
import UserData from "../components/UserData/UserData";
class ClassComponentExample extends React.Component {
  constructor() {
    console.log("CONSTRUCTOR");
    super();
    this.state = {
      name: "Marina",
      title: "Frontend Developer",
      tools: ["Angular", "Raect", "Nextjs"],
    };
  }

  componentDidMount() {
    console.log("MOUNTED");
  }

  componentDidUpdate() {
    console.log("CHANGES");
  }

  componentWillUnmount() {
    console.log("UNMOUNT");
  }

  changeUsername = (name) => {
    //this.state.name = "Momen" WRONGxxxxxxxx
    this.setState({
      name,
    });
  };

  render() {
    const { name, title, tools } = this.state;
    console.log("RENDER");
    return (
      <>
        <h1> Hello Class Component </h1>
        <UserData username={name} userJobTitle={title} tools={tools} />
        <button onClick={() => this.changeUsername("Momen")}>
          Change name
        </button>
        <button onClick={() => this.changeUsername("Tasneem")}>
          Change name
        </button>
      </>
    );
  }
}

export default ClassComponentExample;
