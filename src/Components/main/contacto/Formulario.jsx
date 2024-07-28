import { Flex, FormControl} from '@chakra-ui/react'
import React from 'react'
import CustomInput from './CustomInput'
import CustomTextarea from './CustomTextarea'
import CustomButton from './CustomButton'

function Formulario() {
  return (
    <Flex as='section' bg='brand.black' flexBasis='50%' flexDir='column' justify='center' align='center' >
                    <FormControl w='100%' minH='338px' display='flex' flexDir='column' justify='center' align='center'>
                        <CustomInput typeName="text" idName="nombre" placeholderText="Tu nombre"/>
                        <CustomInput typeName="email" idName="email" placeholderText="Tu dirección de email" />
                        <CustomInput typeName="text" idName="presupuesto" placeholderText="Tu presupuesto (opcional)"/>
                        <CustomTextarea id="comentarios" placeholderText="Descripción de tu proyecto" rowsCant="4" />
                        <CustomButton/>
                    </FormControl> 
                </Flex>
  )
}

export default Formulario
