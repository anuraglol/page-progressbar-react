import { useTransform, useViewportScroll } from "framer-motion";
import React, { FC } from "react";
import { useEffect, useState } from "react";

interface Props {
  color?: string;
  height?: number;
}

const PageProgressBar: FC<Props> = ({ color = "#ec4899", height = 4 }) => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    yRange.onChange((v: number) => {
      setProgress(v);
    });
  }, [yRange]);

  return (
    <>
      <div
        style={{
          height: `${height}px`,
          minWidth: "100vw",
          overflowX: "hidden",
          backgroundColor: color,
          transformOrigin: "left",
          position: "fixed",
          top: 0,
          transform: `scaleX(${progress}%)`,
        }}
      ></div>
    </>
  );
};

export default PageProgressBar;