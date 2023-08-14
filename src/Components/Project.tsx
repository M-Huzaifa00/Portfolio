import { Heading, SimpleGrid } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import gameHub from '../assets/gamehub.png';
import HMS from '../assets/HMS.jpg';
import DBMS from '../assets/DBMS.png';

const projectData = [
    { id:1 , imgUrl: gameHub, title: 'GameHub', detail: 'A gaming database created using RAWG API in react js.', gitLink: 'https://github.com/M-Huzaifa00/game-hub' },
    { id:2 , imgUrl: HMS, title: 'Hotel Management System', detail: 'Full HMS using C++ fundamentals.', gitLink: 'https://github.com/M-Huzaifa00/Hotel-Management-system' },
    { id:3 , imgUrl: DBMS, title: 'Mini DataBase', detail: 'A Data was built with c++ OOP concepts that accepts queries.', gitLink: 'https://github.com/M-Huzaifa00/DATABASE' }
]


export const Project = () => {
    return (
        <>
           <Heading textAlign={'center'}
           fontSize={{md:'5xl'}}
           padding={4}
           fontFamily={'ubuntu'}
            >Mine Innovations</Heading>

            <SimpleGrid
                columns={{
                    base: 2,
                    md: 3,
                    lg: 3
                }}
                spacing={5}
                padding={{
                    base: 4,
                    md: 8
                }}
            >
                {
                    projectData.map(({id , imgUrl, title, detail, gitLink }) => <ProjectCard key={id} id={id} imgUrl={imgUrl} title={title} detail={detail} gitLink={gitLink} />)
                }
            </SimpleGrid>
        </>

    )
}
