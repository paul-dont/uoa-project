import React, { useState } from 'react';
import './nav.css';
import Data from '../../assets/sections.json';
import Logo from '../../assets/logo.png';
import Button from '../buttons/Buttons';
import { GrMenu } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';

const Nav = () => {
  let [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <a href="#nav" className="nav__logo">
        <img src={Logo} alt="logo" />
      </a>

      <div onClick={() => setOpen(!open)} className="menu__icon ">
        {open ? <GrClose /> : <GrMenu />}
      </div>
      <ul className={`nav__items ${open ? 'top__close' : 'top__open'}`}>
        {Data.map(link => (
          <li key={link.name}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
        <Button>Show Map</Button>
      </ul>
    </nav>
  );
};

export default Nav;
