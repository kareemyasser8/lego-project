import FilterTitleCollapsable from "./FilterTitleCollapsable"
import FilterCheckBoxForm from "./FilterCheckBoxForm"
import useFilterStore from "../../state-management/useFilterStore"
import { useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import "./ProductFilter.css"

interface Props {
  options: string[]
  optionName: string
}

const ProductFilter = ({ options, optionName }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <section
        className={
          "filterOption collapsible " +
          (isExpanded ? "collapsible--expanded" : "")
        }
      >
        <header
          onClick={() => {
            setIsExpanded(!isExpanded)
          }}
          className="collapsible__header"
        >
          <h2 className="collapsible__heading collapsible--bold">
            {optionName}
          </h2>
          <BiChevronDown className="collapsible__chevron" />
        </header>
        <div className="collapsible__content">
          <div className="collapsible__content--col">
            {options.map((option, index) => {
              return (
                <div key={index} className="filterOption__checkbox-option">
                  <input type="checkbox" className="checkbox" />
                  <label>{option}</label>
                </div>
              )
            })}
          </div>
        </div>
        <div className="filterOption__separator"></div>
      </section>
    </>
  )
}

export default ProductFilter
