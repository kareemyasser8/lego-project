import "./HomeBanner.css"
import LargeBanner from "../Large-Screen-Components/LargeBanner/LargeBanner"
import SmallBanner from "../Small-Screen-Components/SmallBanner/SmallBanner"
import banner from "../../assets/banner.webp"
import { useEffect, useState } from "react"

export interface BannerData {
  imageCover: string
  title: string
  text: string
}

const HomeBanner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 840)

  let bannerData = {
    imageCover: banner,
    title: "The magic is brewing",
    text: "Conjure up the fun with new Hocus Pocus: The Sanderson Sisters' Cottage.",
  }

  const handleWindowReize = () => {
    setIsSmallScreen(window.innerWidth <= 840)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowReize)
    return () => {
      window.removeEventListener("resize", handleWindowReize)
    }
  }, [])

  return (
    <>
      {isSmallScreen ? (
        <SmallBanner data={bannerData} />
      ) : (
        <LargeBanner data={bannerData} />
      )}
    </>
  )
}

export default HomeBanner
