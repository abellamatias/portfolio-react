import React from 'react'
import { Flex,Text, Image} from '@chakra-ui/react'

const Habilidad=({image, name, index})=> {
  let pos
  index%3==0?pos='left':index%3==1?pos='center':pos='right'
  return (
      <Flex as='section' align='center' justify={{base: 'center' ,md:pos}}
      
      ><Image src={image} w='50px' h='50px' borderRadius='10px' /><Text fontSize='22px' ml='10px'>{name}</Text></Flex>
  )
}

export default Habilidad
