import React, { useState } from "react"
import { CgChevronDown } from "react-icons/cg"

interface Props {
  filterTitle: string
  href: string
}

const FilterTitleCollapsable = ({ filterTitle, href }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleCollapse = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <a
      className="
      d-flex
      align-items-center
      gray
      justify-content-between"
      data-bs-toggle="collapse"
      role="button"
      href={`#${href}`}
      onClick={() => handleToggleCollapse()}
      aria-expanded={isExpanded}
      aria-controls={`${href}`}
    >
      <div className="fw-bold">{filterTitle}</div>
      <CgChevronDown
        fontSize={"1.5rem"}
        className={isExpanded ? "chevron-animate-down" : "chevron-animate-up"}
        style={{ transition: "transform 0.1s ease-in" }}
      />
    </a>
  )
}

export default FilterTitleCollapsable
