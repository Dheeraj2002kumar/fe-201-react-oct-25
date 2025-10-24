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

const paraText = "This is React Development... !!";

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
  constructor() {
    console.log("constructor");
    super();

    // this.incHandler = () => {
    //   console.log("+1 clicked")
    // }

    // this.decHandler = () => {
    //   console.log("-1 clicked")
    // }

    this.clickHandler = (v) => {
      console.log(v, " clicked");
    };
  }

  // handler = () => {
  //   console.log("+1 clicked")
  // }

  render() {
    console.log("render");
    return (
      <div>
        <h1>0</h1>
        {/* <button onClick={this.incHandler}>+1</button>
        <button onClick={this.decHandler}>-1</button> */}

        <button
          onClick={(e) => {
            this.clickHandler(1);
          }}
        >
          +1
        </button>
        <button onClick={(e) => this.clickHandler(-1)}>-1</button>
      </div>
    );
  }
}

// let o1 = new Counter()
// o1.render() ->> jsx/view!

root.render(
  <StrictMode>
    <Counter />
  </StrictMode>
);

// document !!
// createElement('h1')
// .innerText = 'Hello'
// getElementById('root').innerHTML = h1...
