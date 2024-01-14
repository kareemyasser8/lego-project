import { useEffect, useState } from "react"
import useProducts from "../../Hooks/useProducts"
import ProductInGridCard from "../ProductInGrid/ProductInGridCard"
import Spinner from "../Spinner/Spinner"
import useFilterStore from "../../state-management/useFilterStore"
import ProductInGridSkeleton from "../ProductInGridSkeleton/ProductInGridSkeleton"

interface Props {
  count: (count: string) => void
}

const ProductsGrid = ({ count }: Props) => {
  const pageSize = 20
  const [page, setPage] = useState(1)
  const { filters, ordering } = useFilterStore()
  const { data, error, isLoading } = useProducts(
    page,
    pageSize,
    filters,
    ordering
  )
  const skeletons = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    count(data?.count.toString() || "")
  }, [data])

  if (error) {
    return (
      <div className="alert alert-danger" role="alert" style={{maxHeight: "100px"}}>
        <p>Unknown error from devtools</p>
      </div>
    )
  }

  return (
    <>
      <div className="ruled-grid">
        {isLoading &&
          skeletons.map((skeleton) => <ProductInGridSkeleton key={skeleton} />)}

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
