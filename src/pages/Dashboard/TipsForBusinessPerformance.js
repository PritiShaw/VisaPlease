import React from "react"
import { Link } from "react-router-dom";
class TipsForBusinessPerformance extends React.Component {
    render() {
        return(
              <div>
                  <br></br>
                  <br></br>
                  <p>Hi Business Performance!</p>
                  <Link to="/dashboard/tips"><button class="btn btn-dark" id="bd">Go back</button></Link>
                  </div>
        )
    }
}
export default TipsForBusinessPerformance;