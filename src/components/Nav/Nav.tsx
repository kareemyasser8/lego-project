import { useEffect, useState } from "react"
import LargeNav from "../LargeNav/LargeNav"
import MobileNav from "../MobileNav/MobileNav"

const Nav = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991)

  const handleWindowReize = () => {
    setIsSmallScreen(window.innerWidth <= 991)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowReize)
    return () => {
      window.removeEventListener("resize", handleWindowReize)
    }
  }, [])

  return <>{isSmallScreen ? <MobileNav /> : <LargeNav />}</>
}

export default Nav
