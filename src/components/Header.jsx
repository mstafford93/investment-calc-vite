import React from 'react'
import './CssHeader.css'
import Logo from '../assets/logo.png'

const Header = ({user}) => {
  return (
    <nav>
        <img src={Logo} alt='Investment Calculator' />
        <h1>{user}'s React Investment Calculator</h1>
    </nav>
  )
}

export default Header
