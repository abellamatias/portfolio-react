import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../footer/Footer'
import Main from '../main/TempMain'


function GeneralContainer() {
  return (
    <Flex as='section' 
          w='100%'  
          maxW='1422px' 
          p={{ base: '50px 0 0 0', sm:'50px 10px 0 10px', md:'50px 80px 0 80px',lg:'50px 80px 0 80px' ,xl: '50px 106px 0 106px' }}
          fontFamily='rubik.general' 
          flexDirection='column'
          textAlign={{base:'center', md:'left'}}>
        <Header/>
        <Main/>
        <Footer/>
    </Flex>
  )
}

export default GeneralContainer
