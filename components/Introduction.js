import { Stack, Fade, Flex, Box, Text, Image, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

export default function Introduction() {
    const RedText = styled.span`
        color: #D72323;
    `
    return (
        <>
            <Stack spacing={10}>
                <Fade
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.7 } }}
                >
                    <Box position="relative">
                        <Heading
                            fontSize={64}
                            fontWeight="medium"
                        >
                            Hey I'm Elijah
                        </Heading>
                        <Text>
                            I'm a <RedText>Fullstack Software Developer</RedText>
                        </Text>
                    </Box>
                </Fade>

                <Fade 
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.8 } }}
                >
                    <Box
                            borderLeft="1px solid #ffffff"
                            borderTop="1px solid #ffffff"
                        >
                        <Flex
                            justifyContent="space-between"
                        >
                            <Image
                                src="circles.svg"
                                alt=""
                                p={25}
                            >

                            </Image>
                            <Box
                                py={25}
                            >
                                <Stack
                                    alignItems="flex-end"
                                    spacing={25}
                                    fontSize={24}
                                >
                                    <Text>I build fast, responsive and beautiful apps and websites.</Text>
                                    <Text>Welcome to my personal portfolio website. </Text>
                                    <Text>Currently I’m working as a freelancer.</Text>
                                    <Text>Also open to job opportunites.</Text>
                                    <Text>Based in Calgary, AB.</Text>
                                </Stack>
                            </Box>
                        </Flex>
                    </Box>
                </Fade>

                <Fade
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.9 } }}
                >

                </Fade>
            </Stack>
        </>
    )
}
