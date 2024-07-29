import { Link, Image } from '@chakra-ui/react'
import React from 'react'

const LinkRedes = ({referencia, icono, gap}) => {
  return (
    <Link 
    target='_blank'
    to={referencia}
    ><Image mr={gap} src={icono} alt="" w='18px' h='18px'/>
    </Link>
  )
}

export default LinkRedes
