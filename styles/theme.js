import { theme, extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const colors = {
    background: '#212121',
    secondary: '#D72323',
    textPrimary: '#FFFFFF'
};

const fonts = {
    ...theme.fonts,
}

const overrides = {
    ...theme,
    config,
    colors,
    fonts
};

const customTheme = extendTheme(overrides);

export default customTheme