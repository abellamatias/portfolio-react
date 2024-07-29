import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Estudio =({title, content}) => {

  let textoFormateado = content.split('\n').map((line, i) => (
    <Text key={i}>
        {line}
        <br />
    </Text>
))

  return (
            
        <Box as='section' >
            <Heading as='h4' fontSize='23px' m='0 0 16px 0' fontWeight='500' fontFamily='rubik.general'>{title} </Heading>
            <Text m='0' fontSize='14' lineHeight='1.15'> {textoFormateado} </Text>
        </Box>                    
    
  )
}

export default Estudio
