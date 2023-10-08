import "./App.css"
import Nav from "./components/Nav"
import HomeBanner from "./components/HomeBanner"
import Recommended from "./components/Recommended/Recommended"
import banner from "./assets/banner.webp"
import banner2 from "./assets/banner2.webp"
import { BannerData } from "./components/HomeBanner/HomeBanner"
import Articles from "./components/Articles/Articles"
import LargeFooter from "./components/LargeFooter/LargeFooter"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import { LoginPopupContextProvider } from "./state-management/contexts/loginPopupContext"

function App() {
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

  return (
    <>
      <LoginPopupContextProvider>
        <div className="position-relative">
          <LoginPopup />
          <Nav />
          <div className=" row justify-content-center">
            <div className="col-12">
              <HomeBanner bannerData={bannerData[0]} />
              <div className="mt-5 px-5">
                <Recommended />
              </div>
              <HomeBanner bannerData={bannerData[1]} />
              <div className="mt-5 px-5">
                <Articles />
              </div>
              <LargeFooter />
            </div>
          </div>
        </div>
      </LoginPopupContextProvider>
    </>
  )
}

export default App
