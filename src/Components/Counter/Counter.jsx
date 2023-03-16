import React, { Component } from "react";
import "./Counter.css";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.addToCounter = this.addToCounter.bind(this);
    this.minusCountr = this.minusCountr.bind(this);
  }

  addToCounter() {
    this.setState(prevState=> {return {counter:prevState.counter+1}})
}
  minusCountr() {
    this.setState(prevState => {return {counter:prevState.counter-1}})
  }
  render() {
    return (
      <>
        <div class="container">
          <div class="title">شمارنده اعداد</div>
          <p style={{ color: "gray", fontSize: "10px", fontWeight: "lighter" }}>
            این کامپوننت ساده با استفاده از کلاس کامپوننت ها پیدا سازی شده است
          </p>
          <h2 class="counter">{this.state.counter}</h2>
          <div className="button">
            <button className="btn1" onClick={this.minusCountr}>-</button>
            <button className="btn2" onClick={this.addToCounter}>+</button>
          </div>
          <p class="author">farshid zahedi</p>
        </div>
      </>
    );
  }
}
