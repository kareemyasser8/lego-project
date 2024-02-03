import { useState } from "react"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import "./ProductDetailsPage.css"
import noImage from "../../assets/no-image-placeholder.webp"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import ProductRating from "../../components/ProductRating/ProductRating"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"
import AddToCartCounter from "../../components/AddToCartCounter/AddToCartCounter"
import { APILink } from "../../constants/APILink"
import { FetchedProductImage } from "../../entities/FetchedProduct"
import Recommended from "../../components/Recommended/Recommended"
import useProductDetails from "../../Hooks/useProductDetails"
import Spinner from "../../components/Spinner/Spinner"
import useImageGalleryBtns from "../../Hooks/useImageGalleryBtns"

const ProductDetailsPage = () => {
  const {
    temporaryCartId,
    displayedQuantity,
    singleProductData,
    singleProductLoading,
    numOfImages,
  } = useProductDetails()

  const { setCurrentImgIndex, currentImgIndex, handleNextImg, handlePrevImg } =
    useImageGalleryBtns(numOfImages)

  if (singleProductLoading)
    return (
      <>
        <div className="page-loading">
          <Spinner color="text-warning"></Spinner>
        </div>
      </>
    )

  return (
    <>
      <BreadCrumb productName={singleProductData?.title} />
      <div className="grid product-content page-layout mt-1 mb-3">
        <div className="product-content__images-col">
          {singleProductData?.Images?.map(
            (img: FetchedProductImage, index: number) => (
              <div
                onClick={() => setCurrentImgIndex(index)}
                key={index}
                className={`images-col__thumbnail ${
                  index == currentImgIndex
                    ? `images-col__thumbnail--selected`
                    : ``
                }`}
              >
                <img src={APILink + "/" + img.url} alt="" loading="lazy" />
              </div>
            )
          )}
        </div>

        <div className="product-content__image-preview">
          <div className="image-preview__image-counter-badge">{`${
            currentImgIndex + 1
          } / ${numOfImages}`}</div>
          <div className="chevron-btn chevron-left" onClick={handlePrevImg}>
            <BsChevronLeft size={"25px"} />
          </div>
          <div className="image-preview__container">
            {singleProductData?.Images != undefined ? (
              <img
                className="w-100"
                src={
                  APILink + "/" + singleProductData?.Images[currentImgIndex].url
                }
                alt={singleProductData.title}
              />
            ) : (
              <img className="w-100" src={noImage} alt="" />
            )}
          </div>
          <div className="chevron-btn chevron-right" onClick={handleNextImg}>
            <BsChevronRight size={"25px"} />
          </div>
        </div>

        <div className="product-content__product-details">
          <ProductRating ratings={singleProductData?.rating || 0} />

          <div className="product-details__title">
            {singleProductData?.title}
          </div>
          <div className="product-details__price">
            {" "}
            ${singleProductData?.price}
          </div>

          <div className="product-details__counter-section">
            <div className="counter-section__counter">
              <AddToCartCounter
                cartId={temporaryCartId || ""}
                productId={singleProductData?.id.toString() || ""}
                quantity={displayedQuantity}
              />
            </div>
            <small>Limit 5</small>
          </div>

          <div className="product-details__addToCartSection">
            <button
              type="button"
              className="butn btn--block btn--orange btn--large btn--rounded"
            >
              <HiOutlineShoppingBag fontSize={"1.3rem"} />
              Add to Bag
            </button>

            <div className="heart-product">
              <AiOutlineHeart size={20} color={"#006DB7"} />
            </div>
          </div>
        </div>
      </div>

      <section className="product-specification page-layout">
        <h2>Specifications</h2>
        <div className="product-specification__content">
          <p>{singleProductData?.description}</p>

          {singleProductData?.Images ? (
            <img
              className="product-specification__image"
              src={APILink + "/" + singleProductData.Images[0].url}
              alt={singleProductData.title}
            />
          ) : (
            <img
              className="product-specification__image"
              src={noImage}
              alt="no Image"
            />
          )}
        </div>
      </section>

      <section className="">
        <Recommended />
      </section>
    </>
  )
}

export default ProductDetailsPage
