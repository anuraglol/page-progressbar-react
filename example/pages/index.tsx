import { Custom } from '../components';
import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

const ProgressPage: NextPage = () => {
    return (
        <Box minH="1000vh" w="full" bg="#010101">
            <Custom />
        </Box>
    );
};

export default ProgressPage;
