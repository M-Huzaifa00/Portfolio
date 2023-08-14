import { Card, CardBody, CardHeader, Heading, Icon, Text } from "@chakra-ui/react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, ReactNode } from 'react'

interface Props {
    id: number;
    icon: ReactNode;
    heading: string;
    detail: string;
}


export const SkillCard = ({ id, icon, heading, detail }: Props) => {
    useEffect(() => {
        setTimeout(() => {
            AOS.init({ duration: 1500 });
        }, 100);
    }, []);
    return (
        <Card
            boxShadow={'dark-lg'}
            bgColor={id == 1 ? 'blackAlpha.800' : undefined}
            color={id == 1 ? 'white' : undefined}
            data-aos={id == 1 ? 'flip-left' : undefined}
            borderRadius={10} >
            
            <CardHeader paddingStart={5}>
                <Icon fontSize={'25px'}>{icon}</Icon>
            </CardHeader>
            <CardBody>
                <Heading fontFamily={'ubuntu'}
                fontSize={{base:'10px' , md:'1rem'}}>{heading}</Heading>
                <Text color={'gray.600'}
                    fontWeight={'bold'} fontFamily={'Montserrat'} fontSize={{ base:'10px' , md:'15px'}} >{detail}</Text>
            </CardBody>
        </Card>
    )
}
