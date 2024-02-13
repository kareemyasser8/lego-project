import errorLegoImg from '../assets/errorLego.png'
import { Link } from 'react-router-dom'

const UnAuthorizedPage = () => {
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
        Sorry you are not authorized for this page.
      </p>

      <Link to="/">
        <button className="butn btn--rounded btn--secondary btn--large">Go back</button>
      </Link>
    </div>
    </div>
  )
}

export default UnAuthorizedPage