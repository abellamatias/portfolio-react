import { Textarea } from '@chakra-ui/react'
import React from 'react'

const CustomTextarea = ({idName, placeholderText, rowsCant}) => {
  return (
    

    <Textarea
            rows={rowsCant}
            name={idName} 
            id={idName} 
            placeholder={placeholderText}
            w='80%'
            m='0 auto'
            p=' 26px 5% 3px 0'
            border='none'
            borderBottom= '1px solid rgba(248, 248, 248, 0.7)'
            borderRadius='0'
            bg='brand.black'
            color='brand.white'
            fontSize='12px'
            outline='none'
            autoComplete="off"
            resize='none'
            _focus = {{ borderColor: 'brand.white', boxShadow:'none' }}
            _placeholder={{ color: 'brand.white', opacity: 0.8, fontWeight: 'lighter', padding:'0' }}
            
            
            />


  )
}

export default CustomTextarea
