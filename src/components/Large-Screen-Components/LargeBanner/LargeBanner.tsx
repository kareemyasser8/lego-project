import "./LargeBanner.css"
import { BannerData } from "../../HomeBanner/HomeBanner"

interface Props {
    data: BannerData
  }

const LargeBanner = ({data}: Props) => {
  return (
    <div className="row m-0">
      <div className="col-12 p-0 position-relative">
        <div
          className="
            position-absolute
            banner
            col-12
            d-flex
            h-100
            flex-column
            align-items-center
            justify-content-center
            "
        >
          <p className="fs-1 text-white text-center col-4">
            {data.title}
          </p>

          <p className="fs-md-5 text-white col-4 text-center">
            {data.text}
          </p>
          <button className=" fs-5 btn btn-light">Shop now</button>
        </div>
        <img className="w-100" src={data.imageCover} alt="" />
      </div>
    </div>
  )
}

export default LargeBanner
