import CanvasJSReact from "./../../assets/canvasjs.react";
import React from "react";
import { Container } from "react-bootstrap";
import {
  getAllOverallScore,
  getAllPartScore,
  getAnswersLatestAttempt,
  getUserDocument
} from "../../utils/firestore.js";
import Cookies from "universal-cookie";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Track extends React.Component {
  state = {
    overall_scores: null,
    part_scores: null,
    answers: null,
    userName: "there"
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
      overall_scores: getAllOverallScore(userid),
      part_scores: getAllPartScore(userid),
      answers: getAnswersLatestAttempt(userid),
    });
    console.log(this.state.overall_scores);
  }

  render() {
    const options = {
      animationEnabled: true,
      height: 600,
      width: 1000,
      title: {
        text: "Track your score",
      },
      axisX: {
        valueFormatString: "MMM",
      },
      axisY: {
        title: "Recovery Score (%)",
        postfix: "%",
        includeZero: false,
      },
      data: [
        {
          yValueFormatString: "##%",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: [
            { x: new Date(2020, 0), y: 0 },
            { x: new Date(2020, 1), y: 10 },
            { x: new Date(2020, 2), y: 20 },
            { x: new Date(2020, 3), y: 30 },
            { x: new Date(2020, 4), y: 40 },
            { x: new Date(2020, 5), y: 50 },
            { x: new Date(2020, 6), y: 40 },
            { x: new Date(2020, 7), y: 30 },
            { x: new Date(2020, 8), y: 20 },
          ],
        },
      ],
    };
    return (
      <>
        <React.Fragment>
          <Container maxWidth="sm">
            <br></br>
            <br></br>
            <br></br>
            <h1>Hi {this.state.userName} !</h1>
            <CanvasJSChart
              options={options}
            /* onRef = {ref => this.chart = ref} */
            />
          </Container>
        </React.Fragment>
      </>
    );
  }
}
export default Track;
