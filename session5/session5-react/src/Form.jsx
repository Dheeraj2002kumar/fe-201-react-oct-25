// react.js

// expert class Component {}

// export default {
//     Component
// }

import { Component } from "react";

// flow of execution
// 1. <Form /> - born/Mount - 1
// constructor
// this.render() - state variable initialised in constructor

// 2. user action - setState | birthdays/Update - N
// this.render() with latest state object

// 3. Component leave/Unmounting - 1

class Form extends Component {
  constructor() {
    console.log(">> Constructor")
    super();

    this.state = {
      name: "",
      heading: "",
    };
  }

  render() {
    // console.log(">>", this.state);
    console.log(">> render", this.state);
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(e.target.elements.name.value)
            console.log(this.state.name)
            this.setState({
                heading: this.state.name,
                name: "",
            })

          }}
        >
          {/* uncontrolled input  */}
          {/* <input type="text" name="name" placeholder="Enter your name..." /> */}

          {/* controlled input  */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            // value='Niharika'
            value={this.state.name}
            onChange={(e) => {
              if (e.target.value.length < 100) {
                this.setState({
                  name: e.target.value,
                });
              }
            }}
          />
          <button>Submit</button>
        </form>
        <h3>{this.state.heading}</h3>
      </>
    );
  }
}

export default Form;


// export { Counter }; // N no of named exports

// export default a;