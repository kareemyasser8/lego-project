import useProductsFilterOptions from "../../Hooks/userProductsFilterOptions"
import { filterOption } from "../../services/filterOptionsService"
import ProductFilter from "./ProductFilter"
import SelectedFiltersForProducts from "./SelectedFiltersForProducts"

interface response {
  name: string
  value: { name: string; count: number }[]
}

const ProductFilterMenu = () => {
  const { data, isLoading } = useProductsFilterOptions()
  return (
    <div>
      <SelectedFiltersForProducts />

      {data != undefined
        ? data.map((filter: filterOption, index: number) => {
            return (
              <ProductFilter
                key={index}
                options={filter.value}
                optionName={filter.name}
              />
            )
          })
        : ""}
        
    </div>
  )
}

export default ProductFilterMenu
