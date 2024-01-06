import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const BreadCrumb = () => {
  const location = useLocation()

  let currentLink = ""
  let paths = location.pathname
    .split("/")
    .filter((item) => item != "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`
      crumb = capitalize(crumb);
      return (
        <Link key={index} to={currentLink} className="link">
          {crumb == "User" ? "account overview" : crumb}
        </Link>
      )
    })

  return (
    <nav className="breadcrumb-container">
      <ul className="list d-flex">
        <li>
          <Link to={"/"} className="link">
            Home
          </Link>
          {paths}
        </li>
      </ul>
    </nav>
  )
}

export default BreadCrumb
