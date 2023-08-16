import { Box, VStack, Text } from '@chakra-ui/react';
import '../App.css'


export const HomePanelBotton = () => {
    return (
        <Box>
            <VStack>
                <Text style={{ fontFamily: 'ubuntu' }} fontWeight={'bold'}
                    color={'#FF08E8'}
                >Hello! I'm</Text>
                <Box style={{ fontFamily: 'Rock Salt' }} fontWeight={'bolder'}>
                    <Text fontSize={{
                        base:'3xl',
                        sm: '2xl',
                        md: '4xl'
                    }} paddingEnd={8}>
                        Muhammad
                    </Text>
                    <Text fontSize={{
                        base: '3xl',
                        sm: '3xl',
                        md: '4xl'
                    }} textAlign="end">
                        Huzaifa
                    </Text>
                </Box>
                <Text style={{ fontFamily: 'Montserrat' }} fontWeight={'bold'}
                    color={'gray.600'}
                >
                   {"< cs student />"}
                </Text>
                <Text style={{ fontFamily: 'Montserrat' }} fontWeight={'bolder'}
                    padding={{base:5,md:8,lg:5}} textAlign={'center'}
                    width={{
                        base: '100%',
                        sm: '100%',
                        md: '90%',
                        lg: '60%'
                    }}
                    fontSize={{
                        base: '14px',
                        sm: '12px',
                        md: '1rem'
                    }}
                >
                    Wellcome, <span style={{ color: '#FF08E8' }} > I'm programmer and visionary full stack web developer </span> based in Pakistan. With my unrenowned
                    skills and passion for innovation,I'have been <span style={{ color: '#FF08E8' }}>evolutionizing the digital landscape,</span> and
                    looking for more opportunities.
                </Text>
            </VStack>
        </Box>
    );
};
