import { useState, useRef, useEffect } from "react";
import GourmetMealCard from "./GourmetMealCard.jsx";
import "./GourmetExpress.css";

import linguiniImage from "../assets/linguini.png";
import hamburguerImage from "../assets/hamburger.png";
import carbonaraImage from "../assets/carbonara.png";
import pizzaImage from "../assets/pizza.png";
import filetminonImage from "../assets/filet mignon.png";
const menuData = [
  { key: 0, name: "Linguini", image: linguiniImage, price: 10 },
  { key: 1, name: "Hamburguesa", image: hamburguerImage, price: 10 },
  { key: 2, name: "Pasta a la Carbonara", image: carbonaraImage, price: 10 },
  { key: 3, name: "Pizza", image: pizzaImage, price: 10 },
  { key: 4, name: "Filet Migñon", image: filetminonImage, price: 10 },
];
function GourmetMenu(props) {
  let triggerMenu = useRef(true);
  const menuContentRef = useRef(null);
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      if (triggerMenu.current) {
        triggerMenu.current = false;
        let delay = 0;
        for (const child of menuContentRef.current.children) {
          const appearKeyframe = [
            { transform: "scale(1) rotatey(90deg)" },
            { transform: "scale(1) rotateY(00deg)" },
          ];
          const closeTiming = {
            duration: 500,
            iterations: 1,
            fill: "forwards",
            delay: delay,
          };
          delay += 90;

          const animation = child.animate(appearKeyframe, closeTiming);
        }
      }
    }
  });

  return (
    <section id="gourmetMenu">
      <h2 id="gourmetMenuTitle">Menú</h2>
      <div ref={menuContentRef} id="gourmetMenuContent">
        {menuData.map((meal) => (
          <GourmetMealCard
            key={meal.key}
            name={meal.name}
            image={meal.image}
            price={meal.price}
            addOrder={props.addOrder}
          />
        ))}
      </div>
    </section>
  );
}

export default GourmetMenu;
