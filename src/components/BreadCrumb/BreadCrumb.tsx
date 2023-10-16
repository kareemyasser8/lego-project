const BreadCrumb = () => {
  return (
    <nav
      style={{ "--bs-breadcrumb-divider": "'>'" } as React.CSSProperties}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
           Account Overview
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumb
