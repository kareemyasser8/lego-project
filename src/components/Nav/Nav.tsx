import { useEffect, useRef, useState } from "react"
import LargeNav from "../LargeNav/LargeNav"
import MobileNav from "../MobileNav/MobileNav"
import useShoppingCartItemsCount from "../../Hooks/useShoppingCartItemsCount"
import useTempCartId from "../../Hooks/useTempCartId"

const Nav = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991)
  const { shoppingCartItemCount } = useShoppingCartItemsCount()
  
  // const handleWindowScroll = () => {
  //   if (document.body.scrollTop > -100) {
  //     console.log("hiii")
  //     if (navbar.current) {
  //       navbar.current.style.top = "0"
  //     }
  //   } else {
  //     console.log("byee")
  //     if (navbar.current) {
  //       navbar.current.style.top = "-50px"
  //     }
  //   }
  // }

  const handleWindowReize = () => {
    setIsSmallScreen(window.innerWidth <= 991)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowReize)
    // window.addEventListener("scroll", handleWindowScroll)
    return () => {
      window.removeEventListener("resize", handleWindowReize)
      // window.removeEventListener("scroll", handleWindowScroll)
    }
  }, [])

  return (
    <>
      {isSmallScreen ? (
        <MobileNav shoppingCartItemCount={shoppingCartItemCount} />
      ) : (
        <LargeNav shoppingCartItemCount={shoppingCartItemCount} />
      )}
    </>
  )
}

export default Nav
