import { useState, useRef, useEffect } from "react";
import logo from "../assets/gourmet express croped.png";
import "./GourmetExpress.css";

function GourmetExpress() {
  function handleLoad(e) {
    const closeKeyframes = [
      { transform: "rotateY(90deg)" },
      { transform: "rotateY(0deg)" },
    ];
    const closeTiming = {
      easing: "ease-out",
      duration: 500,
      iterations: 1,
      fill: "forwards",
    };
    e.target.animate(closeKeyframes, closeTiming);
  }
  return (
    <div id="gourmetWelcome">
      <img
        id="gourmetLogo"
        src={logo}
        width="609"
        height="319"
        onLoad={handleLoad}
      />
      <div id="gourmetText">
        <h1 id="gourmetTitle">Welcome to Gourmet Express!</h1>
        <p>
          This is a demonstration of a food delivery restaurant. Basically the
          user can choose which food to add to the order at the bottom of the
          page. Once the order is finalized the red button at the top right of
          the screen can be clicked to view the state of the order.
          <br />
          It is written completely on react and css.
        </p>
      </div>
    </div>
  );
}

export default GourmetExpress;
