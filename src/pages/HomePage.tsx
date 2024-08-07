import Articles from "../components/Articles/Articles"
import HomeBanner from "../components/HomeBanner"
import Recommended from "../components/Recommended/Recommended"
import { BannerData } from "../components/HomeBanner/HomeBanner"
import banner from "../assets/banner.webp"
import banner2 from "../assets/banner2.webp"


let bannerData: BannerData[] = [
  {
    imageCover: banner,
    title: "The magic is brewing",
    text: "Conjure up the fun with new Hocus Pocus: The Sanderson Sisters' Cottage.",
    position: "center",
    textColor: "light",
  },
  {
    imageCover: banner2,
    title: "It’s a film. It’s a game. Play it!",
    text: "Use your play powers to crack the hidden codes.",
    position: "left",
    textColor: "dark",
  },
]

const HomePage = () => {
  return (
    <>

        <div className="max-content mx-auto px-4">
          <HomeBanner bannerData={bannerData[0]} />
          <div className="mt-5">
            <Recommended />
          </div>
          <HomeBanner bannerData={bannerData[1]} />
          <div className="mt-5 ">
            <Articles />
          </div>
        </div>

    </>
  )
}

export default HomePage
