import {Stack,Box, Heading, Text, Link, Icon} from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'
import {BiPlanet} from 'react-icons/bi'
const Footer = () => {
    return (
        <Stack spacing={3} m={5} pt={5} borderTop='1px solid black' direction='row' display='flex' justifyContent='center'>
                <Box as='a' href='https://apod.nasa.gov/apod/astropix.html' target="_blank">
                    <Icon 
                    as={BiPlanet} 
                    color='blue.400'
                    w={6} 
                    h={6} 
                    _hover={{
                    color: "red",
                    }}/>
                </Box>
                <Box as='a' href='https://github.com/cjfranklin4/book-search' target="_blank">
                    <Icon 
                    as={BsGithub} 
                    color='blue.400' 
                    w={6} 
                    h={6}  
                    _hover={{
                    color: "red",
                    }}/>
                </Box>
        </Stack>
        
    )
}

export default Footer