import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/lexend/600.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Page ProgressBar React | Example</title>
            </Head>
            <ChakraProvider>
                <NextNProgress color="#000" options={{ showSpinnner: false }} />
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
};

export default MyApp;
