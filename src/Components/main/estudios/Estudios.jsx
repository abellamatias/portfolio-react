import { Divider, Flex, Heading, Box } from '@chakra-ui/react'
import React from 'react'
import Estudio from './Estudio'

function Estudios() {

    let estudios = [
        {
            "title":"Tecnicatura Universitaria en Programación - UTN (Marzo 2023 - Actualidad)",
            "content": "Esta carrera tiene una duración de dos años y medio y está orientada a satisfacer las demandas del sector tecnológico, proporcionando a los estudiantes una sólida base teórica y práctica en programación. <br/> El plan de estudios incluye materias fundamentales como Fundamentos de la Programación, Programación Orientada a Objetos, Bases de Datos y Sistemas Operativos. Además, los alumnos aprendemos a utilizar distintos lenguajes de programación como C# o Java y herramientas de desarrollo, lo que nos permite adaptarnos a diversas tecnologías y entornos laborales. <br/> La tecnicatura también pone un fuerte énfasis en el desarrollo de habilidades prácticas a través de proyectos integradores y prácticas profesionales. Estos proyectos simulan escenarios reales de la industria, preparando a los estudiantes para enfrentar los desafíos del mundo laboral. <br/>  Al finalizar la carrera, los graduados de la UTN estaremos capacitados para desempeñarnos en roles como programadores, desarrolladores de software, analistas de sistemas y administradores de bases de datos, entre otros. La formación recibida nos permite trabajar en equipos multidisciplinarios y adaptarnos a las constantes innovaciones del sector tecnológico, contribuyendo al desarrollo de soluciones eficientes y de alta calidad."
        },
        {
            "title":"Diplomatura en Programacion Web Full Stack - UTN (Mayo 2024 - Actualidad)",
            "content": "Es un programa de formación intensivo y especializado, diseñado para capacitar a los estudiantes en el desarrollo completo de aplicaciones web, tanto del lado del cliente (frontend) como del lado del servidor (backend). Este curso proporciona una comprensión integral de las tecnologías y herramientas utilizadas en la creación de aplicaciones web modernas y dinámicas. <br/> En este curso aprendemos habilidades en HTML, CSS, JavaScript, React.js, Node.js, Base de Datos, integración con Node.js, Administración, API Rest y despliegue. Tiene una duración de 40 clases de 3 horas cada una y es de modalidad virtual. <br/> La diplomatura se centra en proyectos prácticos y casos de estudio reales, lo que permite a los estudiantes aplicar los conocimientos adquiridos en situaciones reales del mundo laboral. Además, se fomenta el trabajo en equipo y la colaboración, habilidades esenciales en el desarrollo de software. <br/> Al finalizar la diplomatura, los participantes estamos capacitados para trabajar como desarrolladores web full stack, capaces de diseñar, implementar y mantener aplicaciones web complejas. Además, tendremos la ventaja de haber adquirido una comprensión integral de todo el proceso de desarrollo web, desde la creación de la interfaz de usuario hasta la gestión de la base de datos y la implementación del servidor."
        },
    ]

  return (
    // <!-- Estudios -->
                <Box as='section' w='80%' >
                <Heading as='h2' size='xl' mt='0' mb='65px' pt='205px' fontSize='37px'>Estudios</Heading>
                {estudios.map((estudio, index) => (
                    <React.Fragment key={index}>
                    <Estudio title={estudio.title} content={estudio.content} />
                    {index < estudios.length - 1 && <Divider m='34px 0'/>}
                  </React.Fragment>))}

                </Box>
  )
}

export default Estudios
