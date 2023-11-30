import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const pagesLinks: { [key: string]: string[] } = {
  "/user": ["Account Overview"],
  "/user/products": ["Account Overview", "products"],
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const BreadCrumb = () => {
  let location = useLocation()
  const [pathLinks, setPathLinks] = useState<string[]>([])

  useEffect(() => {
    let pathArray: string[] = []
    for (let key in pagesLinks) {
      if (key === location.pathname) {
        pathArray = pagesLinks[key]
      } else if (
        location.pathname.includes(key) &&
        location.pathname.length > 10
      ) {
        pathArray = pagesLinks[key]
      }
    }
    setPathLinks(pathArray)
  }, [location])

  return (
    <nav
      style={{ "--bs-breadcrumb-divider": "'>'" } as React.CSSProperties}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={"/"} className="link">
            Home
          </Link>
        </li>
        {pathLinks.map((link, index) => (
          <li key={index} className="breadcrumb-item" aria-current="page">
            {link === "Account Overview" ? (
              <NavLink
                to="/user"
                end
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                {capitalize(link)}
              </NavLink>
            ) : (
              <NavLink
                to={link}
                end
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                {capitalize(link)}
              </NavLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default BreadCrumb
