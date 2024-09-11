import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Theres nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. 
        And definitely not the way we live life. Around here,
         we dont settle for anything less than food were proud to serve. And we dont 
         just clock in.Not when we can also become our best,
          make friends, and have  fun while were at it. Were the pizza company that lives life unboxed.
        </p>
      </div>
    </div>
  );
}

export default About;