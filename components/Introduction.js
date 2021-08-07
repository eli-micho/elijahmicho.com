import { Stack, VStack, Fade, Flex, Button, ButtonGroup, Box, Text, Image, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link'
//Antd Icons
import { MailFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';

export default function Introduction() {
    const RedText = styled.span`
        color: #D72323;
    `
    return (
        <>
            <Stack spacing={10} mb={[20,30]}>
                <Fade
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.7 } }}
                >
                    <Box 
                        position="relative"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        py="4"
                        margin="15px 0"
                    >
                        <Heading
                            fontSize={64}
                            fontWeight="medium"
                        >
                            Hey, I&apos;m Elijah
                        </Heading>
                        <Text
                            fontSize={72}
                        >
                            I&apos;m a <RedText>Fullstack Software Developer</RedText>
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
                            maxHeight="274px"
                        >
                        <Flex
                            justifyContent="space-between"
                        >
                            <Image
                                src="circles.svg"
                                alt=""
                                p={25}
                                maxHeight="274px"
                            >

                            </Image>
                            <Box
                                py={25}
                            >
                                <VStack
                                    alignItems="flex-end"
                                    spacing={13}
                                    fontSize={24}
                                >
                                    <Text>I build fast, responsive and beautiful apps and websites.</Text>
                                    <Text>Welcome to my personal portfolio website. </Text>
                                    <Text>Currently I’m working as a freelancer.</Text>
                                    <Text>Also open to job opportunites.</Text>
                                    <Text>Based in Calgary, AB.</Text>
                                </VStack>
                            </Box>
                        </Flex>
                    </Box>
                </Fade>

                <Fade
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.9 } }}
                >
                    <Box 
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Heading
                            fontWeight="regular"
                            marginBottom="36px"
                        >
                            Get in touch.
                        </Heading>
                        <Stack>
                            <ButtonGroup variant="solid" spacing="20">
                                <Link href="mailto:olum.micho@gmail.com" passHref isExternal>
                                    <Button 
                                        leftIcon={<MailFilled style={{ fontSize: '25px', color:'#D72323'}}/>}
                                        color="#212121"
                                        backgroundColor="#ffffff"
                                        size="lg"
                                    >
                                        Email
                                    </Button>
                                </Link>
                                <Link href="https://linkedin.com/in/elijah-micho9" passHref isExternal>
                                    <Button 
                                        leftIcon={<LinkedinFilled style={{ fontSize: '25px', color:'#D72323'}}/>} c
                                        color="#212121"
                                        backgroundColor="#ffffff"
                                        size="lg"
                                    >
                                        LinkedIn
                                    </Button>
                                </Link>
                                <Link href="https://github.com/eli-micho" passHref isExternal>
                                    <Button 
                                        leftIcon={<GithubFilled style={{ fontSize: '25px', color:'#D72323'}} />} 
                                        color="#212121"
                                        backgroundColor="#ffffff"
                                        size="lg"
                                    >
                                         Github
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </Stack>
                    </Box>
                </Fade>
            </Stack>
        </>
    )
}
