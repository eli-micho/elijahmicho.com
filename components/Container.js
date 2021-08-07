import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/layout';
import Header from './Header';
import { Box, Text} from '@chakra-ui/react';


export default function Container({ enableTransition, children }) {
    return (
        <>
            <Header enableTransition={enableTransition}/>
            <Flex width="1440px" maxWidth="1440px" as="main" justifyContent="center" flexDirection="column">
                {children}
            </Flex>
            <Box textAlign="center" fontSize="md" mt={100} mb={5}>
                <Text textAlign="center">
                    &#169; {new Date().getFullYear()} Elijah Micho.
                </Text>
            </Box>
        </>
    )
}
