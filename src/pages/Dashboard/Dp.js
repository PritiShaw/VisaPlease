import React from "react";
import {
    dynamicPredictor,
    getUserDocument
} from "../../utils/firestore.js";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import Overall from "../Dashboard/Overall"
import Loan from "../Dashboard/Loan"
import BusinessPerformance from "../Dashboard/BusinessPerformance"
import CashFlow from "../Dashboard/CashFlow"
import Tech from "../Dashboard/Tech"
import Supplier from "../Dashboard/Supplier"
class Dp extends React.Component {
    state= {
        len: 0,
        userName: "",
        lastName: "",
    }
    
    async componentDidMount() {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        if (!userid) {
          window.location = "/auth";
        }
       let dynamic = await dynamicPredictor(userid);
       let userDetails = await getUserDocument(userid);
       console.log(dynamic);
       this.setState({
           len: (dynamic && dynamic["count"]) ? dynamic["count"] : 0,
           userName: (userDetails && userDetails["firstName"]) ? userDetails["firstName"] : "there",
           lastName: (userDetails && userDetails["lastName"]) ? userDetails["lastName"] : "",
       });
      }
render () {
     if(this.state.len==0)
    {
         return(
             <div>
                  <br /> <br />
                 <h1>Hi {this.state.userName} {this.state.lastName}!</h1> <hr />
            <h4>According to our analysis, you are doing well in every subscore!</h4> <br />
             </div>
         )
    }
    else{
        if(this.state.len >0)
        {
            return(
                <div>
                     <br /> <br />
            <h1>Hi {this.state.userName} {this.state.lastName}!</h1> <hr />
            <h4>Based on our analysis, there are {this.state.len} parameters which need your special attention.</h4> 
                <Overall />
                <Loan />
                <BusinessPerformance />
                <CashFlow />
                <Tech />
                <Supplier />
                </div>
            )
        }
       
    }
     
}
}
export default Dp;