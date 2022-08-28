import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import MEE from '../../assets/DressedUp.png'
import MEEE from '../../assets/Test.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Elliot Barry</h1>
       <h5 className='text-light'>Fullstack Developer</h5>
       <CTA/>
       <HeaderSocials />
       <div className="me">
         <img src={MEEE} alt="me" />
       </div>
       <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>
    </header>
  )
}

export default Header