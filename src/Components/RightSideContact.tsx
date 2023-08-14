import { Box, Text, } from "@chakra-ui/react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export const RightSideContact = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1000 });
    }, 100);   
  }, []);

  return (
    <Box
      overflow={'hidden'}
      fontWeight={'bolder'} fontFamily={'Montserrat'}
      width={{ sm: '90%', md: '90%', lg: '70%' }} padding={{ base: 3, md: 6, lg: 7 }}>
      <Text
       data-aos='fade-left'
       fontSize={{ base: '10px', md: '1rem', lg: '1.2rem' }}
      >Hey there! I'm M Huzaifa Abdulahad, a 20-year-old programmer and full stack web developer
        hailing from the charming state of Chakwal, Pakistan. My passion lies in crafting
        visually stunning interfaces through React, paired with either Chakra UI or Tailwind CSS.
        With a hunger for learning, I eagerly dive into new technologies and frameworks to stay at
        the forefront of web development. Let's build the future together!</Text>
    </Box>
  )
}
