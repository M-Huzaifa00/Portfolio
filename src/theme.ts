import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config : ThemeConfig =  {
    initialColorMode : 'light' 
};

const theme = extendTheme({
    colors:{
        gray:{
            50:'#f9f9f9',
            100:'#ededed',
            200:'#d3d3d3',
            400:'#a0a0a0',
            500:"#898989",
            600:'#636363',
            700:'#202020',
            800:'#121212',
            900:'#111'
        }
    },
    config});

export default theme;