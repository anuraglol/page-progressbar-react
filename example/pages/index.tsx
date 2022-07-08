import { Box } from '@chakra-ui/react';
import { useTransform, useViewportScroll } from 'framer-motion';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const ProgressPage: NextPage = () => {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        yRange.onChange(v => {
            setProgress(v);
        });
    }, [yRange]);

    return (
        <Box minH="1000vh" w="full" bg="#010101">
            <div
                style={{
                    height: '4px',
                    minWidth: '100vw',
                    overflowX: 'hidden',
                    backgroundColor: '#ec4899',
                    transformOrigin: 'left',
                    position: 'fixed',
                    top: 0,
                    transform: `scaleX(${progress}%)`,
                }}
            ></div>
        </Box>
    );
};

export default ProgressPage;
