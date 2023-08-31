import { Heading, SimpleGrid } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import gameHub from '../assets/gamehub.png';
import HMS from '../assets/HMS.jpg';
import DBMS from '../assets/DBMS.png';
import Movie from '../assets/Movies.png'
import { useInViewPort } from './Hook/useInViewPort';
import { useShifterStore } from '../Zustand/useShifterStore';

const projectData = [
    { id: 1, imgUrl: gameHub, title: 'GameHub', detail: 'A gaming database created using RAWG API in react js.', gitLink: 'https://github.com/M-Huzaifa00/Game-Fusion', Live: 'https://game-hub-kappa-ochre.vercel.app/' },
    { id: 2, imgUrl: HMS, title: 'Hotel Management System', detail: 'Full HMS using C++ fundamentals.', gitLink: 'https://github.com/M-Huzaifa00/Hotel-Management-system', Live: undefined },
    { id: 3, imgUrl: DBMS, title: 'Mini DataBase', detail: 'A Data was built with c++ OOP concepts that accepts queries.', gitLink: 'https://github.com/M-Huzaifa00/DATABASE', Live: undefined },
    { id: 4, imgUrl: Movie, title: 'MoviesXShows', detail: 'A movies and series database created using TMBD API in react js.', gitLink: 'https://github.com/M-Huzaifa00/Movie', Live: 'https://filmxfusion.vercel.app/' }
]


export const Project = () => {
    const { InViewPort } = useInViewPort("Project")
    const setProject = useShifterStore(s => s.setProject);
    setProject(InViewPort)
    return (
        <>
            <Heading
                id="Project"
                textAlign={'center'}
                fontSize={{ md: '5xl' }}
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
                    projectData.map(({ id, imgUrl, title, detail, gitLink, Live }) => <ProjectCard key={id} Live={Live} id={id} imgUrl={imgUrl} title={title} detail={detail} gitLink={gitLink} />)
                }
            </SimpleGrid>
        </>

    )
}
