import { useState, useRef, useEffect } from "react";
import BackButton from "../BackButton.jsx";
import GourmetWelcome from "./GourmetWelcome.jsx";
import GourmetMenu from "./GourmetMenu.jsx";
import GourmetOrder from "./GourmetOrder.jsx";
import "./GourmetExpress.css";


function GourmetExpress(props) {
  const [order, setOrder] = useState([]);
  function handelAddOrder(meal) {
    let newMeal = { ...meal };
    newMeal.key = order.length;
    delete newMeal["addOrder"];
    setOrder((m) => [...m, newMeal]);
  }
  return (
    <div id="gourmetExpress">
      <GourmetOrder order={order} />
      <GourmetWelcome />
      <GourmetMenu addOrder={handelAddOrder} />
      <BackButton onSelection={props.onSelection} />
    </div>
  );
}

export default GourmetExpress;
