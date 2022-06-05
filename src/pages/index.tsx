import type { NextPage } from 'next'
import Head from 'next/head'
import { Image, useColorModeValue, Box, Heading, Text, HStack, Button } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { motion } from "framer-motion"

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>YOHEY KANO - HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH='100vh' width='500' p='1rem 0'>
          <Image m='0 auto' h='150' w='150' src='/character.png' />
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
          >
              <motion.div
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [50, 0] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
               Hello, I'm Web developer based in Japan!
          	  </motion.div>
          </Box>
          <Box
            pt='3rem'
            m='0 auto'
          >
              <HStack spacing={10} ml={4}>
                  <Image
                    borderRadius='30'
                     h='100'
                     w='100'
                     src='/my.jpg'
                  />
                  <Box>
                    <Heading mb={4} size='md'>YOHEY KANO</Heading>
                    <Text fontSize='xl'>
                        Freelance Engineer and HeisaN LLC CEO
                    </Text>
                  </Box>
              </HStack>
          </Box>
          <Box
            pt='3rem'
            m='0 auto'
          >
            <Heading>Skill</Heading>
            <Text pt='1rem'>
              [OS]: Mac / Windows / Linux<br />
              [DB]: MySQL / PostgreSQL<br />
              [SCM]: Git/SVN<br />
              [LANGUAGE]: Java / PHP / Ruby / JavaScript / TypeScript<br />
              [STYLE-FW]: Sass / Bootstrap / Tailwind / Chakra<br />
              [BE-FW]: Play 2 Framework / Laravel / Ruby on Rails / Spring Boot<br />
              [FE-FW]: jQuery / React / Next<br />
              [ENVIROMENT]: AWS / Docker <br />
            </Text>
            <Box textAlign="center" >
                <Button mt='2rem' colorScheme='gray'>Portfolio</Button>
            </Box>
          </Box>
          <Box
            pt='3rem'
            m='0 auto'
          >
            <Heading>Work Concept</Heading>
            <Text pt='1rem'>
                「誠実さ」と「学ぶ姿勢」を重視して働いています。<br />
                <br />
                ・「若いからこそ、”謙虚さ”と”ハングリー精神”を備え持つ事が大事」<br />
                ・「自分に足りない部分を認め、素早く学ぶ」<br />
                ・「今持っている能力が数年後通用するかどうかわからない。だからこそ常に勉強し、ビジネスで結果をだしていく」<br />
                <br />
                今日の自分より、明日の自分がより良くなるように、仕事をしています。
            </Text>
          </Box>
          <Box
            pt='3rem'
            m='0 auto'
          >
            <Heading>Profile</Heading>
            <Text pt='1rem'>
                ①九州の宮崎県で生まれる。3人兄弟の末っ子。<br />
                ②小中高と野球・ソフトボールに明け暮れる。<br />
                ③高校卒業後、東京へ上京し生協のお兄さんとして、世田谷区中心に様々なお宅を訪問しつつ、初めての都会に圧倒される。<br />
                ④様々なご縁に恵まれ、営業・コンサルタント(BtoB)、BP・自社・フリーランスのエンジニアを経験。<br />
                ⑤本業と平行して、輸入販売・物流・ライター・デザイン・飲食なども経験。<br />
                ⑥現在は、フリーランスエンジニアと自社の事業立ち上げで奮闘中。<br />
            </Text>
          </Box>
          <Box
            pt='3rem'
            m='0 auto'
          >
            <Heading>I Love</Heading>
            <Text pt='1rem'>
              ・プライベート：コーヒー＆音楽・本・アニメ/映画・ビジネス・ゲーム・料理<br />
              ・エンジニア：Daisuke Katsura. Kentaro Okada. Takuya Matsuyama. <br />
            </Text>
          </Box>
          <Box
            pt='3rem'
            m='0 auto'
          >
            <Heading>On the WEB</Heading>
            <Text pt='1rem'>
              ・Qiita<br />
              ・GitHub<br />
              ・Medium<br />
              ・Instagram<br />
            </Text>
            <Box textAlign="center" >
                <Button mt='2rem' colorScheme='gray'>Popular posts</Button>
            </Box>
          </Box>
      </Container>
    </>
  )
}

export default Home
