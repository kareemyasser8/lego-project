import "./LargeBanner.css"
import { BannerData } from "../../HomeBanner/HomeBanner"
import { useNavigate } from "react-router-dom"
import AnimatedDiv from "../../AnimatedDiv"

interface Props {
  data: BannerData
}

const LargeBanner = ({ data }: Props) => {
  const navigate = useNavigate()
  const handleClick = () => navigate("/shop")

  return (
    <AnimatedDiv index={3}>
      <div
        className="
            col-12
            p-0
            position-relative"
      >
        <div
          className={`banner
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
            <h1>{data.title}</h1>
            <p>{data.text}</p>
          </div>
          <button
            className={`btn ${
              data.textColor === "light" ? "btn-light" : "btn-dark"
            } `}
            onClick={handleClick}
          >
            Shop now
          </button>
        </div>
        <img className="w-100" src={data.imageCover} loading="lazy" />
      </div>
    </AnimatedDiv>
  )
}

export default LargeBanner
