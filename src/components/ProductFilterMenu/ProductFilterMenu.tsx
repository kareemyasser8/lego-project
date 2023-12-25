import React from 'react'
import ProductFilter from './ProductFilter'
import CategoryFilter from './CategoryFilter'
import SelectedFiltersForProducts from './SelectedFiltersForProducts'

const ProductFilterMenu = () => {

    const priceRanges = [
    "$0 - $25",
    "$25 - $50",
    "$50 - $75",
    "$75 - $100",
    "$100+",
  ]


  return (
    <div>
        <SelectedFiltersForProducts/>
        <ProductFilter options={priceRanges} optionName='price'/>
        <ProductFilter options={priceRanges} optionName='category'/>
        {/* <CategoryFilter/> */}
    </div>
  )
}

export default ProductFilterMenu