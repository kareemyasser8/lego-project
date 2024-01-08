import { BsChevronDown } from "react-icons/bs"
import "./CollapsibleSelect.css"
import { ChangeEvent, useEffect, useRef, useState } from "react"

const CollapsibleSelect = () => {
  const [expanded, setIsExpanded] = useState<boolean>(false)
  const collapsibleRef = useRef<HTMLDivElement>(null)

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
            Recommended
          </span>
        </h4>
        <BsChevronDown className="collapsibleSelect__header__chevron" />
      </header>
      <ul className="list collapsibleSelect__options__list">
        <li>Recommended</li>
        <li>Recommended</li>
        <li>Recommended</li>
        <li>Recommended</li>
        <li>Recommended</li>
      </ul>
    </div>
  )
}

export default CollapsibleSelect
