import ProductsGrid from "../components/ProductsGrid/ProductsGrid"
import PageContent from "./PageContent"
import ProductFilterMenu from "../components/ProductFilterMenu/ProductFilterMenu"

const ShopPage = () => {
  return (
    <>
      <PageContent title="Shop">
        <ProductFilterMenu/>
        <ProductsGrid />
      </PageContent>
    </>
  )
}

export default ShopPage
