import React from "react"
import Cookies from "universal-cookie";
import {
  getUserDocument
} from "../../utils/firestore.js";
import DashOverAll from "./Display/DashOverAll"
class Dash extends React.Component{
    state= {
        userName: "",
        lastName: "",
    };
    async componentDidMount() {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        if (!userid) {
          window.location = "/auth";
        }
        let userDetails = await getUserDocument(userid)
        this.setState({
          userName: (userDetails && userDetails["firstName"]) ? userDetails["firstName"] : "there",
          lastName: (userDetails && userDetails["lastName"]) ? userDetails["lastName"] : "",
        });
      }
    render()
    { 
        return(
                <div>
                <br/><br/><br/>
                <h1>Welcome {this.state.userName} {this.state.lastName} ! </h1>
                <DashOverAll/>
                <hr/>
                
               </div>
        )
    }
  }

  export default Dash

