import React from "react";
import {
    dynamicPredictor,
} from "../../utils/firestore.js";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
class Overall extends React.Component {
    state= {
        overall: ""
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
           overall: (dynamic && dynamic["overall"]) ? "Overall Score" : "",
          
       });
      }
render () {
        if(this.state.overall)
        {
            return(
                <div>
                    <br />
                    <h4>Overall Score</h4>
                    <div class="card text-dark mb-3" id="tips">
                     <div class="card-body">
                      <h5 class="card-title">Tips to increase overall score</h5> 
                     </div>
                     <Link to="/dashboard/general-tips"><button class="btn btn-dark" id="bb">Click to see</button></Link>
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

export default Overall;