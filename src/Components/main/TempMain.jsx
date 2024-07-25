import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from './hero/Hero'
import Servicios from './servicios/Servicios'
import Habilidades from './habilidades/Habilidades'
import Estudios from './estudios/Estudios'

function TempMain() {
  return (
    <Box as='main' w='100%'>
        <Hero/>
        <Servicios/>
        <Habilidades/>
        <Estudios/>
    </Box>
  )
}

export default TempMain
