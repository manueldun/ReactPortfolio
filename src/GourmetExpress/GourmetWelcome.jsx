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
        <h1 id="gourmetTitle">¡Bienvenido a Gourmet Express!</h1>
        <p>
          Esta es una simple demostración de un Restaurante de entrega de comida
          a domicilio. Básicamente el usuario elije lo que platos quiere comprar
          y se va agregando a la lista de pedidos. Una vez que el pedido está
          listo se puede obtener los datos del cliente al darle click al botón
          rojo arriba a la derecha.
          <br />
          Escrito completamente con React y css.
        </p>
      </div>
    </div>
  );
}

export default GourmetExpress;
