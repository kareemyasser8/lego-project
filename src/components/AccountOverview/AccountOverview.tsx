import "./AccountOverview.css"
import {BiChevronRight} from 'react-icons/bi';

const AccountOverview = () => {
  return (
    <div className="col-12">
      <p className="h4">Dashboard</p>

      <div className="dashboard-container">
        <div className="dashboard-card bg-blue">
          <div className="upper-part p-3">
            <div className="card-title">Total Sales</div>
            <div className="card-amount">200.0$</div>
          </div>
          {/* <div className="lower-part p-3">
            <div className="more-details-text">More Details</div>
          </div> */}
        </div>

        <div className="dashboard-options-cards">
          <div className="dashboard-card bg-green">
            <div className="upper-part p-3">
              <div className="card-title">Products</div>
              <div className="card-amount">13</div>
            </div>
            <div className="lower-part p-3">
              <div className="more-details-text">More Details</div>
              <BiChevronRight size={'30px'}/>
            </div>
          </div>


          <div className="dashboard-card bg-red">
            <div className="upper-part p-3">
              <div className="card-title">Orders</div>
              <div className="card-amount">10</div>
            </div>
            <div className="lower-part p-3">
              <div className="more-details-text">More Details</div>
              <BiChevronRight size={'30px'}/>
            </div>
          </div>

          <div className="dashboard-card bg-yellow">
            <div className="upper-part p-3">
              <div className="card-title">Users</div>
              <div className="card-amount">5</div>
            </div>
            <div className="lower-part p-3">
              <div className="more-details-text">More Details</div>
              <BiChevronRight size={'30px'}/>
            </div>
          </div>


        </div>
      </div>

      {/* <div className="row px-3 gap-2">
        <div
          className="
          dashboard-card
          col-12 
          justify-content-center
          align-items-center
          bg-blue
          d-flex
          flex-column"
        >
         <div className="p-3">
            <div className="fw-bold">Total Amount</div>
            <div>$200.00</div>
          </div>
          <div className="col-12 border">View details</div>
        </div>

        <div
          className="col-4  justify-content-center
        align-items-center
        bg-red
        d-flex
        flex-column
        p-3 border"
        >
          <div className="fw-bold">Products</div>
          <div>12</div>
        </div>
        <div
          className="col-4  justify-content-center
        align-items-center
        bg-green
        d-flex
        flex-column
        p-3 border"
        >
          <div className="fw-bold">Products</div>
          <div>12</div>
        </div>
        <div
          className="col-4  justify-content-center
        align-items-center
        bg-yellow
        d-flex
        flex-column
        p-3 border"
        >
          <div className="fw-bold">Products</div>
          <div>12</div>
        </div>
      </div> */}
    </div>
  )
}

export default AccountOverview
