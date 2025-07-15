import { useState, useRef, useEffect } from "react";
import "./MovieBrowser.css";

function MovieCard(props) {
  return (
    <div className="movieCard">
      <img
        ref={props.ref}
        id={props.id}
        onLoad={props.onLoadImg}
        className="moviePoster"
        src={props.data["#IMG_POSTER"]}
      />
      <h2>{props.data["#TITLE"]}</h2>
      <h3>Actors</h3>
      <p>{props.data["#ACTORS"]}</p>
      <h3>Release Year</h3>
      <p>{props.data["#YEAR"]}</p>
    </div>
  );
}

export default MovieCard;
