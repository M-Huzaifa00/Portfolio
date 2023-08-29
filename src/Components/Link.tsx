import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react"
import { LeftSideLink } from "./LeftSideLink"
import { AiFillInstagram, AiOutlineGithub } from 'react-icons/ai';
import { RightSideIcon } from './RightSideIcon'
import { useInViewPort } from "./Hook/useInViewPort";
import { useShifterStore } from "../Zustand/useShifterStore";


const social = [
    { id: 1, icon: <AiFillInstagram />, socialLink: "https://www.instagram.com/huxaifa_mirxa/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" },
    { id: 2, icon: <AiOutlineGithub />, socialLink: "https://github.com/M-Huzaifa00" }

]

export const Link = () => {
    const { InViewPort } = useInViewPort("Link")
    const setLink = useShifterStore(s => s.setLink)
    setLink(InViewPort)
    return (
        <SimpleGrid
            columns={2}
            paddingTop={{
                base: 4,
                lg: 5
            }}
        >
            <Box
                id="Link"

                paddingY={4} display={'flex'} justifyContent={'flex-end'} >
                <LeftSideLink />
            </Box>
            <Box display={'flex'} justifyContent={{ base: "center", md: "normal" }} alignItems={'center'} >
                <VStack>

                    <Heading paddingBottom={{ base: 2, md: 4 }} fontSize={{
                        md: "25px",
                        lg: '40px',
                        base: "13px"
                    }}
                        fontFamily={'Rock salt'} >Join My Network</Heading>
                    {
                        social.map(({ id, icon, socialLink }) => (
                            <RightSideIcon key={id} icon={icon} link={socialLink} />
                        ))
                    }
                </VStack>

            </Box>
        </SimpleGrid>
    )
}
