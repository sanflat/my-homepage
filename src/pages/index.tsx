import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { Section } from '../components/section'
import { Card } from '../components/card'
import { Image, LinkOverlay, LinkBox, useColorModeValue, Box, Heading, Text, HStack, Button, Center, Badge, SimpleGrid, Divider } from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import { AiFillMediumCircle } from 'react-icons/Ai'
import { SiQiita } from 'react-icons/Si'
import { motion, useAnimation,whileHover,onHoverStart,onHoverEnd } from "framer-motion"

const Home: NextPage = () => {

  return (
     <>
          <Head>
            <title>YOHEY KANO - HomePage</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Image m='0 auto' h='150' w='150' mb='1rem' src='/character.png' />
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
          >
               Hello, I'm Web developer based in Japan!
          </Box>
          <Card />
          <Box
            pt='3rem'
            m='0 auto'
          >
            <Heading as="h3" fontSize={20} mb={4} textAlign="center" >
               Portfolio
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                  <Box w="100%" textAlign="center">
                    <NextLink href={`/works/1`} passHref scroll={false}>
                      <LinkBox cursor="pointer">
                        <Image
                          src='/character.png'
                          alt='title'
                          className="grid-item-thumbnail"
                          placeholder="blur"
                        />
                        <LinkOverlay href={`/works/1`}>
                          <Text mt={2} fontSize={20}>
                            title
                          </Text>
                        </LinkOverlay>
                        <Text fontSize={14}>children</Text>
                      </LinkBox>
                    </NextLink>
                  </Box>
                  <Box w="100%" textAlign="center">
                    <NextLink href={} passHref scroll={false}>
                      <LinkBox cursor="pointer">
                        <Image
                          src='/character.png'
                          alt='title'
                          placeholder="blur"
                        />
                        <LinkOverlay href={}>
                          <Text mt={2} fontSize={20}>
                            title
                          </Text>
                        </LinkOverlay>
                        <Text fontSize={14}>children</Text>
                      </LinkBox>
                    </NextLink>
                  </Box>
            </SimpleGrid>
          </Box>
          <Box
            pt='3rem'
            m='0 auto'
            textAlign="center"
          >
            <Heading as="h3" fontSize={20} mb={4} textAlign="center" >
               Work Concept
            </Heading>
            <Text pt='1rem'>
                ”誠実さ”と”学ぶ姿勢”を重視して働いています。<br />
                <br />
                「若いからこそ、謙虚さとハングリー精神を備え持つ事が大事」<br />
                <br />
                「自分に足りない部分を認め、素早く学ぶ」<br />
                <br />
                「今持っている能力が数年後通用するかどうかわからない。だからこそ常に勉強し、ビジネスで結果をだしていく」<br />
                <br />
                今日の自分より、明日の自分がより良くなるように、仕事をしています。
            </Text>
          </Box>
          <Box
            pt='3rem'
            m='0 auto'
            textAlign="center"
          >
            <Heading as="h3" fontSize={20} mb={4} textAlign="center" >
               Posts
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                  <Box w="100%" textAlign="center">
                    <NextLink href={`/works/1`} passHref scroll={false}>
                      <LinkBox cursor="pointer">
                        <Image
                          src='/character.png'
                          alt='title'
                          className="grid-item-thumbnail"
                          placeholder="blur"
                        />
                        <LinkOverlay href={`/works/1`}>
                          <Text mt={2} fontSize={20}>
                            title
                          </Text>
                        </LinkOverlay>
                        <Text fontSize={14}>children</Text>
                      </LinkBox>
                    </NextLink>
                  </Box>
                  <Box w="100%" textAlign="center">
                    <NextLink href={`/works/1`} passHref scroll={false}>
                      <LinkBox cursor="pointer">
                        <Image
                          src='/character.png'
                          alt='title'
                          className="grid-item-thumbnail"
                          placeholder="blur"
                        />
                        <LinkOverlay href={`/works/1`}>
                          <Text mt={2} fontSize={20}>
                            title
                          </Text>
                        </LinkOverlay>
                        <Text fontSize={14}>children</Text>
                      </LinkBox>
                    </NextLink>
                  </Box>
              </SimpleGrid>
          </Box>
          <Box
                pt='3rem'
                m='0 auto'
                textAlign="center"
              >
                <Heading as="h3" fontSize={20} mb={4} textAlign="center" >
                   I Love
                </Heading>
                <Text pt='1rem'>
                  プライベート：コーヒー＆音楽・本・アニメ/映画・ビジネス・ゲーム・料理<br />
                  エンジニア：Daisuke Katsura. Kentaro Okada. Takuya Matsuyama. <br />
                </Text>
          </Box>
     </>
  )
}

export default Home
