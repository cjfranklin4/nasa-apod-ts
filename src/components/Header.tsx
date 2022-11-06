import {Flex,Heading,Input, IconButton, Button,Text,Box, useColorMode,Link } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

type HeaderProps = {
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void
    setpicDate: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Header = ({handleSubmit, setpicDate}: HeaderProps) => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
    <Box as='header' display='flex' justifyContent='center' p={5} backgroundColor='blue.500'>
        <Box>
            <Link href='/' color='white'><Heading as='h1' size='lg' color='white'>NASA Astronomy Picture of the Day</Heading></Link>
            <Text fontSize='sm' color='white'>Enter a date below to get the NASA Astronomy Picture of the Day</Text>
            <Flex maxW='500px' mt={2}>
                <Input color='white' type='date' onChange={setpicDate} focusBorderColor='yellow.400' />
                <Button onClick={handleSubmit} colorScheme='red'>Search</Button>
            </Flex> 
        </Box>
        
        <Box>
        <IconButton
            aria-label='toggle color mode'
            onClick={toggleColorMode}
            colorScheme='red'
            variant='solid' 
            size='sm'
            icon={colorMode === 'light' ? <MoonIcon />  : <SunIcon />}
            alignSelf='right'
            mr={5}
            position='absolute'
            right='10px'
            top={5}
          >
          </IconButton>
        </Box>
      </Box>
    )
}
export default Header