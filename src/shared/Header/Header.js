import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className='first-row'>Free Shopping word wide Free Shopping word wide Free Shopping word wide</div>
      <div className='second-row'>
        <div className='left'>
          <p className='header-text'>About</p>
          <p className='header-text'>Catelog</p>
          <p className='header-text'>Contact us</p>
        </div>
        <div className='center'>
          Five o'clock Tea
        </div>
        <div className='right'>
          <p className='header-text'>Account</p>
          <p className='header-text'>Search</p>
          <p className='header-text'>Cart</p>
        </div>
      </div>
    </header>
  );
}

export default Header;