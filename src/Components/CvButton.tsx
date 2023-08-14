import { HStack , Button} from '@chakra-ui/react'
import { LiaDownloadSolid } from "react-icons/lia"
import pdf from '../assets/Huzaifa Cv.pdf'

export const CvButton = () => {
        const handleDownload = () => {
            const pdfUrl = pdf; 
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'your_pdf_filename.pdf';
            link.click();
        };
    return (
        <HStack  width={'100%'} marginTop={2} 
        display={'flex'} justifyContent={'center'} 
        padding={4}
        >
            <Button 
                width={{ base: '80%', md:'20%' }} height={{ base: '30px' }}
                fontSize={{ base: '10px', md:'18px' }}
                rightIcon={<LiaDownloadSolid />}
                colorScheme='messenger' variant='solid'
                onClick={handleDownload}
                >
                grab my cv
            </Button>
        </HStack>
    )
}
