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
    <Flex as='section' id='home' w='100%' flexDir='column' >
                <Flex as='section' w='100%' mt='130px' justify={{base:'center',lg:'space-between'}} align='center'>
                    <Flex as='section' direction='column' justify='center' basis={{base:'100%',lg:'68%'}} textAlign={{base:'center', lg:'left'}}>
                        <Text fontSize='51px' m='0 0 10px 0'>Soy <Text as='span' fontWeight='600'>Matias Ruben Abella</Text></Text>
                        <Text fontSize='30px' lineHeight='1.15'>Estudiante de Tecnicatura Universitaria en Programación y curso de Programación FullStack brindados por la UTN.</Text>
                    </Flex>
                    <Image 
                    display={{base:'none', lg:'flex'}}
                    src="image-web-developer.jpeg" 
                    alt="Imagen del web developer" 
                    w='275px' 
                    h='275px' 
                    borderRadius='3px'  />
                </Flex>
                
                <Flex as='section' justify='space-between' align='center' w='100%' m='222px 0 0 0' >
                    <Flex as='section' wrap='nowrap'>
                        {/* <!-- Lista redes --> */}
                    {redes.map((red, index) => <LinkRedes referencia={red.link} icono={red.icono} gap='30px' key={index}></LinkRedes>)}
                    </Flex>
                    <Text fontSize='15px' m='15px 0'>matiasabella2000@gmail.com</Text>
                </Flex>
            </Flex>
  )
}

export default Hero
