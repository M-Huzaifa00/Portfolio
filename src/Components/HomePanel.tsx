import { useColorMode, Image, SimpleGrid, Box } from "@chakra-ui/react"
import BlackImage from '../assets/png black.png'
import WhiteImage from '../assets/png white.png'
import { HomePanelBotton } from "./HomePanelBotton";




export const HomePanel = () => {
    const { colorMode } = useColorMode();
    const adjustImage = colorMode === 'light' ? BlackImage : WhiteImage;
    return (
        <>
            <SimpleGrid display={'flex'} justifyContent={'center'} >
                <Box
                    width={{
                        base: '100%', sm: '100%', md: '48%', lg: '39%'
                    }}
                    marginTop={{base:4}}
                >
                    <Image 
                    paddingTop={{base:1}}
                    width={'100%'} src={adjustImage}></Image>
                </Box>
            </SimpleGrid>
            <SimpleGrid>
                <HomePanelBotton />
            </SimpleGrid>


        </>

    )
}