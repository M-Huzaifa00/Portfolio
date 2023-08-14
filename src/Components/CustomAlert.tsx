import { Box , Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react"

interface Props{
    onClose : (status:boolean) => void;
    title:string;
    desc:string;
}

export const CustomAlert = ( {onClose , title , desc} : Props ) => {
    return (
        <>
        <Alert>
            <AlertIcon />
            <Box>
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>
                {desc}
                </AlertDescription>
            </Box>
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={() => onClose(false)}
            />
        </Alert >
        </>

  )
}
