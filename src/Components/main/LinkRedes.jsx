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
    ml={gap}
    w={{base:'25px', lg:'18px'}} 
    h={{base:'25px',lg:'18px'}} 
    >
      <MotionImage 
        src={icono}
        alt="" 
        w={{base:'25px', lg:'18px'}} 
        h={{base:'25px',lg:'18px'}} 
        whileHover={{ scale: 1.1 }}
      />
    </Link>
  )
}

export default LinkRedes
