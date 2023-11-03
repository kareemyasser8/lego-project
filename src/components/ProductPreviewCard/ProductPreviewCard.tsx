import "./ProductPreviewCard.css"
import noImage from "../../assets/no-image-placeholder.webp"
import ProductRating from "../ProductRating/ProductRating"
import { FieldValues } from "react-hook-form"
import { useEffect, useState } from "react"
import { Product } from "../../Products"

interface Props {
  data: Product
}

const ProductPreviewCard = ({ data }: Props) => {
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
              {data?.images ? (
                <img
                  className="w-100"
                  src={
                    data.images[0]?.type?.startsWith("image/")
                      ? URL.createObjectURL(data.images[0])
                      : noImage
                  }
                  alt=""
                />
              ) : (
                <img className="w-100" src={noImage} alt="" />
              )}
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
              <p>{data?.title}</p>
            </div>
            <ProductRating ratings={data?.rating || 0} />
            <div className="product-price fs-5 fw-bold">
              <p>${data?.price || 0}</p>
            </div>
            <p>{data?.description || ""}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreviewCard
