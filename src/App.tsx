import { Grid, GridItem, Box} from "@chakra-ui/react"
import { NavBar } from "./Components/NavBar"
import { HomePanel } from "./Components/HomePanel"
import { Contact } from "./Components/Contact"
import { Skill } from "./Components/Skill"
import { Project } from "./Components/Project"
import { Link } from "./Components/Link"
import { Footer } from "./Components/Footer"

function App() {
  return (
    <>
      <Grid templateAreas={`"nav nav"
      "home home"
      "contact contact"
      "skill skill"
      "project project"
      "link link"
      "footer footer"
      `}>
        <GridItem area={"nav"} width={'100%'} id="NavBar">
          <Box
            gridArea="nav"
            position="fixed"
            zIndex="10"
            width={'100%'}
            bgColor="black"
          >
            <NavBar />
          </Box>
        </GridItem>
        <GridItem area={"home"} id="Home">
          <HomePanel />
        </GridItem>
        <GridItem area={"contact"} id="Contacts" >
          <Contact></Contact>
        </GridItem>
        <GridItem display={'flex'} justifyContent={'center'}  area={"skill"} 
        id="Skill"
        >
          <Box width={{ base:"100%" , md:'80%' , lg:'60%'}}>
          <Skill />
          </Box>
        </GridItem>
        <GridItem  id="Project" area={"project"} display={'flex'} justifyContent={'center'}  >
        <Box width={{ base:"100%" , md:'80%' , lg:'60%'}}>
          <Project/>
          </Box>
        </GridItem>
        <GridItem id="Link" area={"link"}>
           <Link/>
        </GridItem>
        <GridItem area={"footer"} id="Footer" >
        <Footer/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App

