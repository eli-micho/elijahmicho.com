import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/layout';
import Header from './Header';


export default function Container({ enableTransition, children }) {
    return (
        <>
            <Header enableTransition={enableTransition}/>
            <Flex as="main" justifyContent="center" flexDirection="column">
                {children}
            </Flex>
        </>
    )
}
