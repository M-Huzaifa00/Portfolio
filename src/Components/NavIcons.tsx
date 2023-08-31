import { HStack, Icon } from "@chakra-ui/react";
import { ColorModeSwitch } from './ColorModeSwitch'
import { ReactNode } from "react";
import { useColorMode } from '@chakra-ui/react';


interface iconsMap {
    icon: ReactNode;
    desc: string;
    flag: boolean;

}
interface Props {
    iconArray: iconsMap[];
}

export const NavIcons = ({ iconArray }: Props) => {
    const handleClick = (navigate: string) => {
        const element = document.getElementById(navigate);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const { colorMode } = useColorMode();
    const changeBg = colorMode === 'light' ? '#fff' : 'gray.900';
    return (
        <HStack
            bgColor={changeBg}
            justifyContent={'center'} fontSize={'18px'} padding={3.5}
            gap={{ base: '1rem', sm: '1.5rem', md: '1.5rem', lg: '2rem' }}
        >
            {
                iconArray.map(({ icon, desc, flag }) => <Icon
                    borderBottom={flag ? '2px solid #FF08E8' : 'none'}
                    cursor={'pointer'}
                    paddingStart={0.5}
                    fontSize='20px'
                    color={flag ? '#FF08E8' : 'none'}
                    onClick={() => handleClick(desc)}
                    key={desc} >
                    {icon}
                </Icon>)
            }
            <ColorModeSwitch />
        </HStack>
    )
}
