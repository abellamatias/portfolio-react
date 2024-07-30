import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

function CustomButton() {
  return (
    <Flex 
    w='80%'
    justify='right'
    m='0 auto'
    ><Button
    border='none'
    height='auto'
    mt='14px'
    lineHeight={1.15}
    borderRadius='1px'
    bg='brand.white'
    p='8px 17px'
    fontSize='10px'
    fontWeight='lighter'
    transition='0.2s'
    _hover={{boxShadow:'0 0 10px rgba(248, 248, 248, 0.7)',
        cursor:'pointer'}}
    type="submit" 
    value="Enviar">ENVIAR</Button>
    </Flex>


  )
}

export default CustomButton
