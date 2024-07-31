import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import CustomLink from './CustomLink'
import HamburguerMenu from './HamburguerMenu'

const Header = () => {
  return (
    
    <Flex as='section' pos='fixed'  top='0' w='100%' maxW='1422px' p={{ base: '50px 20px 0 20px', sm:'50px 10px 0 10px', md:'50px 80px 0 80px',lg:'50px 80px 0 80px' ,xl: '50px 106px 0 106px' }}  justify='space-between' left='50%' transform='translateX(-50%)' backdropFilter='blur(5px)' bg='rgba(248, 248, 248, 0.8)' zIndex={100}>
        
        <Flex as='nav' w='100%' justify='space-between' align='center'>

            <Box as='a' href="#">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </Box>
            <Flex as='section' fontSize={16} gap='15px' display={{base:'none', md:'flex'}}>
                            <CustomLink to="home" >Home</CustomLink>
                            <CustomLink to="servicios">Servicios</CustomLink>
                            <CustomLink to="habilidades"  >Habilidades</CustomLink>
                            <CustomLink to="estudios"  >Estudios</CustomLink>
                            <CustomLink to="contacto"  >Contacto</CustomLink>
            </Flex>
            <HamburguerMenu/>
        </Flex>
    </Flex>
  )
}

export default Header
