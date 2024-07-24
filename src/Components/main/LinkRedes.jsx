import { Link, Image } from '@chakra-ui/react'
import React from 'react'

const LinkRedes = ({referencia, icono}) => {
  return (
    <Link 
    target='_blank'
    href={referencia}
    >
      <Image mr='30px' src={icono} alt=""/>
    </Link>
  )
}

export default LinkRedes
