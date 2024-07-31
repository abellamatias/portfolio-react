import React from 'react'
import { Box, Image, Text, Heading } from '@chakra-ui/react'

const CustomCard = ({image, title, content}) => {
  return (
    <Box as='section' flexBasis='30%' display={{base:'flex',md:'block'}} flexDir='column' alignItems='center'>
                        <Image src={image} alt="" w='50px' h='50px' />
                        <Heading as='h4' m='30.59px 0' fontSize='23px' fontWeight='500' fontFamily='rubik.general'>{title}</Heading>
                        <Text fontSize='14px' lineHeight='1.15'>{content}</Text>
                        
                    </Box>
  )
}

export default CustomCard
