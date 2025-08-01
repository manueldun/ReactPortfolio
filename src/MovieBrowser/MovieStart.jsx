import { useState, useRef, useEffect } from "react";
import "./MovieBrowser.css";

function MovieStart(props) {
  const movieInputRef = useRef(null);
  const movieStartRef = useRef(null);
  function handleSearch(e) {
    if (movieInputRef.current.value !== "") {
      const appearKeyframes = [{ opacity: "1.0" }, { opacity: "0.0" }];
      const appearTiming = {
        easing: "ease-out",
        duration: 500,
        iterations: 1,
        fill: "forwards",
      };
      movieStartRef.current.animate(appearKeyframes, appearTiming).onfinish =
        () => {
          props.onSearch(movieInputRef.current.value);
        };
    }
  }
  let appearAnimation = new Animation();
  useEffect(() => {
    const appearKeyframes = [{ opacity: "0.0" }, { opacity: "1.0" }];
    const appearTiming = {
      easing: "ease-out",
      duration: 500,
      iterations: 1,
      fill: "forwards",
    };
    appearAnimation = movieStartRef.current.animate(
      appearKeyframes,
      appearTiming,
    ).onfinish = () => {
      movieStartRef.current.style.opacity = "1.0";
      movieStartRef.current.getAnimations().map((animation) => {});
    };
    return () => {};
  }, []);

  return (
    <div id="movieStart" ref={movieStartRef}>
      <h1>Full Text Movie Search Page</h1>
      <input
        id="movieInput"
        ref={movieInputRef}
        type="text"
        placeholder="Ingrese texto para buscar."
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSearch(movieInputRef.current.value);
          }
        }}
      />
      <button id="movieButton" onClick={handleSearch}>
        Search
      </button>
      <p>Searches for movies using the public API IMDbOT.</p>
      {props.error && (
        <p>
          <span id="error">
            It seems there was a problem, please try again.
          </span>
        </p>
      )}
    </div>
  );
}
export default MovieStart;
