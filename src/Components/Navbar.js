import React from 'react'
import logo from './images/logo.png'

function Navbar() {
  return (
    <div>
  
  <nav className='nav'>
<img src={logo} className='logo'/>
 <h3>ReactFacts</h3>
 <h4>React Course - Project 1</h4>
  </nav>

    </div>
  )
}

export default Navbar