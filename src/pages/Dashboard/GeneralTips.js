import React from "react"
import { Link } from "react-router-dom";
class GeneralTips extends React.Component {
    render() {
        return(
              <div>
                  <br></br>
                  <br></br>
                  <h4>Here are seven business tips from several successful small business owners that are worth paying attention to:</h4>
                  <h6>1. Build a Support Network</h6>
                  <p>As a busy business owner, It’s tough to find time to network, but getting better at networking and making contact can pay dividends in the future.</p>
                  <h6>2. Be Very Specific With Your Goals</h6>
                  <p>Building a performance-driven culture all starts with being very specific about goals– for yourself and your employees. When an employee is happy, they will be able to give the best possible performance and customer service.</p>
                  <h6>3. Delegate Whenever Possible</h6>
                  <p>Focus on what you do best, and delegate the rest.</p>
                  <h6>4. Keep Your Overhead Low</h6>
                  <p>Cutting down overhead really gives you that peace of mind. If your overhead is low, you can make pricing decisions that you otherwise wouldn’t be able to make.</p>
                  <h6>5. Find Your Best Niche—and Stick With It</h6>
                  <p>Finding your niche and continually innovating around that niche is a path to success.</p>
                  <h6>6. Keep Your Day Job Just a Little Longer</h6>
                  <p>It is a common trap: A person gets excited by a small business idea, quits his or her day job—and then runs out of money and fails.</p>
                  <h6>7. Avoid Distractions at All Costs</h6>
                  <p>Keeping yourself organized and on-task is the real key to small business success.</p>
                  <Link to="/dashboard/tips"><button class="btn btn-dark" id="bd">Go back</button></Link>
                  </div>
        )
    }
}
export default GeneralTips;