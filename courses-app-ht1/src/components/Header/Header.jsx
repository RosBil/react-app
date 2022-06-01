import React from 'react';

import { Logo } from '../Header/components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';

const Header = () => (
  <header className='header'>
    <nav>
      <Logo />
      <ul className='nav'>
        <li>Dave</li>
        <li>{Button({ text: 'Logout' })}</li>
      </ul>
    </nav>
  </header>
);

export default Header;
