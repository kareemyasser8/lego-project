import React from "react"
import Spinner from "../Spinner/Spinner"

const Loading = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "70vh", width: "100%" }}
    >
      <Spinner color="text-warning" />
    </div>
  )
}

export default Loading
