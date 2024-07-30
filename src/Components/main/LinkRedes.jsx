import { Link, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const LinkRedes = ({referencia, icono, gap}) => {
  const MotionImage = motion.img;
  return (
    
    <Link 
    target='_blank'
    href={referencia}
    mr={gap}
    w='18px' 
    h='18px' 
    >
      <MotionImage 
        src={icono}
        alt="" 
        width='18px' 
        height='18px' 
        whileHover={{ scale: 1.1 }}
      />
    </Link>
  )
}

export default LinkRedes
