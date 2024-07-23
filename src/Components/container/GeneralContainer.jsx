import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../footer/Footer'

function GeneralContainer() {
  return (
    <Flex as='section' w='100%' minW={[320, 480, 768, 1024, 1422]} p='50px 106px 0 106px' fontFamily='rubik.general'>
        <Header/>
        <Footer/>
    </Flex>
  )
}

export default GeneralContainer
