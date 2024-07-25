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
                <Box as='section' w='80%'>
                    <Heading as='h2' size='xl' mt='0' mb='65px' pt='205px' fontSize='37px'>Habilidades</Heading>

                    <Grid templateColumns='repeat(3, 1fr)' gap='13%'>

                        {habilidades.map((habilidad, index) => <GridItem key={index} w='100%'><Habilidad image={habilidad.image} name={habilidad.name}/></GridItem>)}
                    
                    </Grid>
                </Box>
  )
}

export default Habilidades
{/* <Flex as='section' class="front">
                        <Flex as='section' class="habilidad"><i class="fa-brands fa-html5"></i><Text>HTML 5</Text></Flex>
                        <Flex as='section' class="habilidad"><i class="fa-brands fa-css3-alt"></i><Text>CSS 3</Text></Flex>
                        <Flex as='section' class="habilidad"><i class="fa-brands fa-js"></i><Text>Javascript</Text></Flex>
                    </Flex>
                    <Divider/> 
                    <Flex as='section' class="back">
                        <Flex as='section' class="habilidad"><Image src="img/c-sharp-logo.png" alt=""/><Text>C# .NET</Text></Flex>
                        <Flex as='section' class="habilidad"><Image src="img/java-logo.png" alt=""/><Text>Java</Text></Flex>
                    </Flex> */}