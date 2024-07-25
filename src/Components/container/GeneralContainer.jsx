import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../footer/Footer'
import Main from '../main/TempMain'


function GeneralContainer() {
  return (
    <Flex as='section' w='100%' minW={[320, 480, 768, 1024, 1422]} maxW='1422px' p='50px 106px 0 106px' fontFamily='rubik.general' flexDirection='column'>
        <Header/>
        <Main/>
        <Footer/>
    </Flex>
  )
}

export default GeneralContainer
