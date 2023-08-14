import { Box , Text } from '@chakra-ui/react'
const date = new Date();


export const Footer = () => {
  return (
    <Box  width={"100%"} alignItems={'center'} 
    display={'flex'} justifyContent={'center'}
     flexDirection={'column'}
     padding={6}

     >
        <Text
        fontFamily={'ubuntu'}
        fontSize={{base:'12px' , md:'16px'}}
        
        >made with ❤️ by <span style={{color:'#FF08E8' , fontStyle:"bolder"}} >M Huzaifa</span></Text>
     <Text
     width={"100%"}
     textAlign={'center'}
     color={'gray.400'}
     fontFamily={'Montserrat'}
     fontWeight={"bolder"}
     fontSize={{base:'10px' , md:'14px'}}
     >All rights are reserved &#xA9; {date.getFullYear()} </Text>
    </Box>
  )
}
