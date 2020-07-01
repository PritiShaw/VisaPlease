import React from "react";
import {
    dynamicPredictor,
} from "../../utils/firestore.js";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
class Loan extends React.Component {
    state= {
        one: ""
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
           one: (dynamic && dynamic["one"]) ? "Criteria for fulfillment of Loan" : "",
          
       });
      }
render () {
        if(this.state.one)
        {
            return(
                <div> <br />
                    <h4>{this.state.one}</h4>
                    <div class="card text-dark mb-3"id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips for improving fulfillment of loan</h5>
                     </div>
                     <Link to="/dashboard/tips-for-loan"><button class="btn btn-dark" id="bb">Click to see</button></Link> 
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

export default Loan;