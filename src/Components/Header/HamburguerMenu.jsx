import { Menu, MenuButton, MenuList, MenuItem, IconButton, Box } from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons';
import { animateScroll as scroll } from 'react-scroll';

import React from 'react'

function HamburguerMenu() {
    
    const handleClick = (to) => {
        scroll.scrollTo(document.getElementById(to).offsetTop);
      };

  return (
    <Box display={{base:'flex', md:'none'}}>
        <Menu>
    <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
    />
    <MenuList w='75vw' h='75vh' display='flex' flexDir='column'>
        
            <MenuItem flexBasis='20%' onClick={() => handleClick('home')}>
            Home
            </MenuItem>

        <MenuItem flexBasis='20%' onClick={() => handleClick('servicios')}>
        Servicios
        </MenuItem>
        <MenuItem flexBasis='20%' onClick={() => handleClick('habilidades')}>
        Habilidades
        </MenuItem>
        <MenuItem flexBasis='20%' onClick={() => handleClick('estudios')}>
        Estudios
        </MenuItem>
        <MenuItem flexBasis='20%' onClick={() => handleClick('contacto')}>
        Contacto
        </MenuItem>
    </MenuList>
    </Menu>
    </Box>
  )
}

export default HamburguerMenu
