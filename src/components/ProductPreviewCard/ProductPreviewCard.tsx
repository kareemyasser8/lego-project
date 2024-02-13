import "./ProductPreviewCard.css"
import noImage from "../../assets/no-image-placeholder.webp"
import useProductStore from "../../state-management/useProductStore"
import ProductRating from "../ProductRating/ProductRating"

const ProductPreviewCard = () => {
  const { product } = useProductStore()

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
              {product.images[0] != null ? (
                <img
                  className="w-100"
                  src={product.images[0].preview}
                  alt={product.title}
                />
              ) : (
                <img className="w-100" src={noImage} alt="" />
              )}

              {/* {product.imagesURLS[0] != null ? (
                <img
                  className="w-100"
                  src={product.imagesURLS[0]}
                  alt={product.title}
                />
              ) : (
                <img className="w-100" src={noImage} alt="" />
              )} */}
            </div>

            <div
              className="d-flex flex-wrap gap-2 mt-2"
              style={{ minHeight: "40px" }}
            >
              {product.images[1] != null ? (
                product.images.slice(1).map(({preview}, index) => (
                  <img
                    key={index}
                    style={{
                      width: "60px",
                      height: "40px",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                    src={preview ? preview : noImage}
                    alt={product.title}
                  />
                ))
              ) : (
                <>
                  <img
                    style={{
                      width: "60px",
                      height: "40px",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                    src={noImage}
                    alt=""
                  />
                  <img
                    style={{
                      width: "60px",
                      height: "40px",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                    src={noImage}
                    alt=""
                  />
                  <img
                    style={{
                      width: "60px",
                      height: "40px",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                    src={noImage}
                    alt=""
                  />
                </>
              )}
            </div>
          </div>

          <div className="col-lg-12 col-md-7 col-sm-12">
            <div className="mt-2 fw-bold">
              <p>{product?.title}</p>
            </div>
            <ProductRating ratings={product?.rating || 0} />
            <div className="product-price fs-5 fw-bold">
              <p>${product?.price || 0}</p>
            </div>
            <p style={{ whiteSpace: "pre-line", wordBreak: "break-word" }}>
              {product?.description || ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreviewCard
