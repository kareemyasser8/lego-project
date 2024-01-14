import ProductsGrid from "../components/ProductsGrid/ProductsGrid"
import ProductFilterMenu from "../components/ProductFilterMenu/ProductFilterMenu"
import TitleBar from "../components/TitleBar"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import CollapsibleSelect from "../components/collapsible-select/CollapsibleSelect"
import { useState } from "react"

const ShopPage = () => {

  const [productsCount, setProductsCount] = useState<string>('')

  return (
    <>
      <BreadCrumb />
      <TitleBar>Shop</TitleBar>
      <div className="summary-wrapper page-layout mt-5 mb-3">
        <header>Showing {productsCount} Products</header>
        <div className="product-select__collapsible__container">
          <CollapsibleSelect></CollapsibleSelect>
        </div>
      </div>
      <div className="grid grid--1x2 page-layout mb-4">
        <ProductFilterMenu />
        <ProductsGrid count={(count)=>{setProductsCount(count)}} />
      </div>
    </>
  )
}

export default ShopPage
