import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import PageProgress from 'react-scroll-progress';

const ProgressPage: NextPage = () => {
    return (
        <Box minH="1000vh" w="full" bg="#010101">
            <PageProgress />
        </Box>
    );
};

export default ProgressPage;
