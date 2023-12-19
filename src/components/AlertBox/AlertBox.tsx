import { ReactNode, RefObject, useEffect } from "react"

interface Props {
  children: ReactNode
  onDelete: () => void
  deleteButtonRef: RefObject<HTMLButtonElement>
  closeButtonRef: RefObject<HTMLButtonElement>
}

const AlertBox = ({
  children,
  onDelete,
  deleteButtonRef,
  closeButtonRef,
}: Props) => {
  return (
    <>
      <div
        className="modal fade"
        id="alertModal"
        tabIndex={-1}
        aria-labelledby="alertModalLabel"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-danger">
              <h5 className="modal-title text-white ">
                DELETE WARNING!
              </h5>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeButtonRef}
              >
                Close
              </button>
              <button
                onClick={onDelete}
                type="button"
                className="btn btn-danger"
                ref={deleteButtonRef}
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlertBox
