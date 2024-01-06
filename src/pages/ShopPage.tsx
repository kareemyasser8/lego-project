import ProductsGrid from "../components/ProductsGrid/ProductsGrid"
import PageContent from "./PageContent"
import ProductFilterMenu from "../components/ProductFilterMenu/ProductFilterMenu"
import TitleBar from "../components/TitleBar"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"

const ShopPage = () => {
  return (
    <>
      {/* <PageContent title="Shop"> */}
      <BreadCrumb/>
      <TitleBar>Shop</TitleBar>
      <div className="grid grid--1x2 page-layout mt-4 mb-4">
        <ProductFilterMenu />
        <ProductsGrid />
      </div>

      {/* </PageContent> */}
    </>
  )
}

export default ShopPage
