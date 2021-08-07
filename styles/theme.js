import { theme, extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const maxWidth = {
    width: '1440px'
}

const Button = {
    baseStyle: {
    }
}
const colors = {
    background: '#212121',
    secondary: '#D72323',
    textPrimary: '#FFFFFF'
};

const fonts = {
    ...theme.fonts,
    body: `Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const overrides = {
    ...theme,
    components: {
    },
    config,
    colors,
    fonts,
};


const customTheme = extendTheme(overrides);

export default customTheme