import { Box, Flex, Link, Image } from '@chakra-ui/react'
import React from 'react'
import CustomLink from './CustomLink'

const Header = () => {
  return (
    
    <Flex as='section' w='100%' maxW='1230px' justify='space-between' pos='fixed' m='0 -10px 0 -10px' p='10px' top='0' left='50%' transform='translateX(-50%)' backdropBlur='5px'>
        
        <Flex as='nav' w='100%' justify='space-between' align='center'>

            <Box as='a' href="#">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </Box>
            <Flex as='section' fontSize={16} gap='15px'>
                            <CustomLink href="#" >Home</CustomLink>
                            <CustomLink href="#servicios" >Servicios</CustomLink>
                            <CustomLink href="#habilidades" >Habilidades</CustomLink>
                            <CustomLink href="#estudios" >Estudios</CustomLink>
                            <CustomLink href="#contacto" >Contacto</CustomLink>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Header
