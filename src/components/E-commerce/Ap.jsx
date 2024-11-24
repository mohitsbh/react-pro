import React from 'react'
import Navbar from './Frontend/Components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Frontend/Pages/Shop'
import Cart from './Frontend/Pages/Cart'
import ShopCategory from './Frontend/Pages/ShopCategory'
import Product from './Frontend/Pages/Product'
import LoginSingup from './Frontend/Pages/LoginSingup'
function Ap() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory category='mens' />} />
        <Route path='/womens' element={<ShopCategory category='womens' />} />
        <Route path='/kids' element={<ShopCategory category='kids' />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSingup />} />
        <Route path=':productId' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Ap