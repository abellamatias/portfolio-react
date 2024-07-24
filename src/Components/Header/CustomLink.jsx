import { Link } from '@chakra-ui/react'
import React from 'react'

const CustomLink = (props) => (
    <Link
      padding='6px'
      textShadow='0 0 5px #f8f8f8'
      textDecor='none'
      transition='0.2s'
      display='inline-block'
      _hover={{ transform: 'scale(1.1)' }}
      {...props}
    />
  );

export default CustomLink
