import { Spinner } from "@chakra-ui/react"

export default function LoadComponent(){
    return (
        <>
            <Spinner
                mt="20px"
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </>
    )
}