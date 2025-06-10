import { useState, useRef, useEffect } from "react";
import "./GourmetExpress.css";
import motoLogo from "../assets/moto-logo.png";

function GourmetOrder(props) {
  let accumTotal = 0;
  for (const meal of props.order) {
    accumTotal += meal.price;
  }
  return (
    <div id="gourmetOrder">
      <img src={motoLogo}></img>
      <h3>Total: {accumTotal}$</h3>
    </div>
  );
}

export default GourmetOrder;
