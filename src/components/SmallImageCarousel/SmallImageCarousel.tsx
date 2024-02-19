import "./SmallImageCarousel.css"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { Link } from "react-router-dom"

import { APILink } from "../../constants/APILink"
import useAddOrDeleteProductToWishList from "../../Hooks/useAddOrDeleteProductToWishList"
import { Product } from "../../Products"
import { elementToBeSentOrRemovedFromWishList } from "../../services/wishListService"
import useIsProductInWishList from "../../Hooks/useIsProductInWishList"

interface Props {
  product: Product
  isInWishList: boolean | undefined
}

const SmallImageCarousel = ({ product, isInWishList }: Props) => {
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(false)
  const { mutate } = useAddOrDeleteProductToWishList()

  const imageListRef = useRef<HTMLDivElement>(null)
  const prevButtonRef = useRef<HTMLDivElement>(null)
  const nextButtonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isInWishList) {
      setIsHeartClicked(false)
    } else {
      setIsHeartClicked(isInWishList)
    }
  }, [isInWishList])

  const slideScroll = (ref: MutableRefObject<any>) => {
    const direction = ref === prevButtonRef ? -1 : 1
    const scrollAmount =
      (imageListRef.current?.clientWidth as number) * direction
    imageListRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  const addOrRemoveProductInWishList = (productId: string) => {
    setIsHeartClicked((prevIsHeartClicked) => !prevIsHeartClicked)
    const elementTobeSent: elementToBeSentOrRemovedFromWishList = {
      wishListId: localStorage.getItem("wishListId"),
      productId: productId,
    }
    mutate(elementTobeSent)
  }

  return (
    <div className="col-12 position-relative">
      <div className="d-flex w-100 position-relative">
        <div className="badge bg-warning text-dark ms-auto">New</div>
        <div
          className="heart-product z-1 "
          style={{ top: "0px", left: "0px" }}
          onClick={() => addOrRemoveProductInWishList(product.id)}
        >
          {isHeartClicked ? (
            <AiFillHeart size={20} color={"#006DB7"} />
          ) : (
            <AiOutlineHeart size={20} color={"#006DB7"} />
          )}
        </div>
      </div>

      <div
        className="back-btn"
        style={{ left: "0px", outline: "none", boxShadow: "none" }}
        ref={prevButtonRef}
        onClick={() => slideScroll(prevButtonRef)}
      >
        <div className="back-btn-circle bg-light mt-5">
          <BsChevronLeft size={"20px"} />
        </div>
      </div>

      <div
        className="forward-btn"
        style={{ right: "0px" }}
        ref={nextButtonRef}
        onClick={() => slideScroll(nextButtonRef)}
      >
        <div className="forward-btn-circle bg-light mt-5">
          <BsChevronRight size={"20px"} />
        </div>
      </div>
      <div className="small-carousel-container" ref={imageListRef}>
        <div className="small-carousel-list">
          {product.Images?.map((img: any, index) => {
            if (index < 2) {
              return (
                <div key={index}>
                  <Link to={`/shop/${product.id}`}>
                    <img
                      className="w-100 object-fit-contain"
                      style={{ height: "300px" }}
                      // src={APILink + "/" + img.url}
                      src={img.url}
                      loading="lazy"
                      alt={img.preview}
                    />
                  </Link>
                </div>
              )
            }
            return null // Return null for the remaining iterations
          })}
        </div>
      </div>
    </div>
  )
}

export default SmallImageCarousel
