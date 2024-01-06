import React from "react"
import ProductFilter from "./ProductFilter"
import CategoryFilter from "./CategoryFilter"
import SelectedFiltersForProducts from "./SelectedFiltersForProducts"
import useProductsFilterOptions from "../../Hooks/userProductsFilterOptions"
import { filterOption } from "../../services/filterOptionsService"

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

      {/* <ProductFilter options={priceRanges} optionName="price" />
      <ProductFilter options={priceRanges} optionName="category" /> */}
      {/* <CategoryFilter/> */}
    </div>
  )
}

export default ProductFilterMenu
