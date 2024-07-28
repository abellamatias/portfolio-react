import { border, Input } from '@chakra-ui/react'
import React from 'react'

const CustomInput = ({typeName, idName, placeholderText}) => {
  return (
    <Input 
            type={typeName} 
            name={idName} 
            id={idName} 
            placeholder={placeholderText}
            w='75%'
            p=' 26pa 5% 3px 0'
            borderBottom= '1px solid rgba(248, 248, 248, 0.7)'
            bg='brand.black'
            color='brand.white'
            fontSize='12px'
            outline='none'
            autoComplete="off"
            _focus = {{ borderColor: 'brand.white' }}
            
            />
  )
}

export default CustomInput
