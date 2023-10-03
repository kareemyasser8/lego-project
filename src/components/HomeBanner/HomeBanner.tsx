import LargeBanner from "../Large-Screen-Components/LargeBanner/LargeBanner"
import SmallBanner from "../Small-Screen-Components/SmallBanner/SmallBanner"
import { useEffect, useState } from "react"

export interface BannerData {
  imageCover: string
  title: string
  text: string
  position: "center" | "left"
  textColor: "dark" | "light"
}

interface Props {
  bannerData: BannerData
}

const HomeBanner = ({ bannerData }: Props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 990)

  const handleWindowReize = () => {
    setIsSmallScreen(window.innerWidth <= 990)
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
