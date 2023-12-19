import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const TitleBar = ({ children }: Props) => {
  return (
    <>
      <div
        className="
            d-sm-flex
            flex-wrap
            mt-4"
      >
        <header
          className="col-12"
          style={{
            height: "80px",
            backgroundColor: "black",
            fontSize: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          {children}
        </header>
      </div>
    </>
  )
}

export default TitleBar
