import { Box, Flex, Link, Image } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    
    <Flex as='section' w='100%' maxW='1210px' justify='space-between' pos='fixed' m='0 -10px 0 -10px' p='10px' top='0'>
        
        <Flex as='section' w='100%' justify='space-between' align='center'>

            <Box as='a' href="#">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </Box>
            <Box as='section' fontSize={13}>
                            <Link href="#" margin={3}>Home</Link>
                            <Link href="#servicios" margin={3}>Servicios</Link>
                            <Link href="#habilidades" margin={3}>Habilidades</Link>
                            <Link href="#estudios" margin={3}>Estudios</Link>
                            <Link href="#contacto" margin={3}>Contacto</Link>
            </Box>
        </Flex>
    </Flex>
  )
}

export default Header
