import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import customTheme from '../styles/theme';
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
         styles={css`
         ::selection {
           background-color: #212121;
           color: #ffffff;
         }
         ::-moz-selection {
           background: #212121;
           color: #fefefe;
         }
         html {
           min-width: 356px;
         }
         #__next {
           display: flex;
           flex-direction: column;
           min-height: 100vh;
           background: #000;
         }
         ::-webkit-scrollbar {
           width: 8px;
           background: #080808;
         }
         ::-webkit-scrollbar-thumb {
           background: #111111;
           border-radius: 8px;
         }
       `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <Component {...pageProps}/>
      </GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp
