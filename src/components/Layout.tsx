import Head from 'next/head';
import Link from 'next/link';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react'

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />

            <Box>{children}</Box>

            <Footer />
        </>
    );
};

export default Layout;