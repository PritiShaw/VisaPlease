import React from "react";
import {
    dynamicPredictor,
} from "../../utils/firestore.js";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
class Tech extends React.Component {
    state= {
        four: ""
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
        four : (dynamic && dynamic["four"]) ? "Technology Oriented" : "",
          
       });
      }
render () {
        if(this.state.four)
        {
            return(
                <div> <br />
                    <h4>{this.state.one}</h4>
                    <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips to get technology oriented</h5>
                     </div>
                     <Link to="/dashboard/tips-for-tech"><button class="btn btn-dark" id="bb">Click to see</button></Link>
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

export default Tech;