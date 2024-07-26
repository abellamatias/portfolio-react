import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import React from 'react'
import LinkRedes from '../LinkRedes'

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
            <Flex as='section' pt='205px' justify='space-between'>
                <Flex as='section' flexBasis='40%' flexDir='column' justify='space-around'>
                    <Heading as='h2' size='xl' pt='0' m='0'>Dí hola.</Heading>
                    <Heading as='h3' size='md' m='0'>Siempre estoy disponible para discutir tus proyectos y hablar sobre nuevas cosas</Heading>
                    <Flex as='section' justify='space-between' gap='10px'>
                      <Box as='section'>
                        <Text class="opcion" fontSize='15px'>Envíame un mail a</Text>
                        <Text class="email" fontSize='17px'>matiasabella2000@gmail.com</Text>
                    </Box>
                    <Box as='section'>
                        <Text class="opcion">Seguime</Text>
                        <Flex as='section' flexWrap='nowrap'>
                            {/* <!-- Lista de redes --> */}
                            {redes.map((red, index) => <LinkRedes referencia={red.link} icono={red.icono} gap='13px' key={index}></LinkRedes>)}
                        </Flex>
                    </Box>  
                    </Flex>
                </Flex>
                <Flex as='section' class="formulario">
                    {/* <form action="">
                        <input class="input" type="text" name="nombre" id="nombre" placeholder="Tu nombre">
                        <input class="input" type="email" placeholder="Tu dirección de email" name="email" id="email" autocomplete="off">
                        <input class="input" type="text" placeholder="Tu presupuesto (opcional)" name="presupuesto" id="presupuesto">
                        <textarea class="input" placeholder="Descripción de tu proyecto" rows="4" name="comentarios" id="comentarios"></textarea>
                        <section class="contenedor-boton"><button type="submit" value="Enviar">ENVIAR</button></section>
                    </form> */}
                </Flex>
            </Flex> 
  )
}

export default Contacto
