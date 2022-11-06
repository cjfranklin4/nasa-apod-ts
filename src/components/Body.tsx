import {Heading,Text, Image,Box, Center, Divider, AspectRatio, Link} from '@chakra-ui/react'
import { APIData } from "../App"

type BodyProps = {
    imageData: APIData
}
//video test date is 2012-11-14
const Body = ({imageData}: BodyProps) => {
    return (
            <Box mr={5} ml={5} mt={5} display='flex' flexDirection='column' justifyContent='center' flexGrow='1' maxW='80%' alignSelf='center'>
                <Heading as='h2' mb={2} size='lg' alignSelf='center'>{imageData.title}</Heading>

                {imageData.media_type==='image'? <Link maxW='800px' alignSelf='center' href={imageData.hdurl ? imageData.hdurl : imageData.url}><Image src={imageData.hdurl ? imageData.hdurl : imageData.url} alt={imageData.title} mb={2} /></Link> : null}

                {imageData.copyright ? <Text fontWeight='bold' >{imageData.copyright}</Text> : null}
            
                {imageData.media_type==='video'? 
                    <AspectRatio maxW='900px' w='100%' ratio={4/3} alignSelf='center'>
                        <iframe
                            title={imageData.title}
                            src={imageData.url}
                            allowFullScreen
                        />
                    </AspectRatio>
                : null}
    
                <Text mt={2}>{imageData.explanation}</Text>
                <Center height='50px' mt={5}>
                    <Divider orientation='vertical' borderColor='blue.500' borderLeftWidth='3px' />
                </Center>
            </Box>
    )
}
export default Body