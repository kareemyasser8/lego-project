import {useState} from "react"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import "./ProductDetailsPage.css"
import noImage from "../../assets/no-image-placeholder.webp"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import ProductRating from "../../components/ProductRating/ProductRating"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"
import AddToCartCounter from "../../components/AddToCartCounter/AddToCartCounter"
import { useSingleProduct } from "../../Hooks"
import { useParams } from "react-router-dom"
import { APILink } from "../../constants/APILink"
import {
  FetchedProduct,
  FetchedProductImage,
} from "../../entities/FetchedProduct"

const ProductDetailsPage = () => {
  const { id } = useParams()

  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  let singleProductData: FetchedProduct | undefined
  let numOfImages: number = 0

  if (id) {
    ;({ data: singleProductData } = useSingleProduct(id))
    numOfImages = singleProductData?.Images.length || 0
  }

  const handleNextImg = () => {
    if (currentImgIndex + 1 > numOfImages - 1) return
    setCurrentImgIndex(currentImgIndex + 1)
  }

  const handlePrevImg = () => {
    if (currentImgIndex - 1 < 0) return
    setCurrentImgIndex(currentImgIndex - 1)
  }


  return (
    <>
      <BreadCrumb productName={singleProductData?.title} />
      <div className="grid product-content page-layout mt-1 mb-3">
        <div className="product-content__images-col">
          {singleProductData?.Images?.map(
            (img: FetchedProductImage, index: number) => (
              <div
                onClick={()=> setCurrentImgIndex(index)}
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
              <AddToCartCounter />
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

      <section className="product-specification page-layout mb-5">
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
    </>
  )
}

export default ProductDetailsPage
