import useFilterStore, {
  queryType,
  query,
  productQuery,
} from "../../state-management/useFilterStore"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import "./ProductFilter.css"
import produce from "immer"

interface Props {
  options: { name: string; count: number }[]
  optionName: string
}

const ProductFilter = ({ options, optionName }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { addFilter, removeFilter, filterToBeRemoved, changed, resetAll } =
    useFilterStore()

  //[false, false, false, false, false]
  const [isChecked, setIsChecked] = useState(Array(options.length).fill(false))

  useEffect(() => {
    if (
      resetAll === true
    ) {
      setIsChecked(Array(options.length).fill(false))
    } else {
      let optionRemovedName = filterToBeRemoved.value
      let index = options.findIndex(
        (option) => option.name === optionRemovedName
      )
      const newChecked = [...isChecked]
      newChecked[index] = !isChecked[index]
      setIsChecked(newChecked)
    }
  }, [changed, resetAll])

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target
    const newChecked = [...isChecked]
    newChecked[index] = !isChecked[index]
    setIsChecked(newChecked)

    let query: query
    if (queryType.includes(optionName)) {
      query = {
        type: optionName,
        value: name,
      }

      if (checked) {
        addFilter(query)
      } else {
        removeFilter(query)
      }
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
                    checked={isChecked[index]}
                    onChange={(event) => handleChange(index, event)}
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
