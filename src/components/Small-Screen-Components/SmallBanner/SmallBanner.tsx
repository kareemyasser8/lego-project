import "./SmallBanner.css"
import { BannerData } from "../../HomeBanner/HomeBanner"
import { useNavigate } from "react-router-dom";
import AnimatedDiv from "../../AnimatedDiv";

interface Props {
  data: BannerData
}

const SmallBanner = ({ data }: Props) => {

  const navigate = useNavigate();
  const handleClick = () => navigate('/shop');

  return (
    <>
      <AnimatedDiv>
      <div className="row small-banner">
        <div className="col-12 d-flex flex-column p-0">
          <img
            className="w-100 h-100 object-fit-cover"
            src={data.imageCover}
            loading="lazy"
          />
          <div
            className="
            col-12
            d-flex
            p-3
            flex-column
            align-items-center
            bg-dark
            justify-content-center
            "
          >
            <p className="fs-1 text-white text-center col-10">{data.title}</p>

            <p className="fs-md-5 text-white col-10 text-center">{data.text}</p>
            <button onClick={handleClick} className=" fs-5 btn btn-light">Shop now</button>
          </div>
        </div>
      </div>
      </AnimatedDiv>
    </>
  )
}

export default SmallBanner
