import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className="width">
      <h1>
         <Link to = '/'>
            Crypker
         </Link>
      </h1>
      </div>
    </header>
  )
}

export default Header
