import React from "react";
import {
    dynamicPredictor,
} from "../../utils/firestore.js";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
class CashFlow extends React.Component {
    state= {
        three: ""
    }
    
    async componentDidMount() {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        if (!userid) {
          window.location = "/auth";
        }
       let dynamic = await dynamicPredictor(userid);
       console.log(dynamic);
       this.setState({
           one: (dynamic && dynamic["three"]) ? "Improve your cash flow" : "",
          
       });
      }
render () {
        if(this.state.three)
        {
            return(
                <div> <br />
                    <h4>{this.state.three}</h4>
                    <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips for improving cash flow</h5>
                     </div>
                     <Link to="/dashboard/tips-for-cash-flow"><button class="btn btn-dark" id="bb">Click to see</button></Link>
                  </div>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

     
}

export default CashFlow;