import React, { useState, useEffect } from "react";

const ProgressTracker = ({ scrollableRef }) => {
  const [debugInfo, setDebugInfo] = useState({
    progress: 0,
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0,
    calculationPossible: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollableRef.current;
      if (!element) {
        console.warn("Scroll element is null");
        return;
      }

      // Get scroll values
      const scrollTop = Math.round(element.scrollTop);
      const scrollHeight = Math.round(element.scrollHeight);
      const clientHeight = Math.round(element.clientHeight);

      // Check if we can calculate progress
      const scrollableDistance = scrollHeight - clientHeight;
      const calculationPossible = scrollableDistance > 0;

      // Calculate progress only if possible
      let progress = 0;
      if (calculationPossible) {
        progress = (scrollTop / scrollableDistance) * 100;
        progress = Math.min(Math.max(progress, 0), 100); // Clamp between 0 and 100
      }

      console.log("Scroll Debug:", {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollableDistance,
        calculationPossible,
        progress,
      });

      setDebugInfo({
        progress,
        scrollTop,
        scrollHeight,
        clientHeight,
        calculationPossible,
      });
    };

    const element = scrollableRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      // Initial calculation
      handleScroll();
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollableRef]);

  return (
    <div
      className=" fixed top-0 left-0 w-full bg-red-500   z-50 text-xs  mt-1"
      style={{
        width: `${debugInfo.progress}%`,
        minHeight: "4px",
        background: "rgb(239 68 68 / var(--tw-bg-opacity))",
      }}
    />
  );
};

export default ProgressTracker;
