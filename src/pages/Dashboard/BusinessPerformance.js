import React from "react";
import {
    dynamicPredictor,
} from "../../utils/firestore.js";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
class BusinessPerformance extends React.Component {
    state= {
        two: ""
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
        two : (dynamic && dynamic["two"]) ? "Business Performance" : "",
          
       });
      }
render () {
        if(this.state.two)
        {
            return(
                <div> <br />
                    <h4>Business Performance</h4>
                    <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips for improving business performance</h5>
                     </div>
                     <Link to="/dashboard/tips-for-business-performance"><button class="btn btn-dark" id="bb">Click to see</button></Link>
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

export default BusinessPerformance;