import React, { useEffect } from "react"
import useFilterStore from "../../state-management/useFilterStore"
import { IoClose } from "react-icons/io5"

const SelectedFiltersForProducts = () => {
  const { filters, removeFilter, resetFilters, setIsChanged} = useFilterStore()

  return (
    <>
      <hr className="hr hr-blurry mt-0" />
      <div className="gray mb-2">Selected Filters</div>
      <div className="row px-2 gap-1">
        <div
          onClick={resetFilters}
          className="butn btn--rounded btn--black btn--small mb-2"
        >
          Clear All Filters
        </div>

        {Object.keys(filters).flatMap((type) =>
          (filters as any)[type]?.map((value: any, index: number) => (
            <div
              key={index}
              className="butn btn--rounded btn--outlined btn--outlined-gray btn--small"
            >
              {value}
              <IoClose
                onClick={() =>{ 
                  removeFilter({ type, value })
                  setIsChanged()
                }}
                fontSize={"1.3rem"}
              />
            </div>
          ))
        )}
      </div>

      <hr className="hr hr-blurry" />
    </>
  )
}

export default SelectedFiltersForProducts
