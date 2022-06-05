import Head from 'next/head';
import Link from 'next/link';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <Box pt='2rem' bg={useColorModeValue('white', 'black')}>
                <Header />

                <Box>{children}</Box>

                <Footer />
            </Box>
        </>
    );
};

export default Layout;