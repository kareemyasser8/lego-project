import React from "react"
import Cart from "../components/Cart/Cart"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import TitleBar from "../components/TitleBar"
import Recommended from "../components/Recommended/Recommended"

const CartPage = () => {
  return (
    <>
      {/* <BreadCrumb/>
    <TitleBar>Cart</TitleBar> */}
      <div className="max-content mx-auto px-4">
        <div className=" mt-3 page-height mb-3">
          <Cart></Cart>
        </div>
        <Recommended />
      </div>
    </>
  )
}

export default CartPage
