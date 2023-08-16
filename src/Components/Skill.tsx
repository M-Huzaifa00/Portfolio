import { SimpleGrid, Heading, HStack, Button, VStack } from "@chakra-ui/react"
import { BsFront, BsCodeSlash , BsDatabaseFillGear} from "react-icons/bs"
import { FaPuzzlePiece ,  FaLightbulb} from "react-icons/fa"
import { SkillCard } from "./SkillCard";
import { useState } from "react";
import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { DiCodeigniter } from 'react-icons/di'
const codingSkill = [
    { id: 1, icon: <BsFront />, heading: "Frontend Development", detail: "i bring ideas to life in browser." },
    { id: 2, icon: <FaPuzzlePiece />, heading: "API Development", detail: "Crafting API's,turning ideas in functional solutions." },
    { id: 3, icon: <BsCodeSlash />, heading: "Backend Development", detail: "Building a powerful backend is my motto." },
    { id: 4, icon: <BsDatabaseFillGear />, heading: "DATABASE", detail: "I possess good knowledge of ER based data-base as well as mongo db no sql." },
    { id: 5, icon: <DiCodeigniter/>, heading: "C++", detail: "I possess solid grip in c++ programming." },
]

const codingSkill2 = [
    { id: 1, icon: <BiMessageRounded />, heading: "Communications", detail: "Effective exchange of information." },
    { id: 2, icon: <FaPuzzlePiece />, heading: "Collaboration", detail: "Works nicely and effectivley in team Envirnoment." },
    { id: 3, icon: <AiOutlineUsergroupAdd />, heading: "Creativity", detail: "Generates new innovative ideas." },
    { id: 4, icon: <FaPuzzlePiece />, heading: "Problem Solving", detail: "Analytical thinker." },
    { id: 5, icon: <FaLightbulb />, heading: "Time Management", detail: "Efficiently organizing and prioritizing tasks." },
]




export const Skill = () => {
    const [renderCoding, setRenderCoding] = useState<boolean>(true)
    const [renderSkill, setRenderSkill] = useState<boolean>(false)

    return (
        <>
            <VStack 
            paddingX={4}
            >
                <Heading 
                fontSize={ { base:'4xl' , lg:'6xl'}}
                fontFamily={'ubuntu'}
                textAlign={'center'}>Proficiencies</Heading>
                <HStack>
                    <Button
                    onClick={() =>{ setRenderCoding(true)  , setRenderSkill(false) ; }}
                     colorScheme='messenger' variant='solid'>
                        Coding Skill's
                    </Button>
                    <Button
                    onClick={() =>{ setRenderCoding(false)  , setRenderSkill(true) ; }} 
                     colorScheme='messenger' variant='outline'>
                        Soft Skill's
                    </Button>
                </HStack>
            </VStack>
            <SimpleGrid
                columns={{
                    base: 2,
                    md: 3,
                    lg: 3
                }}
                spacing={5}
                padding={{
                    base: 4,
                    md:8
                }}

            >
                {
                    renderCoding && codingSkill.map(({ id, icon, heading, detail }) => <SkillCard
                        key={detail} id={id} icon={icon} heading={heading} detail={detail} />)
                }
                {
                    renderSkill && codingSkill2.map(({ id, icon, heading, detail }) => <SkillCard
                        key={detail} id={id} icon={icon} heading={heading} detail={detail} />)
                }

            </SimpleGrid>

        </>

    )
}


