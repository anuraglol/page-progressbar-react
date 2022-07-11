import PageProgressBar from '../components/Custom';
import { Box } from '@chakra-ui/react';

export default function Page() {
    return (
        <Box minH="1000vh" w="full" overflowX="hidden" bgColor="#010101">
            <PageProgressBar />
        </Box>
    );
}
