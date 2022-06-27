import { Box, CircularProgress } from '@chakra-ui/react';
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const [progress, setProgress] = useState<number>();

    useEffect(() => {
        yRange.onChange(v => {
            setProgress(Math.trunc(v));
        });
    }, [yRange]);

    return (
        <Box
            minH="300vh"
            w="full"
            bgGradient="linear(180deg, #f08, #d0e)"
            overflowX="hidden"
        >
            <motion.div>
                <Box
                    h="20"
                    w="20"
                    bgColor="white"
                    rounded="16"
                    pos="fixed"
                    top="50%"
                    left="50%"
                    transform="translateX(-50%) translateY(-50%)"
                    cursor="pointer"
                    display="grid"
                    placeItems="center"
                >
                    <CircularProgress as={motion.div} value={progress} />
                </Box>
            </motion.div>
        </Box>
    );
};

export default Home;
