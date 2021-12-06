import React from 'react';
import logo from '../logo.svg';

function Header({title}) {
  return (
  <nav className="navigation bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="{logo}" alt="gratidude logo" width="30" height="24"/>
      </a>
      {title}
    </div>
  </nav>
  )
}

export default Header