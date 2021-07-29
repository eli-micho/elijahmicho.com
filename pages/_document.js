import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap" rel="stylesheet"/>
                <meta name="theme-color" content="black"/>
                <Head/>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        )
    }
}