import { useState, useRef, useEffect } from "react";
import "./GourmetExpress.css";

function GourmetMealCard(props) {
  const cardRef = useRef(null);
  function handleEnter(e) {
    const scaleKeyframe = [
      { transform: "scale(1) rotatey(0deg)" },
      { transform: "scale(1.15) rotatey(0deg)" },
    ];
    const scaleTiming = {
      duration: 200,
      iterations: 1,
      fill: "forwards",
    };
    cardRef.current.animate(scaleKeyframe, scaleTiming);
  }
  function handleLeave(e) {
    const scaleKeyframe = [
      { transform: "scale(1.15) rotatey(0deg)" },
      { transform: "scale(1) rotatey(0deg)" },
    ];
    const scaleTiming = {
      duration: 200,
      iterations: 1,
      fill: "forwards",
    };
    cardRef.current.animate(scaleKeyframe, scaleTiming);
  }
  function handleAddMeal(e) {
    props.addOrder(props);
  }
  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      id="gourmetMealCard"
    >
      <img src={props.image} height="100" width="100" />
      <h1 id="gourmetMealTitle">{props.name}</h1>
      <p>Price: {props.price}$</p>
      <button onClick={handleAddMeal}>Agregar al pedido</button>
    </article>
  );
}

export default GourmetMealCard;
