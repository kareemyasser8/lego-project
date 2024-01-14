import './CollapsibleSelect.css';
import { useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import useProductSortOptions from '../../Hooks/useProductSortOptions';
import useFilterStore from '../../state-management/useFilterStore';

const CollapsibleSelect = () => {
  const { data, isLoading, isError } = useProductSortOptions()
  const [expanded, setIsExpanded] = useState<boolean>(false)
  const collapsibleRef = useRef<HTMLDivElement>(null)
  const { setOrdering, ordering } = useFilterStore()
  const [sortOptionSelected, setSortOptionSelected] = useState<string>(ordering || 'Recommended')

  const handleSortClick = (item: string) => {
    setSortOptionSelected(item)
    setOrdering(item)
  }

  const handleOutsideClick = (event: MouseEvent) => {
    // Check if the clicked element is outside the collapsibleSelect component
    if (
      collapsibleRef.current &&
      !collapsibleRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  return (
    <div
      className={`collapsibleSelect ${
        expanded == true ? `collapsibleSelect--expanded` : ``
      }`}
      ref={collapsibleRef}
    >
      <header
        className="collapsibleSelect__header"
        onClick={() => setIsExpanded(!expanded)}
      >
        <h4 className="collapsibleSelect__header__heading">
          Sort by:{" "}
          <span className="collapsibleSelect__header__selected-option">
            {sortOptionSelected}
          </span>
        </h4>
        <BsChevronDown className="collapsibleSelect__header__chevron" />
      </header>
      <ul className="list collapsibleSelect__options__list">
        {data?.map((item, index) => (
          <li onClick={() => handleSortClick(item)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CollapsibleSelect
