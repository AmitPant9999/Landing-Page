import React from 'react';
import Logo from './Logo';
import Navitems from './NavItems';
import Signin from './Signin';

interface NavbarProps {} // Define props if needed

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex py-4  justify-between items-center relative z-50">
      <Logo />
      <Navitems />
      <Signin />
    </nav>
  );
};

export default Navbar;