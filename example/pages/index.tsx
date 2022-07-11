import { Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import PageProgressBar from 'page-progressbar-react';

const ProgressPage: NextPage = () => {
    return (
        <Box minH="1000vh" w="full" bg="#010101">
            <PageProgressBar />

            <Text
                fontFamily="lexend"
                fontWeight="600"
                fontSize="3xl"
                textAlign="center"
                pos="fixed"
                top="50%"
                left="50%"
                transform="translateX(-50%) translateY(-50%)"
                bgGradient="linear(to right, #ee0979, #ff6a00)"
                bgClip="text"
            >
                SCROLL UP!
            </Text>
        </Box>
    );
};

export default ProgressPage;
