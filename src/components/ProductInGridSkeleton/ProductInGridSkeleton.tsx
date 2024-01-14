import "./ProductInGridSkeleton.css"

const ProductInGridSkeleton = () => {
  return (
    <div className="ruled-grid__card">
      <div className="imageBox-skeleton loading"></div>
      <div className="col-12">
        <div className="mt-2 px-2">
          <div className="w-100 loading" style={{ height: "30px" }}></div>
        </div>

        <div className="mt-2 px-2">
          <div className="w-50 loading" style={{ height: "30px" }}></div>
        </div>

        <button
          type="button"
          className="butn  loading btn--rounded mt-3 ms-2 mb-3"
          style={{ width: "120px", padding: "18px" }}
        ></button>
      </div>
    </div>
  )
}

export default ProductInGridSkeleton
