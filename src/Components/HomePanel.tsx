import { useColorMode, Image, SimpleGrid, Box } from "@chakra-ui/react"
import BlackImage from '../assets/png black.png'
import WhiteImage from '../assets/png white.png'
import { HomePanelBotton } from "./HomePanelBotton";
import { useInViewPort } from "./Hook/useInViewPort";
import { useShifterStore } from "../Zustand/useShifterStore";



export const HomePanel = () => {
    const { InViewPort } = useInViewPort("HOME")
    const  setHome  = useShifterStore( s=> s.setHome );
    setHome(InViewPort)
    const { colorMode } = useColorMode();
    const adjustImage = colorMode === 'light' ? BlackImage : WhiteImage;
    const flag = colorMode === 'dark' ? 'drop-shadow(3px 3px 7px #FF08E8)' : undefined;
    return (
        <>
            <SimpleGrid display={'flex'} justifyContent={'center'}  >
                <Box
                id='HOME'
                    width={{
                        base: '100%', sm: '100%', md: '48%', lg: '39%'
                    }}
                    marginTop={{ base: 4 }}
                >
                    <Image
                        filter={flag}
                        paddingTop={{ base: 1 }}
                        width={'100%'} src={adjustImage}></Image>
                </Box>
            </SimpleGrid>
            <SimpleGrid>
                <HomePanelBotton />
            </SimpleGrid>


        </>

    )
}
