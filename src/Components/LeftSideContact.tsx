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

  return (
    <Box data-aos="fade-right"
    
     width={{base:'90%', md: '80%', lg: '50%'}}
    >
        <Image   width={'100%'} src={imageChange} />
    </Box>
  )
}
