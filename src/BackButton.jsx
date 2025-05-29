import { useRef } from "react";
import backIcon from "./assets/back-arrow-svgrepo-com.svg";
function BackButton(props) {
  const backButtonRef = useRef(null);
  return (
    <div
      ref={backButtonRef}
      id="backButton"
      onClick={(e) => {
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
        backButtonRef.current.animate(goBackKeyFrames, gobackTiming).onfinish =
          (e) => {
            props.onSelection("selectionPage");
          };
      }}
    >
      <img id="backIcon" src={backIcon} width="100px" height="100px" />
    </div>
  );
}

export default BackButton;
