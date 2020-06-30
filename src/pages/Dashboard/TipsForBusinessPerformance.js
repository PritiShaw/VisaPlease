import React from "react"
import { Link } from "react-router-dom";
class TipsForBusinessPerformance extends React.Component {
    render() {
        return(
              <div>
                  <br></br>
                  <h4>5 tips for improving business performance!</h4>
                  <h6>1. Create brand personality.</h6>
                  <p>The easiest way to do this is just to be yourself when you write a blog post, film an instructional video, or speak at an industry event. Share your vision and values in your “About Page” or write an editorial that explains why you started your business.</p>
                  <h6>2. Put your employees first.</h6>
                  <p>our employees are important, because it is their skills that keep your machine running.</p>
                  <h6>3. Get organized.</h6>
                  <p>By being organized you’re more likely to complete tasks and stay on-top of everything that needs to be done. A great place to start is by creating a daily to-do-list. </p>
                  <h6>4. Keep Your Day Job Just a Little Longer</h6>
                  <p>It is a common trap: A person gets excited by a small business idea, quits his or her day job—and then runs out of money and fails.</p>
                  <h6>5. Avoid Distractions at All Costs</h6>
                  <p>Keeping yourself organized and on-task is the real key to small business success.</p>
                  <Link to="/dashboard/tips"><button class="btn btn-dark" id="bd">Go back</button></Link>
                  </div>
        )
    }
}
export default TipsForBusinessPerformance;