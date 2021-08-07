import { SimpleGrid, SlideFade, Stack, Heading, Text, Flex, Box, Image, List, ListItem } from "@chakra-ui/react";
import styled from '@emotion/styled';
import SlideUpTransition from "../hooks/SlideUpTransition";

//Icons
import { SiJavascript, SiReact, SiNextDotJs, SiMongodb, SiPython, SiSass, SiRedux, SiGit } from 'react-icons/si';


export default function AboutMe() {
    const IconBox = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        width: 70px;
        height: 70px;
        background-color: #ffffff;
        color: #D72323;
        border-radius: 15px;
    `
    return (
        <>
            <SlideFade in={true} offsetY="50px" transition={{ enter: { duration: 0.4, delay: 1 } }}>
            <Stack spacing={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={120}>
                        <Flex alignItems="center" justifyContent="center" position="relative">
                            <Box
                                maxW={{ base: '300px', lg: '350px '}}
                                maxH={{ base: '300px', lg: '350px' }}
                            >
                                <Image
                                    src="https://i.imgur.com/vVS85Ss.jpg"
                                    
                                    w={{ base: '300px', lg: '350px' }}
                                    h={{ base: '300px', lg: '350px' }}
                                    alt="Elijah Micho"
                                    borderRadius="50%"
                                />
                            </Box>
                        </Flex>
                        <Stack spacing={4}>
                            <Heading fontSize="50px">
                                About Me
                            </Heading>
                            <Text
                                fontSize={{ base: '14px', md: '20px'}}
                                whiteSpace="pre-line"
                            >
                            Hi, my name is Elijah and I am a self-taught fullstack web developer. 
                            <br/>
                            <br/>
                            I graduated with a degree in Civil Engineering in 2019 but knew that my real ambitions lay within the wide world of tech.
                            <br/>
                            <br/>
                            I have spent years developing my programming skills with a particular focus on the latest technologies relevant to web development. 
                            I created this website to showcase my portfolio and to give prospective clients a chance to get in touch with me!
                            </Text>
                        </Stack>
                </SimpleGrid>
                <Stack align="center">
                    <Heading fontSize="50px" mb={25}>
                        Technologies I use
                    </Heading>
                    <SimpleGrid columns={4} spacing={10}>
                        <IconBox><SiJavascript/></IconBox>
                        <IconBox><SiReact/></IconBox>
                        <IconBox><SiNextDotJs/></IconBox>
                        <IconBox><SiMongodb/></IconBox>
                        <IconBox><SiPython/></IconBox>
                        <IconBox><SiSass/></IconBox>
                        <IconBox><SiRedux/></IconBox>
                        <IconBox><SiGit/></IconBox>
                    </SimpleGrid>
                </Stack>
            </Stack>
            </SlideFade>
            
        </>
    )
}
