// import CanvasJSReact from "./../../assets/canvasjs.react";
// import React from "react";
// import { Container } from "react-bootstrap";
// import {
//   getAllOverallScore,
//   getAllPartScore,
//   getAnswersLatestAttempt,
//   getUserDocument
// } from "../../utils/firestore.js";
// import Cookies from "universal-cookie";

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class Track extends React.Component {
//   state = {
//     overall_scores: null,
//     part_scores: null,
//     answers: null,
//     userName: "there"
//   };

//   async componentDidMount() {
//     const cookies = new Cookies();
//     const userid = cookies.get("userid");
//     if(! userid){
//       window.location = "/auth";
//     }
//     let userDetails = await getUserDocument(userid)
//     this.setState({
//       userName : (userDetails && userDetails["firstName"])?userDetails["firstName"]:"there",
//       overall_scores: getAllOverallScore(userid),
//       part_scores: getAllPartScore(userid),
//       answers: getAnswersLatestAttempt(userid),
//     });
//     console.log(this.state.overall_scores);
//   }

//   render() {
//     const options = {
//       animationEnabled: true,
//       height: 300,
//       width: 500,
//       title: {
//         text: "Track your score",
//       },
//       axisX: {
//         valueFormatString: "MMM",
//       },
//       axisY: {
//         title: "Recovery Score (%)",
//         postfix: "%",
//         includeZero: false,
//       },
//       data: [
//         {
//           yValueFormatString: "##%",
//           xValueFormatString: "MMMM",
//           type: "spline",
//           dataPoints: [
//             { x: new Date(2020, 0), y: 0 },
//             { x: new Date(2020, 1), y: 10 },
//             { x: new Date(2020, 2), y: 20 },
            
//           ],
//         },
//       ],
//     };
//     return (
//       <React.Fragment>
//         <Container maxWidth="sm">
//           <br></br>
//           <br></br>
//           <br></br>
//           <h1>Hi {this.state.userName} !</h1>
//           <CanvasJSChart
//             options={options}
//             /* onRef = {ref => this.chart = ref} */
//           />
//         </Container>
//       </React.Fragment>
//     );
//   }
// }
// export default Track;

import React from 'react';
import OverallScores from "./Graphs/OverallScores";
import Subscore1 from "./Graphs/SubScore1";
import Subscore2 from "./Graphs/SubScore2";
import Subscore3 from "./Graphs/SubScore3";
import Subscore4 from "./Graphs/SubScore4";
import Subscore5 from "./Graphs/SubScore5";
import "./calculator.css"
export default class Track extends React.Component{
  render(){
    return(<div>
      <br/><br/><br/><br/><br/>
      <p id="main">Track Your Recovery Score</p>
      <br/><br/>
      <OverallScores/>
      <br/><br/>
      <Subscore1/>
      <br/><br/>
      <Subscore2/>
      <br/><br/>
      <Subscore3/>
      <br/><br/>
      <Subscore4/>
      <br/><br/>
      <Subscore5/>
      <br/><br/>
      
            </div>)
  }
}




const CalculatedOn=['Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28','Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28','Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28','Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28'];























