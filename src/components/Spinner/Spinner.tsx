interface Props{
    color: 'text-warning' | 'text-primary' | 'text-success'
}

const Spinner = ({color}: Props) => {
  return (
    <div className="col-12 d-flex align-items-center justify-content-center h-100">
      <div
        style={{ width: "5rem", height: "5rem", borderWidth: "0.5rem" }}
        className={`spinner-border spinner-border-xl ${color}`}
        role="status"
      ></div>
    </div>
  )
}

export default Spinner
