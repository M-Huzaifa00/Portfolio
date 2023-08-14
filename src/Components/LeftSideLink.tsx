import { Box , Image} from '@chakra-ui/react'
import whiteBeard from '../assets/beard man white.png'
import blackBeard from '../assets/beard man black.png'
import { useColorMode } from '@chakra-ui/react';



export const LeftSideLink = () => {
    const { colorMode } = useColorMode();
    const changeImg = colorMode === 'light' ? blackBeard : whiteBeard ;
  return (
    <Box width={{md:'50%'}}
    padding={{base:2,md:0}}
     >
        <Image  src={changeImg} />
    </Box> 
   )
}
