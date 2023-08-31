import { Card, CardBody, Heading, Image, Stack, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { VscLiveShare } from 'react-icons/vsc'
import 'aos/dist/aos.css';
interface Props {
    id: number;
    imgUrl: string;
    title: string;
    detail: string;
    gitLink: string;
    Live?: string;

}

export const ProjectCard = ({ id, imgUrl, title, detail, gitLink, Live }: Props) => {
    const handleClick = (link: string) => {
        window.open(link, '_blank')
    }
    return (
        <Card
            data-aos={id > 0 ? "zoom-in" : undefined}
            padding={{ base: 0, md: 2 }} maxWidth={'300px'}>
            <CardBody>
                <Image objectFit={'contain'} src={imgUrl} />
                <Stack mt={4} spacing={'3'}>
                    <Heading fontFamily={'ubuntu'}
                        fontSize={{ base: '10px', md: '16px' }} >{title}</Heading>
                    <Text
                        fontSize={{ base: '10px' }}
                        fontFamily={'Montserrat'}
                        fontWeight={'bold'}
                    >
                        {detail}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter display={'flex'} justifyContent={'center'} gap={2} >
                <Button
                    fontFamily={'ubuntu'}
                    bgColor={'blackAlpha.200'}
                    size={'md'}
                    rightIcon={<AiFillGithub />}
                    onClick={() => handleClick(gitLink)}
                >Github</Button>
                {
                    Live && <Button
                        fontFamily={'ubuntu'}
                        bgColor={'blackAlpha.200'}
                        size={{base:'sm' , md:'md'}}
                        rightIcon={<VscLiveShare />}
                        onClick={() => handleClick(Live)}
                    >Live</Button>
                }

            </CardFooter>
        </Card>
    )
}
