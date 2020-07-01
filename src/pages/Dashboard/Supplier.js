import React from "react";
import {
    dynamicPredictor,
} from "../../utils/firestore.js";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
class Supplier extends React.Component {
    state= {
        five: ""
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
        five : (dynamic && dynamic["five"]) ? "Supplier Management" : "",
          
       });
      }
render () {
        if(this.state.five)
        {
            return(
                <div> <br />
                    <h4>{this.state.five}</h4>
                    <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips for improving supplier management</h5>
                     </div>
                     <Link to="/dashboard/tips-for-suppliers"><button class="btn btn-dark" id="bb">Click to see</button></Link>
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

export default Supplier;