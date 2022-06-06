import { Box, HStack, Image, Heading, Text } from '@chakra-ui/react'

export const Card = () => (
    <>
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
            </HStack>
        </Box>
    </>
);
