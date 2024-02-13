import React, { useState } from "react"
import { BiChevronDown } from "react-icons/bi"

interface Props {
  collapsibleTitle: string
  collapisbleData: any
}

const Collapsible = ({ collapsibleTitle, collapisbleData }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  // collapsible--expanded
  return (
    <div
      className={
        isExpanded ? "collapsible collapsible--expanded" : "collapsible"
      }
    >
      <header
        onClick={() => {setIsExpanded(!isExpanded)}}
        className="collapsible__header"
      >
        <h2 className="collapsible__heading collapsible--bold">
          {collapsibleTitle}
        </h2>
        <BiChevronDown className="collapsible__chevron" />
      </header>
      <div className="collapsible__content">
        {Array.isArray(collapisbleData) ? (
          <div className="collapsible__content--col">
            {collapisbleData.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ) : (
          collapisbleData
        )}
      </div>
    </div>
  )
}

export default Collapsible
