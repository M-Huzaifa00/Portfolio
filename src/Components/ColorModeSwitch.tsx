import { Icon, useColorMode } from '@chakra-ui/react';
import { BsFillSunFill } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';

export const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const handleClick = () => {
        toggleColorMode();
    };

    return (
        <Icon fontSize={'20px'} onClick={handleClick}>
            {colorMode === 'light' ? <RiMoonClearFill /> : <BsFillSunFill />}
        </Icon>
    );
};

export default ColorModeSwitch;
