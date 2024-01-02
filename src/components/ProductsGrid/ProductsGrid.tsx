import { useState } from "react"
import useProducts from "../../Hooks/useProducts"
import productService from "../../services/productService"
import ProductInGridCard from "../ProductInGrid/ProductInGridCard"
import Spinner from "../Spinner/Spinner"
import useFilterStore, {productQuery} from "../../state-management/useFilterStore"

const ProductsGrid = () => {
  const pageSize = 20
  const [page, setPage] = useState(1)

  const { filters } = useFilterStore()

  const { data, error, isLoading } = useProducts(
    page,
    pageSize,
    filters 
  )

  if (isLoading) {
    return <Spinner color="text-warning" />
  }

  return (
    <>
      <div className="ruled-grid">
        {data?.products.map((product, index) => (
          <div key={index} className="ruled-grid__card">
            <ProductInGridCard product={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductsGrid
