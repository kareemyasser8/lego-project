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

  // console.log(data)

  // const filters = [
  //   {
  //     name: "price",
  //     values: ["$0 - $25", "$25 - $50", "$50 - $75", "$75 - $100", "$100+"],
  //   },
  //   {
  //     name: "category",
  //     values: ["$0 - $25", "$25 - $50", "$50 - $75", "$75 - $100", "$100+"],
  //   },
  //   {
  //     name: "Gifts",
  //     values: ["$0 - $25", "$25 - $50", "$50 - $75", "$75 - $100", "$100+"],
  //   },
  // ]

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
