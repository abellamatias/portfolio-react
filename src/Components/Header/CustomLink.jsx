import { Link } from 'react-scroll';
import React from 'react'
import './CustomLink.css';

const CustomLink = ({to, children}) => (
    <Link
      className='customLink'
      smooth={true}
      duration={500}
      to={to}
    >
      {children}
    </Link>
  );

export default CustomLink
