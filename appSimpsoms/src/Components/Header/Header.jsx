import React from 'react'
import './Header.css'
import titulo from '../../assets/titulo.svg'
const Header = () => {
  return (
    <header>
        <img src={titulo} alt="The Simpsons" />
    </header>
  )
}

export default Header