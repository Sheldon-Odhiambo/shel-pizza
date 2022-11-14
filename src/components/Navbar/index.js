import React from 'react';
 import { Bars, Nav, NavIcon } from './Navbarelement';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
return (
    <>
      <Nav>
       
        <NavIcon onClick={toggle}>
          <Link to='/MenuPage'><p>Menu</p></Link>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;