import NextLink from 'next/link'
import ThemeToggleButton from './theme-toggle-button'
import { Box } from '@chakra-ui/react'

export const Header = () => (
    <Box w='80%' h='1.5rem' textAlign='right'>
      <ThemeToggleButton />
    </Box>
);
