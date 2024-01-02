import useFilterStore from "../../state-management/useFilterStore"
import { ChangeEvent, FormEvent, useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import "./ProductFilter.css"

interface Props {
  options: { name: string; count: number }[]
  optionName: string
}

const ProductFilter = ({ options, optionName }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { filters, addFilter, removeFilter } = useFilterStore()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target

    if (checked) {
      if (
        optionName.toLowerCase() === "price" ||
        optionName.toLowerCase() === "theme" ||
        optionName.toLowerCase() === "interest"
      ) {
        addFilter({
          price: name,
          theme: null,
          interest: null
        })
      }
    } else {
      removeFilter({
        price: name,
        theme: null,
        interest: null
      })
    }
  }

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
          <form className="collapsible__content--col">
            {options.map((option, index) => {
              return (
                <div key={index} className="filterOption__checkbox-option">
                  <input
                    name={option.name}
                    onChange={handleChange}
                    type="checkbox"
                    className="checkbox"
                  />
                  <label>{option.name}</label>
                  <span className="checkbox-option__count">
                    [{option.count}]
                  </span>
                </div>
              )
            })}
          </form>
        </div>
        <div className="filterOption__separator"></div>
      </section>
    </>
  )
}

export default ProductFilter
