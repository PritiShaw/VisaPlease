import React from "react"
import { Link } from "react-router-dom";
class TipsForTech extends React.Component {
    render() {
        return(
              <div>
                  <br></br>
                  <br></br>
                  <p>Hi tech!</p>
                  <Link to="/dashboard/tips"><button class="btn btn-dark" id="bd">Go back</button></Link>
                  </div>
        )
    }
}
export default TipsForTech;