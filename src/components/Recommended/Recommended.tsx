import ProductCard from "../ProductCard/ProductCard"
import { BsChevronRight } from "react-icons/bs"
import { BsChevronLeft } from "react-icons/bs"
import "./Recommended.css"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import products from "../../Products"

const Recommended = () => {
  const imageListRef = useRef<HTMLDivElement>(null)
  const prevButtonRef = useRef<HTMLDivElement>(null)
  const nextButtonRef = useRef<HTMLDivElement>(null)

  const slideScroll = (ref: MutableRefObject<any>) => {
    const direction = ref === prevButtonRef ? -1 : 1
    const scrollAmount =
      (imageListRef.current?.clientWidth as number) * direction
    imageListRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <>
      <div className="page-layout">
        <h2 className="mb-3">Recommended for you</h2>
        <div className="slider-wrapper">
          <div
            className="back-btn"
            ref={prevButtonRef}
            onClick={() => slideScroll(prevButtonRef)}
          >
            <div className="back-btn-circle">
              <BsChevronLeft size={"20px"} />
            </div>
          </div>

          <div
            className="forward-btn"
            ref={nextButtonRef}
            onClick={() => slideScroll(nextButtonRef)}
          >
            <div className="forward-btn-circle">
              <BsChevronRight size={"20px"} />
            </div>
          </div>

          <div
            className="
          d-flex
          gap-4
          card-list
          flex-no-wrap
          "
            ref={imageListRef}
          >
            {products.map((p) => {
              return (
                <div key={p.id} className="p-card">
                  <ProductCard product={p} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Recommended
