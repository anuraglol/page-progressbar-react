import { Box } from '@chakra-ui/react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
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
            <motion.div>
                <Box
                    pos="fixed"
                    top="0"
                    h="1"
                    w="full"
                    bg="pink.600"
                    transform={`scaleX(${progress}%)`}
                    transformOrigin="left"
                ></Box>
            </motion.div>
        </Box>
    );
};

export default ProgressPage;
