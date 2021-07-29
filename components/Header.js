import React from 'react';
import { Button, Flex, Box, Fade, Text, Stack, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Header({ enableTransition }) {
    const { isOpen } = useDisclosure();
    return (
        <Box zIndex="99">
            <Fade 
                in={true}
                transition = {
                    enableTransition
                    ? { enter: { duration: 0.5, delay: 0.01 } }
                    : { enter: { duration: 0, delay: 0 } }
                } 
            >
                <Flex
                    as="nav"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    px="6vw"
                    py="4"
                    borderBottom="1px solid #D72323"
                >
                    <NextLink href="/" passHref>
                        <Text
                            cursor="pointer"
                            color="textPrimary"
                            fontSize="35px"
                        >
                            &#60;/E&#62;
                        </Text>
                    </NextLink>

                    <Box>
                        <NextLink href="/about" passHref>
                            <Button as="a" variant="ghost" p="4" ml="3vw">
                                About Me
                            </Button>
                        </NextLink>
                        <NextLink href="/resume" passHref>
                            <Button as="a" variant="ghost">  
                                Resume
                            </Button>
                        </NextLink>
                        <NextLink href="/projects" passHref>
                            <Button as="a" variant="ghost">
                                Projects
                            </Button>
                        </NextLink>
                        <NextLink href="/contact" passHref>
                            <Button as="a" variant="ghost">
                                Contact
                            </Button>
                        </NextLink>
                    </Box>
                </Flex>
            </Fade>
        </Box>
    )
}
