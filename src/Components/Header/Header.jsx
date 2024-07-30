import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import CustomLink from './CustomLink'

const Header = () => {
  return (
    
    <Flex as='section' pos='fixed' p='10px' top='0' w='100%' maxW='1230px' justify='space-between' left='50%' transform='translateX(-50%)' backdropFilter='blur(5px)' bg='rgba(248, 248, 248, 0.8)'>
        
        <Flex as='nav' w='100%' justify='space-between' align='center'>

            <Box as='a' href="#">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </Box>
            <Flex as='section' fontSize={16} gap='15px'>
                            <CustomLink to="home" >Home</CustomLink>
                            <CustomLink to="servicios">Servicios</CustomLink>
                            <CustomLink to="habilidades"  >Habilidades</CustomLink>
                            <CustomLink to="estudios"  >Estudios</CustomLink>
                            <CustomLink to="contacto"  >Contacto</CustomLink>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Header
