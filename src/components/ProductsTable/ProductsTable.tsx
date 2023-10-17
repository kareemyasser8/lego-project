import React from "react"
import { Link } from "react-router-dom"

const ProductsTable = () => {
  return (
    <>
      <div className="col-12">
        <p className="h4">Products</p>

        <button className="filledBlueBtn mb-3" style={{width:'10px', padding: '10px'}}>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>3</td>
              <td><Link to={'/user/products/1'}>Edit</Link></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>2</td>
              <td><Link to={'/user/products/1'}>Edit</Link></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>1</td>
              <td><Link to={'/user/products/1'}>Edit</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="d-flex flex-row-reverse">
        
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link z-0">2</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
     
      </div>
    </>
  )
}

export default ProductsTable
