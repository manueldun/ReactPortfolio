import { useState, useRef, useEffect } from "react";

function MovieCard(props) {
  return (
    <div className="movieCard">
      <img src={props.url} />
    </div>
  );
}

export default MovieCard;
