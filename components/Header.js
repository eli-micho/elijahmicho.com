import React from 'react';
import { Button, Flex, Box, Fade, Text, Stack, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Header({ enableTransition }) {
    const { isOpen } = useDisclosure();
    return (
        <Box zIndex="99" width="100%">
            <Fade 
                in={true}
                transition = {
                    enableTransition
                    ? { enter: { duration: 0.5, delay: 0.01 } }
                    : { enter: { duration: 0.3, delay: 0.5 } }
                } 
            >
                <Flex
                    as="nav"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    py="4"
                    borderBottom="2px solid #D72323"
                >
                    <NextLink href="/" passHref>
                        <Text
                            cursor="pointer"
                            color="textPrimary"
                            fontSize="35px"
                        >
                            &#60; /E &#62;
                        </Text>
                    </NextLink>

                    <Box>
                        <NextLink href="/" passHref>
                            <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="18px" >
                                Home
                            </Button>
                        </NextLink>
                        <NextLink href="https://eli-micho.github.io/resume/" passHref isExternal>
                            <Button as="a" variant="ghost" fontSize="18px">  
                                Resume
                            </Button>
                        </NextLink>
                        <NextLink href="/projects" passHref>
                            <Button as="a" variant="ghost" fontSize="18px">
                                Projects
                            </Button>
                        </NextLink>
                        <NextLink href="mailto:olum.micho@gmail.com" passHref>
                            <Button as="a" variant="ghost" fontSize="18px">
                                Contact
                            </Button>
                        </NextLink>
                    </Box>
                </Flex>
            </Fade>
        </Box>
    )
}
