import "./ProductPreviewCard.css"
import noImage from "../../assets/no-image-placeholder.webp"
import ProductRating from "../ProductRating/ProductRating"

const ProductPreviewCard = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="mb-2">Product Preview</div>
        <div className="row">
          <div className="col-lg-12 col-md-5 col-sm-12">
            <div
              className="
            p-2
            d-flex
            position-relative
            border
            align-items-center
            justify-content-center"
            >
              <img className="w-100" src={noImage} alt="" />
            </div>

            <div
              className="d-flex col-12 gap-2 mt-2"
              style={{ height: "40px" }}
            >
              <img className="w-30" src={noImage} alt="" />
              <img className="w-30" src={noImage} alt="" />
              <img className="w-30" src={noImage} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-md-7 col-sm-12">
            <div className="mt-2 fw-bold">
              <p>Title</p>
            </div>
            <ProductRating ratings={0} />
            <div className="product-price fs-5 fw-bold">
              <p> $0</p>
            </div>
            <p>
            Gather friends or family for a seasonal build with this LEGO® Gingerbread Ornaments (40642) set, featuring 3 buildable gingerbread figures. Build and customize each figure to create unique designs that will bring a fun, festive feel to any home or workplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreviewCard
