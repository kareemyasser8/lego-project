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
    const { addFilter, removeFilter, filterToBeRemoved, filters } =
      useFilterStore()
    // const checkBoxRef = useRef<{[key: string]: any}>(HTMLInputElement)

    // const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>({})

    // useEffect(() => {
    //   if (
    //     options?.length > 0 &&
    //     options &&
    //     filters == ({} as productQuery) &&
    //     filterToBeRemoved === ({} as query)
    //   ) {
    //     setIsChecked(
    //       produce((draft) => {
    //         options.forEach((item) => {
    //           draft[item.name] = false
    //         })
    //       })
    //     )
    //   } else {
    //     if (filterToBeRemoved !== ({} as query)) {
    //       setIsChecked(
    //         produce((draft) => {
    //           draft[filterToBeRemoved.value] = false
    //         })
    //       )
    //     }
    //   }
    // }, [options, filterToBeRemoved, filters])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target
      // const updatedCheckedState = { ...isChecked, [name]: !isChecked[name] };
      // setIsChecked(
      //   produce((draft) => {
      //     draft[name] =  true
      //   })
      // )

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
                      onChange={handleChange}
                      // checked={isChecked[option.name] || false}
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
