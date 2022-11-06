import {Heading,Text, Image,Box, Center, Divider, AspectRatio} from '@chakra-ui/react'
import { APIData } from "../App"

type BodyProps = {
    imageData: APIData
}
//video test date is 2012-11-14
const Body = ({imageData}: BodyProps) => {
    return (
        <Box>
            <Box mr={5} ml={5} mt={5} display='flex' flexDirection='column' alignContent='center'>
                <Heading as='h2' mb={2}>{imageData.title}</Heading>

                {imageData.media_type==='image'? <Image src={imageData.hdurl ? imageData.hdurl : imageData.url} alt={imageData.title} mb={2} /> : null}

                {imageData.copyright ? <Text fontWeight='bold' >{imageData.copyright}</Text> : null}
            
                {imageData.media_type==='video'? 
                
                <AspectRatio maxW='1000px' ratio={4/3}>
                <iframe
                    title={imageData.title}
                    src={imageData.url}
                    allowFullScreen
                />
                </AspectRatio>
                : null}
    
                <Text mt={2}>{imageData.explanation}</Text>
            </Box>
            <Center height='50px' mt={5}>
                <Divider orientation='vertical' />
            </Center>
        </Box> 
    )
}
export default Body