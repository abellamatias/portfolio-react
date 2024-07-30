import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Button } from 'react-scroll'

function Success() {
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: true })
        return isVisible ? (
          <Alert status='success'>
            <AlertIcon />
            <Box>
              <AlertTitle>¡Muchas gracias!</AlertTitle>
              <AlertDescription>
                El correo se ha enviado exitosamente. Pronto estaré comunicandome con usted.
              </AlertDescription>
            </Box>
            <CloseButton
              alignSelf='flex-end'
              position='relative'
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        ) : (
          <Button onClick={onOpen}>Show Alert</Button>
        )
      }
  


export default Success
