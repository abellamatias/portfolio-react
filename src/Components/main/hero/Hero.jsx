import { Flex, Image, Text, Link } from '@chakra-ui/react'
import React from 'react'
import LinkRedes from '../LinkRedes'

function Hero() {

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
    <Flex as='section' w='100%' flexDir='column'>
                <Flex as='section' w='100%' mt='130px' justify='space-between' align='center'>
                    <Flex as='section' direction='column' justify='center' basis='68%'>
                        <Text fontSize='51px' m='0 0 20px 0'>Soy <Text as='span' fontWeight='600'>Matias Ruben Abella</Text></Text>
                        <Text fontSize='30px'>Estudiante de Tecnicatura Universitaria en Programación y curso de Programación FullStack brindados por la UTN.</Text>
                    </Flex>
                    <Image src="image-web-developer.jpeg" alt="Imagen del web developer" w='275px' h='275px' borderRadius='3px'  />
                </Flex>
                
                <Flex as='section' justify='space-between' align='center' w='100%' m='222px 0 0 0' >
                    <Flex as='section' wrap='nowrap'>
                        {/* <!-- Lista redes --> */}
                    {redes.map((red, index) => <LinkRedes referencia={red.link} icono={red.icono} key={index}></LinkRedes>)}
                    </Flex>
                    <Text fontSize='15px'>matiasabella2000@gmail.com</Text>
                </Flex>
            </Flex>
  )
}

export default Hero
