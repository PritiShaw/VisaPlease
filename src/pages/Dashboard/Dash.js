import React from "react"
import Cookies from "universal-cookie";
import {
  getUserDocument
} from "../../utils/firestore.js";

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
                <h4>Hi {this.state.userName} {this.state.lastName} ! </h4>
                <h6>some more content about our app</h6>
               </div>
        )
    }
  }

  export default Dash

