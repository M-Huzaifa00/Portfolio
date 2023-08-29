import { Box, SimpleGrid, Heading } from '@chakra-ui/react'
import { RightSideContact } from './RightSideContact'
import { LeftSideContact } from './LeftSideContact'
import { CvButton } from './CvButton'
import { useInViewPort } from './Hook/useInViewPort'
import { useShifterStore } from '../Zustand/useShifterStore'

export const Contact = () => {
  const { InViewPort } = useInViewPort("Contact");
  const setContact = useShifterStore( s=> s.setContact )
  setContact(InViewPort)
  return (
    <Box id='Contact' >
      <Heading
        paddingTop={{ base: 16, md: 12 }}
        fontFamily={'ubuntu'} textAlign={'center'} as={'h1'}
        fontSize={{ base: '3xl', md: '5xl' }}
      >Behind The Portfolio</Heading>

      <SimpleGrid columns={2}
        paddingTop={{
          base: 4,
          lg: 5
        }}
      >
        <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'} >
          <LeftSideContact />
        </Box>
        <Box>
          <RightSideContact />
        </Box>
      </SimpleGrid>

      <Box display={'flex'} justifyContent={'center'} width={'100%'}>
        <CvButton />
      </Box>

    </Box>

  )
}
