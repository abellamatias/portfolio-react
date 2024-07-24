import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './resources/theme/theme'
import GeneralContainer from './Components/container/GeneralContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <GeneralContainer/>
    </ChakraProvider>
  </React.StrictMode>,
)
