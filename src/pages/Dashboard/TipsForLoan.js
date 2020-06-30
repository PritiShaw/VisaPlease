import React from "react"
import { Link } from "react-router-dom";
class TipsForLoan extends React.Component {
    render() {
        return(
              <div>
                  <br></br>
                  <h4>5 key tips on how to prepare for a SBA loan!</h4>
                  <p> If you are not aware of how to make sure that your loan is approved and guaranteed by SBA, here are five key tips.</p>
                  <h6>1. Research Potential Lending Institutions</h6>
                  <p>Many experts advise you to visit different lenders before choosing the most appropriate one. You may want to consider an SBA Preferred Lender as they can process SBA loans much faster. Compare and contrast the interest rates as well as the terms and conditions of various funding programs.</p>
                  <h6>2. Prepare Your Loan Application</h6>
                  <p>To start with, you must ensure that you state the amount of money you need and what you intend to use the money for. If you need a loan for working capital, always clarify that in your application. Be short and precise for easy and faster loan approval.There are some issues that must also be incorporated in your application like your personal credit score. If you have a good FICO score, the lender will actually process your loan faster than you even expected.</p>
                   <h6>3. Meet the Essential Basics of a Business Loan</h6>
                   <p>Different banks and lenders could be having different demands when it comes to SBA-backed loans. As stated earlier, it is good to choose a SBA Preferred lender since they can expedite loans much faster. This will end up simplifying the loan application process for you.</p>
                   <h6>4. Gather All Your Documentation</h6>
                   <p>For you to get a loan backed by the SBA, you must ensure that you have each and every document pertaining to your business. You must present the annual financial documents for the past several years. This is to assess the position of your investment and whether it has the ability to repay the loan you have applied for.</p>
                   <h6>5. Thorough Interview Preparation</h6>
                   <p>Most of the time, lenders could call you for an oral interview before giving you a business loan. It is good to present yourself in a very professional manner. Be in a position to back up the information contained in your loan request form with tangible facts. This will obviously make the lender grant you the loan without fearing default in your repayments.</p>
                  <Link to="/dashboard/tips"><button class="btn btn-dark" id="bd">Go back</button></Link>
                  </div>
        )
    }
}
export default TipsForLoan;