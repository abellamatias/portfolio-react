import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Flex as='footer' justify='center' align='center' w='100%' h='200px' p='0'>
        <Text fontSize='17px' fontWeight='350'>Copyright © 2024. All rights reserved</Text>
    </Flex>
  )
}

export default Footer
