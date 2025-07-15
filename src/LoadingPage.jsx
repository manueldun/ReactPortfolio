import { useState, useRef, useEffect } from "react";
import "./Loading.css";
function LoadingPage(props) {
  const loadingRef = useRef(null);
  const introAnimationEndRef = useRef(false);
  const introAnimationStartRef = useRef(false);
  const loaderRef = useRef(null);
  useEffect(() => {
    let appearAnimation = new Animation();
    if (props.visible && !introAnimationStartRef.current) {
      introAnimationStartRef.current = true;
      const appearFrames = [{ opacity: "0.0" }, { opacity: "1.0" }];
      const appearTiming = {
        easing: "ease-out",
        duration: 1000,
        iterations: 1,
        fill: "forwards",
      };
      appearAnimation = loaderRef.current.animate(appearFrames, appearTiming);

      appearAnimation.onfinish = () => {
        introAnimationEndRef.current = true;
      };
    } else {
      loaderRef.current.style = { opacity: "0.0" };
    }

    return () => {
      introAnimationEndRef.current = true;
      appearAnimation.cancel();
    };
  }, [props.visible]);

  useEffect(() => {
    let vanishAnimation = new Animation();
    if (!props.visible && introAnimationEndRef.current) {
      introAnimationEndRef.current = false;
      const vanishframes = [{ opacity: "1.0" }, { opacity: "0.0" }];
      const vanishtiming = {
        easing: "ease-out",
        duration: 500,
        iterations: 1,
        fill: "forwards",
      };
      vanishAnimation = loadingRef.current.animate(vanishframes, vanishtiming);

      vanishAnimation.onfinish = () => {
        loadingPage = null;
      };
    }
    return () => {
      vanishAnimation.cancel();
    };
  }, [props.visible, introAnimationEndRef.current]);

  let loadingPage = (
    <div ref={loadingRef} id="loading">
      <div ref={loaderRef} className="loader"></div>
    </div>
  );
  return loadingPage;
}

export default LoadingPage;
