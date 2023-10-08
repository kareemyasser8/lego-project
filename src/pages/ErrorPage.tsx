import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom"
import errorLegoImg from "../assets/errorLego.png"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#383a3b",
        height: "100vh",
      }}
    >
      <div
        className="
          d-flex
          flex-column
          justify-content-center
          align-items-center 
          position-relative
          p-3
          gap-2"
        style={{
          borderBottom: "5px solid #808080",
          backgroundColor: "#fff",
          height: "360px",
          width: "73%",
        }}
      >
        <img
          className="position-absolute"
          src={errorLegoImg}
          alt="error"
          style={{
            top: "-80px",
            rotate: "6deg",
          }}
        />

        <h3 className="text-dark fw-bold">ERROR</h3>

        <p className="text-dark">
          {isRouteErrorResponse(error)
            ? "Oops. We cannot seem to find that page."
            : "An unexpected error occured."}
        </p>

        <Link to="/">
          <button className="filledBlueBtn">Go back</button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
