import { Box , Image} from '@chakra-ui/react'
import whiteBeard from '../assets/beard man white.png'
import blackBeard from '../assets/beard man black.png'
import { useColorMode } from '@chakra-ui/react';



export const LeftSideLink = () => {
    const { colorMode } = useColorMode();
    const changeImg = colorMode === 'light' ? blackBeard : whiteBeard ;
    const flag = colorMode === 'dark' ? 'drop-shadow(2px 2px 7px #FF08E8)' : undefined;
  return (
    <Box width={{md:'50%'}}
    padding={{base:2,md:0}}
     >
        <Image 
        className='customAnimation'
        filter={flag}  src={changeImg} />
    </Box> 
   )
}
