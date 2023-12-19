import React from 'react'
import PriceFilter from './PriceFilter'
import CategoryFilter from './CategoryFilter'
import SelectedFiltersForProducts from './SelectedFiltersForProducts'

const ProductFilterMenu = () => {
  return (
    <div>
        <SelectedFiltersForProducts/>
        <PriceFilter/>
        <CategoryFilter/>
    </div>
  )
}

export default ProductFilterMenu