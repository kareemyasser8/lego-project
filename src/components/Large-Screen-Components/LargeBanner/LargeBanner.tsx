import "./LargeBanner.css"
import { BannerData } from "../../HomeBanner/HomeBanner"

interface Props {
  data: BannerData
}

const LargeBanner = ({ data }: Props) => {
  return (
    <>
      <div
        className="
          col-12
          p-0
          position-relative"
      >
        <div
          className={`flex-column  justify-content-center position-absolute banner col-12 d-flex h-100 
            ${
              data.position === "center"
                ? "align-items-center text-center "
                : " align-items-start ps-5"
            }
              `}
        >
          <div
            className={`col-4 ${
              data.textColor === "light" ? "text-white" : "text-dark"
            }`}
          >
            <p className="fs-1 lh-sm ps-2">{data.title}</p>
            <p className="fs-md-5 ps-2">{data.text}</p>
          </div>

          <button
            className={`fs-5 ms-2 btn ${
              data.textColor === "light" ? "btn-light" : "btn-dark"
            } `}
          >
            Shop now
          </button>
        </div>
        <img className="w-100" src={data.imageCover} alt="" />
      </div>
    </>
  )
}

export default LargeBanner
