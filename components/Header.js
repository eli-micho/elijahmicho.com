import React from 'react';
import { Button, Flex, Box, Fade, Text, Stack, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Header() {
    const { isOpen } = useDisclosure();
    return (
        <Box>
            <Fade in={true}>
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
                        <Button as="a" variant="ghost">
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
            </Fade>
        </Box>
    )
}
