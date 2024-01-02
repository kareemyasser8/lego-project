import React from "react"
import useFilterStore from "../../state-management/useFilterStore"
import { IoClose } from "react-icons/io5"

const SelectedFiltersForProducts = () => {
  const { filters, addFilter, removeFilter, resetFilters } = useFilterStore()

  return (
    <>
      <hr className="hr hr-blurry mt-0" />
      <div className="gray mb-2">Selected Filters</div>
      <div className="row px-2 gap-1">
        <div onClick={resetFilters} className="butn btn--rounded btn--black btn--small mb-2">
          Clear All Filters
        </div>

        {/* {filters.map((filter, index) => (
          <div
            key={index}
            className="butn btn--rounded btn--outlined btn--outlined-gray btn--small"
          >
            {filter.price}
            <IoClose onClick={()=> removeFilter(filter)} fontSize={"1.3rem"} />
          </div>
        ))} */}
      </div>

      <hr className="hr hr-blurry" />
    </>
  )
}

export default SelectedFiltersForProducts
