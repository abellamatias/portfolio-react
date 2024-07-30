import { FormErrorMessage } from '@chakra-ui/react'

const CustomError = ({children}) => {
  return (
    <FormErrorMessage
    position='relative'
    left='10%'
    m='0'
    fontFamily='rubik.general'
    fontSize='12px'
    _invalid={{ borderColor: 'transparent' }}

    >
    {children}
    </FormErrorMessage>
  )
}

export default CustomError
