import React, { useState } from 'react'
import Logo from "../../Components/assets/logo.png"
import Cart from "../../Components/assets/cart_icon.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  const [menu, setMenu] = useState('shop')
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt="" />
        <h4>Shopper</h4>
      </div>

      <ul className="nav-items">
        <li onClick={() => { setMenu('shop') }}><Link to={'/'} style={{ textDecoration: 'none' }}>Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('mens') }}><Link to={'/mens'} style={{ textDecoration: 'none' }}>Mens</Link>{menu == 'mens' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('womens') }}><Link to={'/womens'} style={{ textDecoration: 'none' }}>Womens</Link>{menu == 'womens' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('kids') }}><Link to={'/kids'} style={{ textDecoration: 'none' }}>Kids {menu == 'kids' ? <hr /> : <></>}</Link></li>
      </ul>

      <div className="right">
        <Link to='/login'>  <button >Login</button></Link>
        <Link to='/cart'>  <img src={Cart} alt="" /> </Link>
        <div className='cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar