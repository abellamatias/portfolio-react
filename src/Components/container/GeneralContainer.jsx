import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header/Header'

function GeneralContainer() {
  return (
    <Flex as='section' bg='red' w='100%' maxW='1210px' p='50px 106px 0 106px' fontFamily='rubik.general'>
        <Header/>
    </Flex>
  )
}

export default GeneralContainer
