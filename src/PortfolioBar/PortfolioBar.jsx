import { useState, useRef, useEffect } from "react";
import calculatorLogo from "../assets/Calculator.png";
import movieLogo from "../assets/Movies.png";
import restaurantLogo from "../assets/gourmet express croped.png";
import "./PortfolioBar.css";
const optionList = [
  { name: "Calculator", img: calculatorLogo },
  { name: "Movie Browser", img: movieLogo },
  { name: "Restaurant", img: restaurantLogo },
];
function PortfolioBar(props) {
  const optionListRef = useRef({});
  const clickedRef = useRef(false);
  const finishAnimationRef = useRef(false);
  function handleClick(e) {
    const currentOptionID = e.target.id;
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
            let currentOption = optionListRef.current[option.name];
            currentOption.animate(closeKeyframes, closeTiming).onfinish = (
              event,
            ) => {
              resolve(currentOption);
            };
          });
        }),
      ).then((values) => {
        switch (currentOptionID) {
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
            optionListRef.current[option.name].animate(
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
              optionListRef.current[el.name] = node;
              return () => {};
            }}
            key={el.name}
            id={el.name}
          >
            <img className="logo" src={el.img} />
            <h1 className="title">{el.name}</h1>
          </li>
        );
      })}
    </ul>
  );
}

export default PortfolioBar;
