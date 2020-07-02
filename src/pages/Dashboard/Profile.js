import React from "react"
import { Container } from "react-bootstrap";
import {
  getUserDocument
} from "../../utils/firestore.js";
import Cookies from "universal-cookie";
class Profile extends React.Component{
    state= {
        userName: "",
        lastName: "",
        email: "",
        countryCode: "",
        companyName: "",
        categoryCode: "",
        visaID: ""
    };
    async componentDidMount() {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        if (!userid) {
          window.location = "/auth";
        }
        let userDetails = await getUserDocument(userid)
        this.setState({
          userName: (userDetails && userDetails["firstName"]) ? userDetails["firstName"] : "...",
          lastName: (userDetails && userDetails["lastName"]) ? userDetails["lastName"] : "...",
          email: (userDetails && userDetails["email"]) ? userDetails["email"] : "...",
          countryCode: (userDetails && userDetails["countryCode"]) ? userDetails["countryCode"] : "...",
          companyName: (userDetails && userDetails["companyName"]) ? userDetails["companyName"] : "...",
          categoryCode: (userDetails && userDetails["categoryCode"]) ? userDetails["categoryCode"] : "...",
          visaID: (userDetails && userDetails["visaStoreId"]) ? userDetails["visaStoreId"] : "...",
        });
      }
    render()
    { 
        return(
                <div>
                <br/><br/><br/>
                <table class="table table-striped bg-light">
  
  <thead>
    <tr>
      <th scope="row">Name</th>
      <td>{this.state.userName} {this.state.lastName}</td>
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td>{this.state.email}</td>
    </tr>
    <tr>
      <th scope="row">Country Code</th>
      <td>{this.state.countryCode}</td>
    </tr>
    <tr>
      <th scope="row">Company Name</th>
      <td>{this.state.companyName}</td>
    </tr>
    <tr>
      <th scope="row">Merchant Category Code</th>
      <td>{this.state.categoryCode}</td>
    </tr>
    <tr>
      <th scope="row">Visa Store ID</th>
      <td>{this.state.visaID}</td>
    </tr>
  </thead>
</table>
                </div>
        )
    }
  }

  export default Profile

