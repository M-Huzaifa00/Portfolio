import { Icon } from '@chakra-ui/react';
import { ReactNode } from 'react'

interface Props{
    icon:ReactNode;
    link:string;
}

export const RightSideIcon = ({icon,link} : Props) => {
    const navigate = (link:string) =>{
        window.open(link,"_blank");
    }
  return (
        <Icon 
        boxSize={{  base:'40px' , md:'50px'}}
        onClick={() => navigate(link)}
        > {icon} </Icon>
  )
}

