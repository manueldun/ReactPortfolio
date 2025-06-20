import { useState, useRef, useEffect } from "react";
import "./PortfolioBar.css";

function PortfolioBar(props) {
  const calculatorSelectorRef = useRef(null);
  const exerciseSelectorRef = useRef(null);
  const restaurantSelectorRef = useRef(null);
  function handleClick(e) {
    const closeKeyframes = [
      { transform: "rotateY(0deg)" },
      { transform: "rotateY(90deg)" },
    ];
    const closeTiming = {
      easing: "ease-in",
      duration: 900,
      iterations: 1,
      fill: "forwards",
    };
    calculatorSelectorRef.current.animate(closeKeyframes, closeTiming);
    exerciseSelectorRef.current.animate(closeKeyframes, closeTiming);
    restaurantSelectorRef.current.animate(
      closeKeyframes,
      closeTiming,
    ).onfinish = (event) => {
      restaurantSelectorRef.current.style.setProperty("opacity", "0%");
      switch (e.target.id) {
        case "calculatorSelector":
          props.onSelection("calculatorSelector");
          break;
        case "movieBrowserSelector":
          props.onSelection("movieBrowserSelector");
          break;
        case "restaurantSelector":
          props.onSelection("restaurantSelector");
          break;
      }
    };
  }
  return (
    <ul id="portfolioPage">
      <li
        id="calculatorSelector"
        className="selectorButton"
        onClick={handleClick}
        ref={calculatorSelectorRef}
      >
        Calculator
      </li>
      <li
        id="movieBrowserSelector"
        className="selectorButton"
        onClick={handleClick}
        ref={exerciseSelectorRef}
      >
        Movie Browser
      </li>
      <li
        id="restaurantSelector"
        className="selectorButton"
        onClick={handleClick}
        ref={restaurantSelectorRef}
      >
        Restaurant
      </li>
    </ul>
  );
}

export default PortfolioBar;
