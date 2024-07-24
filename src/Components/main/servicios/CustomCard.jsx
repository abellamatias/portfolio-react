import React from 'react'
import { Box, Image, Text, Heading } from '@chakra-ui/react'

const CustomCard = ({image, title, content}) => {
  return (
    <Box as='section' flexBasis='30%'>
                        <Image src={image} alt="" w='50px' h='50px' />
                        <Heading as='h4' size='md'>{title}</Heading>
                        <Text>{content}</Text>
                        
                    </Box>
  )
}

export default CustomCard
