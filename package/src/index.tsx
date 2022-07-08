import { useTransform, useViewportScroll } from "framer-motion";
import React, { FC } from "react";
import { useEffect, useState } from "react";

interface Props {
  color?: string;
}

const PageProgress: FC<Props> = ({ color }) => {
  const bgColor = color ? color : "#ec4899";

  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    yRange.onChange((v) => {
      setProgress(v);
    });
  }, [yRange]);

  return (
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
  );
};

export default PageProgress;
