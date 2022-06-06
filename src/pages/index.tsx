import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Image, useColorModeValue, Box, Heading, Text, HStack, Button, Center } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoInstagram, IoLogoMedium } from 'react-icons/io5'
import { SiQiita } from 'react-icons/Si'
import { motion } from "framer-motion"

const Home: NextPage = () => {

  return (
     <>
        <Head>
          <title>YOHEY KANO - HomePage</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box mb='1rem'>
            <Center>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image h='150' w='150' src='/character.png' />
                </motion.div>
            </Center>
        </Box>
        <Box mb='1.5rem' >
            <Center>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                    <Box
                      borderRadius="lg"
                      mb={6}
                      p={3}
                      w='500px'
                      bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
                      textAlign='center'
                    >
                         Hello, I'm Web developer based in Japan!
                    </Box>
                </motion.div>
            </Center>
        </Box>
        <Box>
            <Center>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                    <HStack spacing={10} ml={4}>
                        <Image
                          borderRadius='30'
                          h='100'
                          w='100'
                          src='/my.jpg'
                        />
                        <Box textAlign='left'>
                            <Heading mb={4} size='md'>YOHEY KANO</Heading>
                            <Text fontSize='xl'>
                              Freelance Engineer and HeisaN LLC CEO
                            </Text>
                       </Box>
                    </HStack>
                </motion.div>
            </Center>
            <Center pt='3rem'>
                <HStack spacing={5} ml={4}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                    >
                        <Link href="https://github.com/sanflat">
                            <a>
                                <Button
                                  h='50px'
                                  w='50px'
                                  borderRadius='30'
                                >
                                    <IoLogoGithub/>
                                </Button>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                    >
                        <Link href="https://www.instagram.com/hey9roz">
                            <a>
                                <Button
                                  h='50px'
                                  w='50px'
                                  borderRadius='30'
                                >
                                    <IoLogoInstagram/>
                                </Button>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                    >
                        <Link href="https://medium.com/@hey9roz">
                            <a>
                                <Button
                                  h='50px'
                                  w='50px'
                                  borderRadius='30'
                                >
                                    <IoLogoMedium/>
                                </Button>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                    >
                        <Link href="https://qiita.com/pooh-hey">
                            <a>
                                <Button
                                  h='50px'
                                  w='50px'
                                  borderRadius='30'
                                >
                                    <SiQiita/>
                                </Button>
                            </a>
                        </Link>
                    </motion.div>
                </HStack>
            </Center>
        </Box>
        <Box pt='10rem'>
            <Center>
                <Heading size='md'>...Developing</Heading>
            </Center>
        </Box>
     </>
  )
}

export default Home
