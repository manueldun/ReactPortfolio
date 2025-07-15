import { useState, useRef, useEffect } from "react";
import "./PortfolioBar.css";
const optionList = ["Calculator", "Movie Browser", "Restaurant"];
function PortfolioBar(props) {
  const optionListRef = useRef({});
  const clickedRef = useRef(false);
  const finishAnimationRef = useRef(false);
  function handleClick(e) {
    if (!clickedRef.current && finishAnimationRef.current) {
      clickedRef.current = true;
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

      Promise.all(
        optionList.map((option) => {
          return new Promise((resolve, reject) => {
            let currentOption = optionListRef.current[option];
            currentOption.animate(closeKeyframes, closeTiming).onfinish = (
              event,
            ) => {
              resolve();
            };
          });
        }),
      ).then((values) => {
        switch (e.target.id) {
          case "Calculator":
            props.onSelection("calculatorSelector");
            break;
          case "Movie Browser":
            props.onSelection("movieBrowserSelector");
            break;
          case "Restaurant":
            props.onSelection("restaurantSelector");
            break;
        }
      });
    }
  }
  useEffect(() => {
    if (!finishAnimationRef.current) {
      const goBackKeyFrames = [
        { transform: "rotateY(90deg)" },
        { transform: "rotateY(0deg)" },
      ];

      const goBackTiming = {
        easing: "ease-in",
        duration: 450,
        iterations: 1,
        fill: "forwards",
      };

      Promise.all(
        optionList.map((option) => {
          return new Promise((resolve, reject) => {
            optionListRef.current[option].animate(
              goBackKeyFrames,
              goBackTiming,
            ).onfinish = () => {
              resolve();
            };
          });
        }),
      ).then((result) => {
        finishAnimationRef.current = true;
      });
    }
  }, []);

  return (
    <ul onClick={handleClick} id="portfolioPage">
      {optionList.map((el) => {
        return (
          <li
            className="selectorButton"
            ref={(node) => {
              optionListRef.current[el] = node;
              return () => {};
            }}
            key={el}
            id={el}
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
}

export default PortfolioBar;
