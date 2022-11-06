import {Box, Heading, Text, Link} from '@chakra-ui/react'
const Placeholder = () => {
    return (
        <Box m={5}>
            <Heading as='h2' size='md'>What is the NASA Astronomy Picture of the Day?</Heading>
            <Text mt={1} fontStyle='italic' fontWeight='bold'>According to the <Link href='https://apod.nasa.gov/apod/lib/about_apod.html' color='blue.400'>NASA APOD About Page</Link>:</Text>
            <Text>"Astronomy Picture of the Day (APOD) is originated, written, coordinated, and edited since 1995 by Robert Nemiroff and Jerry Bonnell." It contains the largest collection of astronomical images on the internet.</Text>
            <Text mt={1}>Do you have more questions about NASA APOD? Visit the <Link href='https://apod.nasa.gov/apod/ap_faq.html' fontWeight='bold' color='blue.400'>FAQ page</Link> to learn more!</Text>
        </Box>
    )
}

export default Placeholder