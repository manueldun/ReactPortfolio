import { useState, useRef, useEffect } from "react";
import GourmetWelcome from "./GourmetWelcome.jsx";
import GourmetMenu from "./GourmetMenu.jsx";
import "./GourmetExpress.css";

function GourmetExpress() {
  return (
    <div id="gourmetExpress">
      <GourmetWelcome />
      <GourmetMenu />
    </div>
  );
}

export default GourmetExpress;
