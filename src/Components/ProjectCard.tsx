import { Card, CardBody, Image} from '@chakra-ui/react'
interface Props{
    imgUrl:string ;
    title:string;
    detail:string;
    gitLink:string;

}

export const ProjectCard = () => {
  return (
    <Card>
        <CardBody>
            <Image/>
        </CardBody>

    </Card>
  )
}
