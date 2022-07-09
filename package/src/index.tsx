import { useTransform, useViewportScroll } from "framer-motion";
import React, { FC } from "react";
import { useEffect, useState } from "react";

interface Props {
  color?: string;
  bgColor?: string;
  showBar?: boolean;
  showCircle: boolean;
}

const PageProgress: FC<Props> = ({
  color = "#ec4899",
  bgColor = "#010101",
  showBar,
  showCircle,
}) => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    yRange.onChange((v) => {
      setProgress(v);
    });
  }, [yRange]);

  return (
    <>
      {showBar && (
        <div
          style={{
            height: "4px",
            minWidth: "100vw",
            overflowX: "hidden",
            backgroundColor: bgColor,
            transformOrigin: "left",
            position: "fixed",
            top: 0,
            transform: `scaleX(${progress}%)`,
          }}
        ></div>
      )}
      {showCircle && (
        <div
          style={{
            height: "75px",
            width: "75px",
            background: `conic-gradient(${color} ${progress}%, #010101 ${progress}%)`,
            borderRadius: "50%",
            position: "fixed",
            top: "20px",
            right: "20px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              height: "calc(100% - 15px)",
              width: "calc(100% - 15px)",
              backgroundColor: bgColor,
              color: color,
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
            }}
          >
            {Math.floor(progress)}%
          </div>
        </div>
      )}
    </>
  );
};

export default PageProgress;
