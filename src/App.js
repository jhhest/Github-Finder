import React, { Component } from "react";
import "./App.css";

class App extends Component {
  foo = () => "bar";
  render() {
    const name = "John Doe";
    const loading = "false";
    const showName = "true";
    return (
      <div className="App">
        {loading ? <h4>Loading...</h4> : <h1>Hello {name}</h1>}
        <h1>Hello from react - Github finder Project.</h1>
        <h2>Hello {name}</h2>
        <p>foo = {this.foo()}</p>
        <p>1 + 1 = {1 + 1}</p>
        <p>should i show the name?:{showName && name}</p>
      </div>
    );
  }
}

export default App;
