import ProductsGrid from "../components/ProductsGrid/ProductsGrid"
import ProductFilterMenu from "../components/ProductFilterMenu/ProductFilterMenu"
import TitleBar from "../components/TitleBar"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import CollapsibleSelect from "../components/collapsible-select/CollapsibleSelect"

const ShopPage = () => {
  return (
    <>
      <BreadCrumb />
      <TitleBar>Shop</TitleBar>
      <div className="summary-wrapper page-layout mt-5 mb-3">
        <header>Showing 184 Products</header>
        <div className="product-select__collapsible__container">
          <CollapsibleSelect></CollapsibleSelect>
        </div>
      </div>
      <div className="grid grid--1x2 page-layout mb-4">
        <ProductFilterMenu />
        <ProductsGrid />
      </div>
    </>
  )
}

export default ShopPage
