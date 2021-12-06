import React from 'react'

function Header({title}) {
  return (
  <nav className="navigation">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="#" alt="" width="30" height="24"/>
      </a>
      {title}
    </div>
  </nav>
  )
}

export default Header