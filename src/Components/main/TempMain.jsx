import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Hero from './hero/Hero'
import Servicios from './servicios/Servicios'

function TempMain() {
  return (
    <Box as='main' w='100%'>
        <Hero/>
        <Servicios/>
    </Box>
  )
}

export default TempMain
