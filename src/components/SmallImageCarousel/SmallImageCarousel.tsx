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
}

const SmallImageCarousel = ({ product }: Props) => {
  const imageListRef = useRef<HTMLDivElement>(null)
  const prevButtonRef = useRef<HTMLDivElement>(null)
  const nextButtonRef = useRef<HTMLDivElement>(null)
  const [isBtnShown, setIsBtnShown] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)


  const slideScroll = (ref: MutableRefObject<any>) => {
    const direction = ref === prevButtonRef ? -1 : 1
    const scrollAmount =
      (imageListRef.current?.clientWidth as number) * direction
    imageListRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" })

    setScrollPosition((prevScrollPosition) => prevScrollPosition + scrollAmount)
  }

  const [isHeartClicked, setIsHeartClicked] = useState(false)
  const {data} = useIsProductInWishList(product.id)
  const { mutate } = useAddOrDeleteProductToWishList()
  

  useEffect(()=>{
    setIsHeartClicked(data?.isProductInWishList || false)
  },[data])
  
  const addOrRemoveProductInWishList = (productId: string) => {
    setIsHeartClicked(!isHeartClicked)
    const elementTobeSent: elementToBeSentOrRemovedFromWishList = {
      wishListId: localStorage.getItem("wishListId"),
      productId: productId,
    }

    mutate(elementTobeSent)
  }


  return (
    <>
      <div
        onMouseEnter={() => setIsBtnShown(true)}
        onMouseLeave={() => setIsBtnShown(false)}
        className="col-12 position-relative"
      >
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

        {isBtnShown && scrollPosition !== 0 && (
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
        )}

        {isBtnShown &&
          scrollPosition + (imageListRef.current?.clientWidth ?? 0) <
            (imageListRef.current?.scrollWidth ?? 0) && (
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
          )}

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
                        src={APILink + "/" + img.url}
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
    </>
  )
}

export default SmallImageCarousel
