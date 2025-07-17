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
    newMeal.key = crypto.randomUUID();
    delete newMeal["addOrder"];
    setOrder((m) => [...m, newMeal]);
  }
  function goBack(e) {
    props.onGoindBack();
  }
  function handleDeleteMeal(mealKey) {
    const orderLeft = order.reduce((accumulator, current) => {
      if (current.key !== mealKey) {
        return (accumulator = [...accumulator, current]);
      } else {
        return accumulator;
      }
    }, []);
    setOrder(orderLeft);
  }
  return (
    <div id="gourmetExpress">
      <GourmetOrder order={order} deleteMeal={handleDeleteMeal} />
      <GourmetWelcome />
      <GourmetMenu addOrder={handelAddOrder} />
      <BackButton
        onSelection={props.onSelection}
        onGoingBack={props.onGoingBack}
      />
    </div>
  );
}

export default GourmetExpress;
