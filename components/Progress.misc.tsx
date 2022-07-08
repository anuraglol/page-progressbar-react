import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';

function Custom() {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        yRange.onChange(v => {
            setProgress(v);
        });
    }, [yRange]);

    return (
        <div
            style={{
                height: '4px',
                minWidth: '100vw',
                overflowX: 'hidden',
                backgroundColor: '#fff',
                transformOrigin: 'left',
                position: 'fixed',
                top: 0,
                transform: `scaleX(${progress}%)`,
            }}
        ></div>
    );
}

export { Custom };
