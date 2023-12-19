import React from 'react'
import FilterCheckBoxForm from './FilterCheckBoxForm'
import FilterTitleCollapsable from './FilterTitleCollapsable'

const CategoryFilter = () => {
  const categoryRanges = [
        "Home",
        "Accessories",
        "Lego fun",
        "Christmas",
        "Ramadan",
   ]

   return (
    <>
      <FilterTitleCollapsable filterTitle="Category" href="categoryRanges" />
      <FilterCheckBoxForm idOfMenu="categoryRanges" options={categoryRanges} />
    </>
  )
}

export default CategoryFilter