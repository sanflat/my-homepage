import * as React from "react"
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'
import {
  Link,
  Box,
  Flex,
  HStack,
  Center,
  useColorModeValue
} from '@chakra-ui/react'

export const Header = () => (
    <Box
      w="100%"
      h="80px"
    >
        <Center>
          <HStack spacing={20} mt={4}>
              <Link href="/">
                Portfolio
              </Link>
              <Link href="/">
                Posts
              </Link>
              <Link target="_blank" href="https://github.com/sanflat">
                <IoLogoGithub />
              </Link>
              <Box align="right">
                <ThemeToggleButton />
              </Box>
          </HStack>
        </Center>
    </Box>
);
