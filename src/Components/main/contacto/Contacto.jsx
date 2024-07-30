import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import React from 'react'
import LinkRedes from '../LinkRedes'
import Formulario from './Formulario'

function Contacto() {
    let redes = [
        {
            "link":"https://www.linkedin.com/in/abellamatias/",
            "icono": "linkedin.svg",
        },
        {
            "link":"https://github.com/abellamatias",
            "icono": "github.svg",
        },
        {
            "link":"https://www.instagram.com/abellamatias/",
            "icono": "instagram.svg",
        },
    ]
  return (
    // <!-- Contacto -->
            <Flex as='section' id='contacto' pt='205px' justify='space-between'>
                <Flex as='section' flexBasis='40%' flexDir='column' justify='space-around'>
                    <Heading as='h2' fontSize='37px' pt='0' m='0' fontFamily='rubik.general' fontWeight='bold' lineHeight={1.15}>Dí hola.</Heading>
                    <Heading as='h3' fontSize='23px' fontFamily='rubik.general' fontWeight='normal' m='0'>Siempre estoy disponible para discutir tus proyectos y hablar sobre nuevas cosas</Heading>
                    <Flex as='section' justify='space-between' gap='10px'>
                      <Box as='section' lineHeight={1.15}>
                        <Text fontSize='15px' m='17px 0'>Envíame un mail a</Text>
                        <Text fontSize='17px' mb='17px'>matiasabella2000@gmail.com</Text>
                    </Box>
                    <Box as='section'>
                        <Text fontSize='15px' m='15px 0'>Seguime</Text>
                        <Flex as='section' flexWrap='nowrap'>
                            {/* <!-- Lista de redes --> */}
                            {redes.map((red, index) => <LinkRedes referencia={red.link} icono={red.icono} gap='13px' key={index}></LinkRedes>)}
                        </Flex>
                    </Box>  
                    </Flex>
                </Flex>
                <Formulario/>
            </Flex> 
  )
}

export default Contacto
