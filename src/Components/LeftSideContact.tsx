import { Box , useColorMode , Image} from "@chakra-ui/react";
import whiteImg from '../assets/Contact white.png';
import BlackImg from '../assets/Contact Black.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const LeftSideContact = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1000 });
    }, 100);   
  }, []);
  
    const { colorMode } = useColorMode();
    const imageChange = colorMode === 'light' ? BlackImg : whiteImg ;
    const flag = colorMode === 'dark' ? 'drop-shadow(2px 2px 5px #FF08E8)' : undefined;

  return (
    <Box data-aos="fade-right"
    
     width={{base:'90%', md: '80%', lg: '50%'}}
    >
        <Image filter={flag}  width={'100%'} src={imageChange} />
    </Box>
  )
}
