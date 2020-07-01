import React from "react"
import { Link } from "react-router-dom";
class TipsForCashFlow extends React.Component {
    render() {
        return(
              <div>
                  <br></br>
                  <h4>5 Methods to Increase Cash Flow for Small Businesses!</h4>
                  <p>If you’re looking to improve your small business’ cash flow, it may be time to mull over some of the strategies outlined below.</p>
                   <h6>1. Increase the Prices for Goods or Services</h6>
                   <p> The goal is to determine how much your customers are willing to pay before sales begin to slow. Remember, there isn’t a good way to determine this without taking a chance.</p>
                   <h6>2. Immediate and Automated Sending of Invoices</h6>
                   <p>This one is simple. By sending invoices to anyone who owes you money for products or services immediately, you reduce the delay that commonly occurs in invoicing.</p>
                   <h6>3. Use Electronic Payment Systems to Improve Cash Flow</h6>
                   <p>If you make payments to vendors electronically, your business can wait until the morning of a bill’s due date to make a payment. This delay in payment (without being late on a payment) will work to improve cash flow greatly.  </p>
                   <h6>4. Take the Time to Improve Your Inventory</h6>
                   <p>Instead of purchasing more items that aren’t going to sell, it may be best to make markdowns. We know it’s difficult to cut down on inventory options. However, it’ll be better for your bottom line to try and sell what’s left of this inventory, and then focus on other inventory options in the future.</p>
                   <h6>5. Conduct Credit Checks for Customers</h6>
                   <p>There will come a time when a customer isn’t going to want to pay you in cash. If they are one-time customers and are looking to pay for a product or service with a credit card, that’s pretty standard. However, if they’re paying a large amount or for a recurring product or service, be sure to conduct credit checks beforehand. If your client has very poor credit, it’s safe to assume that you aren’t going to be getting your payments in a timely fashion.</p>
                  <Link to="/dashboard/score-analyser"><button class="btn btn-dark" id="bd">Go back</button></Link>
                  </div>
        )
    }
}
export default TipsForCashFlow;