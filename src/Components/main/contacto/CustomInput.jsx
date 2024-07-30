import { border, Input } from '@chakra-ui/react'
import React from 'react'

const CustomInput = ({typeName, idName, placeholderText, handle, value}) => {
  return (
    <Input 
            type={typeName} 
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
            _focus = {{ borderColor: 'brand.white', boxShadow:'none' }}
            _placeholder={{ color: 'brand.white', opacity: 0.8, fontWeight: 'lighter'}}
            sx={{
              '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0px 1000px brand.black inset',
                WebkitTextFillColor: '#f8f8f8',
                transition: 'background-color 5000s ease-in-out 0s'
              }
            }}
            _invalid={{ borderColor: 'transparent', borderBottom: '1px solid rgba(248, 248, 248, 0.7)',

            }}
            onChange={handle}
            value={value}
            />
  )
}

export default CustomInput
