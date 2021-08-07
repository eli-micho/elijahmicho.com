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
         body {
           font-family: Nunito;
           display: flex;
           justify-content: center;
           background-image: repeating-linear-gradient(45deg, rgba(97,97,97,0.1) 0px, rgba(97,97,97,0.1) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33));
         }
         html {
           min-width: 356px;
         }
         #__next {
           display: flex;
           flex-direction: column;
           align-items: center;
           min-height: 100vh;
           max-width: 1440px;
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
