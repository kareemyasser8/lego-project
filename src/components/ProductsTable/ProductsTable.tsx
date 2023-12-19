import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

import useDeleteProduct from "../../Hooks/useDeleteProduct"
import useProducts from "../../Hooks/useProducts"
import { Product } from "../../Products"
import Pagination from "../Pagination/Pagination"
import Spinner from "../Spinner/Spinner"
import AlertBox from "../AlertBox/AlertBox"
import { useQueryClient } from "@tanstack/react-query"

const ProductsTable = () => {
  const queryClient = useQueryClient()

  const pageSize = 20
  const [page, setPage] = useState(1)
  const { data, error, isLoading } = useProducts(page, pageSize)
  const {
    error: deleteProductError,
    mutate: deleteProductMutate,
    isLoading: deleteProductIsLoading,
    isSuccess: deleteProductIsSuccess,
  } = useDeleteProduct()
  const [alertVisibility, setAlertVisibility] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({} as Product)

  const deleteButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const handleDelete = () => {
    deleteProductMutate(selectedProduct.id)
    if (deleteButtonRef.current) {
      deleteButtonRef.current.setAttribute("data-bs-dismiss", "modal")
    }
  }

  useEffect(() => {
    if (deleteProductIsLoading) {
      if (deleteButtonRef.current) {
        deleteButtonRef.current.textContent = "Deleting..."
      }
    }

    if (deleteProductIsSuccess) {
      if (deleteButtonRef.current && closeButtonRef.current) {
        deleteButtonRef.current.textContent = "Delete Product"
        closeButtonRef.current.click()
        queryClient.invalidateQueries(["products", page, pageSize])
      }
    }
  }, [deleteProductIsSuccess, deleteProductIsLoading])

  if (isLoading) {
    return <Spinner color="text-warning" />
  }

  if (error || deleteProductError) {
    const errorMessage = error ? error.message : deleteProductError?.message

    return (
      <>
        <div className="alert alert-danger" role="alert">
          <p>{errorMessage}</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="col-12">
        <p className="h4">Products</p>

        <Link to={`/user/products/new`}>
          <button
            className="btn btn--rounded btn--secondary btn--large mb-3"
          >
            New Product
          </button>
        </Link>

        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Number in Stock</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.products?.map((product: Product, index: number) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.numInStock}</td>
                <td
                  className="text-danger"
                  data-bs-toggle={alertVisibility ? "modal" : ""}
                  data-bs-target="#alertModal"
                  onClick={() => {
                    setAlertVisibility(true)
                    setSelectedProduct(product)
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Delete
                </td>
                <td>
                  <Link to={`/user/products/edit/${product.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination page={page} totalPages={data.totalPages} setPage={setPage} />

      <AlertBox
        closeButtonRef={closeButtonRef}
        deleteButtonRef={deleteButtonRef}
        onDelete={handleDelete}
      >
        Are you sure you want to delete {selectedProduct.title}{" "}
      </AlertBox>
    </>
  )
}

export default ProductsTable
