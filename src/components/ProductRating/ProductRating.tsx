import yellowStar from "../../assets/yellowStar.svg"
import grayStar from "../../assets/grayStar.svg"
import halfStar from "../../assets/halfStar.svg"

interface Props{
    ratings: number | 0
}

const ProductRating = ({ratings}: Props) => {
  return (
    <>
      <div className="ratings-stars-section col-12 d-flex align-items-center">
        {Array.from({ length: Math.floor(ratings) }, (_, index) => (
          <img key={index} className="h-100" src={yellowStar} alt="" />
        ))}
        {ratings % 1 !== 0 && (
          <img className="h-100" src={halfStar} alt="" />
        )}
        {Array.from({ length: 5 - Math.ceil(ratings) }, (_, index) => (
          <img key={index} className="h-100" src={grayStar} alt="" />
        ))}
      </div>
    </>
  )
}

export default ProductRating
