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
          userName: (userDetails && userDetails["firstName"]) ? userDetails["firstName"] : "there",
          lastName: (userDetails && userDetails["lastName"]) ? userDetails["lastName"] : "there",
          email: (userDetails && userDetails["email"]) ? userDetails["email"] : "there",
          countryCode: (userDetails && userDetails["countryCode"]) ? userDetails["countryCode"] : "there",
          companyName: (userDetails && userDetails["companyName"]) ? userDetails["companyName"] : "there",
          categoryCode: (userDetails && userDetails["categoryCode"]) ? userDetails["categoryCode"] : "there",
          visaID: (userDetails && userDetails["visaStoreId"]) ? userDetails["visaStoreId"] : "there",
        });
      }
    render()
    { 
        return(
                <div>
                <br/><br/><br/>
                <table class="table table-striped table-secondary">
  
  <thead>
    <tr>
      <th scope="row"><h4>Name</h4></th>
      <td><h4>{this.state.userName} {this.state.lastName}</h4></td>
    </tr>
    <tr>
      <th scope="row"><h4>Email</h4></th>
      <td><h4>{this.state.email}</h4></td>
    </tr>
    <tr>
      <th scope="row"><h4>Country Code</h4></th>
      <td><h4>{this.state.countryCode}</h4></td>
    </tr>
    <tr>
      <th scope="row"><h4>Company Name</h4></th>
      <td><h4>{this.state.companyName}</h4></td>
    </tr>
    <tr>
      <th scope="row"><h4>Merchant Category Code</h4></th>
      <td><h4>{this.state.categoryCode}</h4></td>
    </tr>
    <tr>
      <th scope="row"><h4>Visa Store ID</h4></th>
      <td><h4>{this.state.visaID}</h4></td>
    </tr>
  </thead>
</table>
                </div>
        )
    }
  }

  export default Profile

