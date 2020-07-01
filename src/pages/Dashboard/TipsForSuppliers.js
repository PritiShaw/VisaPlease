import React from "react"
import { Link } from "react-router-dom";
class TipsForSuppliers extends React.Component {
    render() {
        return(
              <div>
                  <br></br>
                  <h4>Changing your supplier relationships.</h4>
                  <p>You may not need to find new suppliers to get a new deal. You can usually get discounts, obtain improved service and receive other features you need by making a request of your current suppliers-although it may not be as simple as merely asking.</p>
                  <h4>Making a change</h4>
                  <p>Having fewer vendors is usually better than having many vendors. Reducing the number of vendors you deal with cuts the administrative costs of working with many. Closer relationships with fewer vendors allow you to work together to control costs. Getting rid of troublesome vendors can quickly increase the efficiency of your purchasing and administrative staffs. So how do you decide when to change vendors? Here are keys areas to consider:</p>
                  <h6>1. Unreliability</h6>
                  <p>When a vendor's shipments start arriving consistently late, incomplete, damaged or otherwise incorrectly, it's time to consider looking for a new one. Every company has problems from time to time, however, so check into the matter before dumping your vendor. Vendors can experience temporary difficulties as a result of implementing a new product line, shipping procedure or training program. If you stick with a vendor through a rugged interval, you may be glad you did. They might be more willing to see you through a future cash flow crunch.</p>
                  <h6>2. Lack of cost competitiveness</h6>
                  <p>Sometimes vendors fail to change with their industries. When your vendor's rivals start coming in with bids for comparable goods that are lower than your existing supplier's, you need to investigate. </p>
                  <h6>3. Extra-sale costs.</h6>
                  <p>The number at the bottom of the invoice is only the beginning of the cost of dealing with suppliers. You have to lay out money beforehand to draw up specifications, issue request for proposals, evaluate them, check references, and otherwise qualify your suppliers. You have to place the order, negotiate the terms, inspect the goods when they arrive, and deal with any shortages, damage or other errors. </p>
                  <Link to="/dashboard/score-analyser"><button class="btn btn-dark" id="bd">Go back</button></Link>
                  </div>
        )
    }
}
export default TipsForSuppliers;