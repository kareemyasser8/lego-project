import React from "react"

interface Props {
  page: number
  totalPages: number
  setPage: (page: number) => void
}

const Pagination = ({ page, totalPages, setPage }: Props) => {
  return (
    <div className="d-flex flex-row-reverse">
      <ul className="pagination">
        <li className={page === 1 ? "page-item disabled" : "page-item"}>
          <span className="page-link" onClick={() => setPage(page - 1)}>
            Previous
          </span>
        </li>

        {[...Array(totalPages).keys()].map((pageNum) => (
          <li
            key={pageNum + 1}
            className={pageNum + 1 === page ? "page-item active" : "page-item"}
          >
            <span className="page-link" onClick={() => setPage(pageNum + 1)}>
              {pageNum + 1}
            </span>
          </li>
        ))}

        <li
          className={page === totalPages ? "page-item disabled" : "page-item"}
        >
          <span className="page-link" onClick={() => setPage(page + 1)}>
            Next
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
