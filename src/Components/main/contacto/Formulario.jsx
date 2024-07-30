import { Flex, FormControl, FormErrorMessage} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput'
import CustomTextarea from './CustomTextarea'
import CustomButton from './CustomButton'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import CustomError from './CustomError'
import emailjs from '@emailjs/browser';
import Success from './Success'

const initialValues={
    nombre:'',
    email:'',
    presupuesto:'',
    descripcion:'',
}

const validationSchema = Yup.object({
  nombre: Yup.string().max(50, 'No puede superar los 50 caracteres').required('Campo obligatorio'),
  email: Yup.string().email('Correo no válido').required('Campo obligatorio'),
  descripcion: Yup.string().required('Campo obligatorio')
})

function Formulario() {

  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
      sendEmail()
    },
})


const sendEmail = () => {

  emailjs
    .sendForm('service_64fgc5m', 'template_zn2xtkf', form.current, {
      publicKey: '39wjRQBmnyxgOZUqZ',
    })
    .then(
      () => {        
        console.log('SUCCESS!');
        setIsSuccess(true);
        formik.resetForm();
        //setIsSuccess(false);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  return (
    <Flex as='section' bg='brand.black' flexBasis='50%' flexDir='column' justify='center' align='center' minH='338px'>
                    <FormControl as='section' w='100%' display='flex' flexDir='column' justify='center' align='center'>
                      <form ref={form} onSubmit={formik.handleSubmit}>

                      <FormControl as='nav' isInvalid={!!formik.errors.nombre}
                      _invalid={{ borderColor:'transparent' }}
                      >
                        <CustomInput 
                        typeName="text" 
                        idName="nombre" 
                        placeholderText="Tu nombre"
                        handle={formik.handleChange}
                        value={formik.values.nombre}
                        />
                        <CustomError>{formik.errors?.nombre}</CustomError>
                        </FormControl>

                        <FormControl isInvalid={!!formik.errors.email} _invalid={{ borderColor: 'transparent' }}>
                        <CustomInput 
                        typeName="email" 
                        idName="email"
                        placeholderText="Tu dirección de email" 
                        handle={formik.handleChange}
                        value={formik.values.email}
                        />
                        <CustomError>{formik.errors?.email}</CustomError>
                        </FormControl>

                        <CustomInput 
                        typeName="text" 
                        idName="presupuesto" 
                        placeholderText="Tu presupuesto (opcional)"
                        handle={formik.handleChange}
                        value={formik.values.presupuesto}
                        />

                        <FormControl isInvalid={!!formik.errors.descripcion}
                        _invalid={{ borderColor: 'transparent' }}>
                        <CustomTextarea 
                        idName="descripcion" 
                        placeholderText="Descripción de tu proyecto" 
                        rowsCant="4" 
                        handle={formik.handleChange}
                        value={formik.values.descripcion}
                        />
                        <CustomError>{formik.errors?.descripcion}</CustomError>
                        </FormControl>
                        
                        <CustomButton/>
                        {isSuccess&&<Success/>}
                        </form>
                    </FormControl> 
                </Flex>
  )
}

export default Formulario
