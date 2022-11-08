import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bars, Nav, NavIcon } from './Navbarelement';

const Navbar = ({ toggle }) => {
return (
    <>
      <Nav>
        <NavLink to='/'></NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;