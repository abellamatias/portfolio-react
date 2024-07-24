import { Flex, Image, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import CustomCard from './CustomCard'

function Servicios() {

    let services=[
        {
            "image": "website.png",
            "title":"Website",
            "content":"Estoy en el proceso de crear aplicaciones web intuitivas y funcionales, enfocadas en resolver problemas complejos y mejorar la experiencia del usuario. Me interesa desarrollar proyectos que abarquen desde plataformas de comercio electrónico hasta sistemas de gestión de contenido. Planeo utilizar tecnologías modernas y metodologías ágiles para garantizar un rendimiento óptimo y escalabilidad. Mis aplicaciones se destacan por su diseño responsivo, seguridad robusta y facilidad de uso, proporcionando soluciones eficientes para necesidades específicas de los clientes.",
        },
        {
            "image": "desktop-app.png",
            "title": "Desktop Application",
            "content":"Mis desktop applications estarán diseñadas para brindar una experiencia de usuario intuitiva y eficiente. Con interfaces amigables y funciones avanzadas, que permitan a los usuarios realizar tareas complejas con facilidad. Estas aplicaciones integrarán características de personalización, seguridad robusta y soporte multi-plataforma, garantizando un rendimiento óptimo. Estarán orientadas tanto a usuarios individuales como a empresas, facilitando la gestión de datos, la comunicación y la productividad. Serán innovadoras y confiables, transforman la manera en que interactúas con tu computadora, mejorando tu día a día.",
        },

    ]

  return (
    // <!-- Servicios -->
            <Box as='section'>
                <Heading as='h2' size='xl' pt='170px'>¿Qué hago?</Heading>
                <Flex as='section' gap='5%'>
                    {/* <!-- Cards --> */}
                    {services.map((service, index) =>(
                        <CustomCard key={index} image={service.image} title={service.title} content={service.content} />
                    ))}
                </Flex>
            </Box>
  )
}

export default Servicios
