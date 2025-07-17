import { useState, useRef, useEffect } from "react";
import "./GourmetExpress.css";
import motoLogo from "../assets/moto-logo.png";

function GourmetOrder(props) {
  const dialogRef = useRef(null);
  let accumTotal = 0;
  for (const meal of props.order) {
    accumTotal += meal.price;
  }
  function handleCheckout(e) {
    dialogRef.current.showModal();
  }
  return (
    <>
      <div id="gourmetOrder" onClick={handleCheckout}>
        <img src={motoLogo}></img>
        <h3>Total: {accumTotal}$</h3>
      </div>
      <dialog id="checkoutDialog" ref={dialogRef}>
        <ul>
          {props.order.map((meal) => {
            return (
              <li key={meal.key}>
                {meal.name + ": " + meal.price + "$"},
                <button
                  onClick={() => {
                    props.deleteMeal(meal.key);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
        <p>total: {accumTotal}$</p>
        <button
          onClick={() => {
            dialogRef.current.close();
          }}
        >
          Accept
        </button>
      </dialog>
    </>
  );
}

export default GourmetOrder;
