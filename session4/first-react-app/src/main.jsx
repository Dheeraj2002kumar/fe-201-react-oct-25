// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const paraText = "This is React Development... !!";

// markup - javascript => jsx
// const view = (
//   <>
//     <h1>Hello !!</h1>
//     <p>{paraText}</p>
//   </>
// )

// const counter = 0
// // counter = 1
// const view = (
//   <div>
//     <h1>{counter}</h1>
//     <button>+1</button>
//     <button>-1</button>
//   </div>
// )

// appearance & logic
class Counter extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    console.log("Props", props)

    // this.incHandler = () => {
    //   console.log("+1 clicked")
    // }

    // this.decHandler = () => {
    //   console.log("-1 clicked")
    // }

    this.count = this.props.c
    // initialise state object inside constructor
    this.state = {
      count: this.props.c,
    };

    this.clickHandler = (v) => {
      console.log(v, " clicked");
      // this.count = this.count + v
      // this.state.count = this.state.count + v;
      // console.log("New count", this.state.count)

      this.setState({
        count: this.state.count + v,
      })
    };
  }

  // handler = () => {
  //   console.log("+1 clicked")
  // }

  render() {
    console.log("render", this.state);
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* <button onClick={this.incHandler}>+1</button>
        <button onClick={this.decHandler}>-1</button> */}

        <button
          onClick={(e) => {
            this.clickHandler(1 * this.props.step);
          }}
        >
          +{this.props.step}
        </button>
        <button onClick={(e) => this.clickHandler(-1 * this.props.step)}>-{this.props.step}</button>
      </div>
    );
  }
}

// let o1 = new Counter()
// o1.render() ->> jsx/view!

root.render(
  <StrictMode>
    <Counter c={50} step={5} y='Niharika'/>
    <Counter c={150} step={35} y='Niharika'/>
    <Counter c={250} step={55} y='Niharika'/>
    {/* <Counter c={500} x={10} y='Niharika'/>
    <Counter c={5000} x={10} y='Niharika'/> */}
  </StrictMode>
);

// document !!
// createElement('h1')
// .innerText = 'Hello'
// getElementById('root').innerHTML = h1...
