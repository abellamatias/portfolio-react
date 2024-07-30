import { Box, Heading, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Habilidad from './Habilidad'

function Habilidades() {

    let habilidades = [
        {
            "image": "html-5.png",
            "name": "HTML 5",
        },
        {
            "image": "css-3.png",
            "name": "CSS 3",
        },
        {
            "image": "js.png",
            "name": "Javascript",
        },
        {
            "image": "c-sharp-logo.png",
            "name": "C# .NET",
        },
        {
            "image": "java-logo.png",
            "name": "JAVA",
        },

    ]


  return (
                <Box as='section' id='habilidades' w={{base:'100%', lg:'85%'}}>
                    <Heading as='h2' size='xl' mt='0' mb='75px' pt='220px' fontSize='37px' fontFamily='rubik.general'>Habilidades</Heading>

                    <Grid templateColumns='repeat(3, 1fr)' gap='13%' rowGap='50px'>

                        {habilidades.map((habilidad, index) => <GridItem key={index}><Habilidad image={habilidad.image} name={habilidad.name} index={index}/></GridItem>)}
                    
                    </Grid>
                </Box>
  )
}

export default Habilidades