import Head from 'next/head';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react'

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <Box pt='2rem' bg={useColorModeValue('white', 'black')}>
                <Header />

                <Container minH='100vh' width='90%' p='1rem 0'>{children}</Container>

                <Footer />
            </Box>
        </>
    );
};

export default Layout;