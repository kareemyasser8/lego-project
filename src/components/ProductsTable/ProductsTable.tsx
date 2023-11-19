import { Link } from "react-router-dom";
import useFetchProducts from "../../Hooks/useFetchProducts";
import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import { Product } from "../../Products";

const ProductsTable = () => {
  const pageSize = 4;
  const [page, setPage] = useState(1);
  const { data , error, isLoading } = useFetchProducts({ page, pageSize });

  if (isLoading) {
    return <Spinner color="text-warning" />;
  }

  if (error) {
    return (
      <>
        <div className="alert alert-danger" role="alert">
          <p>{error.message}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="col-12">
        <p className="h4">Products</p>

        <button
          className="filledBlueBtn mb-3"
          style={{ width: "10px", padding: "10px" }}
        >
          New Product
        </button>

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
                <td className="text-danger" style={{ cursor: "pointer" }}>
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

      <div className="d-flex flex-row-reverse">
        <ul className="pagination">
          <li className={page === 1 ? "page-item disabled" : "page-item"}>
            <span className="page-link" onClick={() => setPage(page - 1)}>
              Previous
            </span>
          </li>

          {[...Array(Math.ceil(data.totalPages)).keys()].map((pageNum) => (
            <li
              key={pageNum + 1}
              className={pageNum + 1 === page ? "page-item active" : "page-item"}
            >
              <span
                className="page-link"
                onClick={() => setPage(pageNum + 1)}
              >
                {pageNum + 1}
              </span>
            </li>
          ))}

          <li
            className={page === data.totalPages ? "page-item disabled" : "page-item"}
          >
            <span className="page-link" onClick={() => setPage(page + 1)}>
              Next
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductsTable;