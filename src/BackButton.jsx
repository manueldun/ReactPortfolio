import { useRef } from "react";
import backIcon from "./assets/back-arrow-svgrepo-com.svg";
function BackButton(props) {
  const backButtonRef = useRef(null);
  const clickedRef = useRef(false);
  return (
    <div id="backButtonDiv">
      <div id="sticky" ref={backButtonRef}>
        <div
          id="backButton"
          onClick={(e) => {
            if (!clickedRef.current) {
              clickedRef.current = true;
              const goBackKeyFrames = [
                { transform: "rotateY(0deg)" },
                { transform: "rotateY(90deg)" },
              ];

              const gobackTiming = {
                easing: "ease-in",
                duration: 450,
                iterations: 1,
                fill: "forwards",
              };
              backButtonRef.current.animate(
                goBackKeyFrames,
                gobackTiming,
              ).onfinish = (e) => {
                props.onGoingBack();
              };
            }
          }}
        >
          <img id="backIcon" src={backIcon} width="100px" height="100px" />
        </div>
      </div>
    </div>
  );
}

export default BackButton;
