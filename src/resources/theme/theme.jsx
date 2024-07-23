import { extendTheme, flexbox } from "@chakra-ui/react"
import '@fontsource-variable/rubik';


const theme = extendTheme({
  colors: {
    brand: {
      white: "#f8f8f8",
      black: "#212121",
    },
  },
  fonts:{
    rubik:{
      general: 'Rubik Variable', 
    }
  },
  styles: {
    global:{
      body: {
        bg: "f8f8f8",
        display: 'flex',
        justifyContent: 'center',
        w:'100%'
      }
    }
  }
})

export default theme