import React from "react"
import { Link } from "react-router-dom";
class TipsForTech extends React.Component {
    render() {
        return(
              <div>
                  <br></br>
                  <h4>5 tips to make your business tech-savvy!</h4>
                  <h6>1. Responsive and Mobile Friendly Website</h6>
                  <p>It is more important than ever to make sure your website is mobile friendly.There is nothing worse than browsing a website that isn’t responsive and takes forever to load. If it takes more than a couple of seconds to load, then you have already lost potential customers. </p>
                  <h6>2. Make Social Media a Priority</h6>
                  <p>PUT YOUR BUSINESS ON SOCIAL MEDIA. In the last year, social media has become a very affordable way to advertise your business online. With little to no money, you can put your face in front of the right audience and easily beat out your competition.</p>
                  <h6>3. Use Analytics</h6>
                  <p>Any marketer will go on and on about how much they love their data, and with good reason. It not only provides more information about the consumer but it also helps improve how you market to your audience.</p>
                  <h6>4. Local Search</h6>
                  <p>What is the first thing you do when you are looking for a business? A quick Google search, right? Finding your business is easier than ever today. Make sure that your business is set up on Google. This way anybody can find your address and phone number. </p>
                  <h6>5. Invest in Email Marketting</h6>
                  <p>Email has been around for decades and is still just as impactful as ever, especially on mobile. Seventy-nine percent of people use their cell phones for reading email and the mobile email open rate has increased 180% over the last three years! If you are one of those people that have been told that email is dead, then I’m sorry to say that you were told wrong. </p>
                  <Link to="/dashboard/tips"><button class="btn btn-dark" id="bd">Go back</button></Link>
                  </div>
        )
    }
}
export default TipsForTech;