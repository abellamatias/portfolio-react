import React from 'react'
import { Flex,Text, Image} from '@chakra-ui/react'

const Habilidad=({image, name})=> {
  return (
      <Flex as='section' align='center'><Image src={image} w='50px' h='50px' borderRadius='10px'/><Text fontSize='22px'>{name}</Text></Flex>
  )
}

export default Habilidad
