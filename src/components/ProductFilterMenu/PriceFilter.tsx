import FilterTitleCollapsable from "./FilterTitleCollapsable"
import FilterCheckBoxForm from "./FilterCheckBoxForm"

const PriceFilter = () => {
  const priceRanges = [
    "$0 - $25",
    "$25 - $50",
    "$50 - $75",
    "$75 - $100",
    "$100+",
  ]

  return (
    <>
      <FilterTitleCollapsable filterTitle="Price" href="priceRanges" />
      <FilterCheckBoxForm idOfMenu="priceRanges" options={priceRanges} />
    </>
  )
}

export default PriceFilter
