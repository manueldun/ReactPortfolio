import { useState, useRef, useEffect } from "react";
import logo from "../assets/gourmet express croped.png";
import "./GourmetExpress.css"

function GourmetExpress() {
  return (
    <div id="gourmetWelcome">
      <img id="gourmetLogo" src={logo} width="609" height="319" />
      <div id="gourmetText">
        <h1 id="gourmetTitle">¡Bienvenido a Gourmet Express!</h1>
        <p>
          En Gourmet Express, te traemos la excelencia culinaria directamente a
          tu puerta. Olvídate de cocinar y disfruta de una selección gourmet de
          platos preparados con ingredientes frescos y de alta calidad, listos
          para deleitar tu paladar. Simplemente elige tus favoritos y deja que
          la experiencia gourmet llegue a ti.
        </p>
      </div>
    </div>
  );
}

export default GourmetExpress;
