import React, { ReactNode } from "react"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import TitleBar from "../components/TitleBar"

interface Props {
  title?: string
  children: ReactNode[]
}

const PageContent = ({ title, children }: Props) => {
  return (
    <>
      <div className=" row justify-content-center">
        <div className="col-12 page">
          {title && <TitleBar>{title}</TitleBar>}
          <div className="px-3 ">
            <div
              className="
            d-sm-flex
            flex-wrap
            mx-3
            mt-5
            mb-5
            "
            >
              <div className="col-12">
                <BreadCrumb />
              </div>
              <div
                className="
                col-lg-2
                col-md-12
                col-sm-12
                mb-3
              "
              >
                <div className="position-sticky top-0">{children[0]}</div>
              </div>
              <div
                className="
                col-lg-10
                col-md-12
                col-sm-12
                px-lg-4
          "
              >
                {children[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageContent
