import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Estudio =({title, content}) => {
  return (
            
        <Box as='section' >
            <Heading as='h4' fontSize='23px' m='0 0 16px 0'>{title} </Heading>
            <Text m='0' fontSize='14'> {content} </Text>
        </Box>                    
    
  )
}

export default Estudio
