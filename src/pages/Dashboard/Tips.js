import React from "react"
import { Link } from "react-router-dom";
class Tips extends React.Component {
    render() {
        return(
              <div>
                  <br></br>
                  <br></br>
                  <div class="container">
  <div class="row">
    <div class="col-sm">
      <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips for small businesses</h5> 
                     </div>
                     <Link to="/dashboard/tips/general-tips"><button class="btn btn-dark" id="bb">Click to see</button></Link>
                  </div>
    </div>
    <div class="col-sm">
    <div class="card text-dark mb-3"id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips for improving fulfillment of loan</h5>
                     </div>
                     <Link to="/dashboard/tips/tips-for-loan"><button class="btn btn-dark" id="bb">Click to see</button></Link> 
                  </div>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
      <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips for improving business performance</h5>
                     </div>
                     <Link to="/dashboard/tips/tips-for-business-performance"><button class="btn btn-dark" id="bb">Click to see</button></Link>
                  </div>
    </div>
    <div class="col-sm">
      <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips for improving cash flow</h5>
                     </div>
                     <Link to="/dashboard/tips/tips-for-cash-flow"><button class="btn btn-dark" id="bb">Click to see</button></Link>
                  </div>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
      <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips to become tech-savvy</h5>
                     </div>
                     <Link to="/dashboard/tips/tips-for-tech"><button class="btn btn-dark" id="bb">Click to see</button></Link>
                  </div>
    </div>
    <div class="col-sm">
      <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips for improving supplier management</h5>
                     </div>
                     <Link to="/dashboard/tips/tips-for-suppliers"><button class="btn btn-dark" id="bb">Click to see</button></Link>
                  </div>
    </div>
  </div>
</div>
                  
                 
              </div>
        )
    }
}
export default Tips