import { Card, CardBody, Heading, Image, Stack, Text, Divider, CardFooter, Button ,Link} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
interface Props {
    imgUrl: string;
    title: string;
    detail: string;
    gitLink: string;

}

export const ProjectCard = ({ imgUrl, title, detail, gitLink }: Props) => {
    return (
        <Card>
            <CardBody>
                <Image src={imgUrl}/>
                <Stack mt='6' spacing='3'>
                    <Heading>{title}</Heading>
                    <Text>
                        {detail}
                    </Text>
                </Stack>
            </CardBody>
            <Divider orientation='horizontal' />
            <CardFooter>
                <Button rightIcon={AiFillGithub} ><Link href={gitLink}>Github</Link></Button>
            </CardFooter>
        </Card>
    )
}
