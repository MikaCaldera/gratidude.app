import React from 'react'

function Header({title}) {
  return (
    <div>
      <h1 className="text-primary">
      {title}
      </h1>
    </div>
  )
}

export default Header
