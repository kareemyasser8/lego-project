import React from 'react'
import Cart from '../components/Cart/Cart'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import TitleBar from '../components/TitleBar'
import Recommended from '../components/Recommended/Recommended'

const CartPage = () => {
  return (
    <>
    {/* <BreadCrumb/>
    <TitleBar>Cart</TitleBar> */}
    <div className='page-layout mt-3 page-height'>
        <Cart></Cart>
    </div>
    <Recommended/>
    </>
  )
}

export default CartPage