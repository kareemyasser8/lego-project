import { useState } from "react"
import useProducts from "../../Hooks/useProducts"
import productService from "../../services/productService"
import ProductInGridCard from "../ProductInGrid/ProductInGridCard"
import Spinner from "../Spinner/Spinner"

const ProductsGrid = () => {
  const pageSize = 20
  const [page, setPage] = useState(1)
  const { data, error, isLoading } = useProducts(page, pageSize)

  if (isLoading) {
    return <Spinner color="text-warning" />
  }

  return (
    <>
      <div className="col-12 h-100">
        <div className="row">
          {data?.products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 border">
              <ProductInGridCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductsGrid
