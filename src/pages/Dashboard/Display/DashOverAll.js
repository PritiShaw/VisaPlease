



import React from 'react';
import DashOverAllHelp from "./DashOverAllHelp"
import "../calculator.css";
import {getAllOverallScore,getAllDates,averageCalculator} from "../../../utils/firestore"
import Cookies from "universal-cookie";
import { PureComponent } from "react";
import { firestore, auth } from "../../../firebaseConfig";
import firebase from "firebase/app";
import { Roller } from "react-awesome-spinners";

 
class DashOverAll extends React.Component {
    constructor(){
      super();
      this.state = { scoreArray:[],arrayLength:0,average:0}
    }
    
    async componentDidMount() {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        let avg=await averageCalculator(userid)
       let scores = await getAllOverallScore(userid);
       this.setState({
           average:avg,
           scoreArray:scores,
           arrayLength:scores.length
       });
      }
render () {
  if(this.state.arrayLength==0)
  {
          console.log("ram")
        return( 
          <div id="ring">
            <Roller/>
          </div>
      )
  }
  else 
  {
    console.log("shyam")
    return (
          <div>
          <DashOverAllHelp ArrayOfScores={this.state.scoreArray} Average={this.state.average}/>
          </div>
      )
  }
}
}
export default DashOverAll;


























// import React from 'react';
// import "./ScoreDisplay.scss"
// export default class OverallScoreDisplay extends React.Component {
//     render() {
//         const x=49;
//       return (
//           <div>
//                 <br/><br/><br/>
//                 <div> 

//                     <div >
//                         <br/><br/>
//                         <p id="Overall">Overall Recovery Score</p>
//                     </div>  

//                     <div id="driver" className="drivers-insured">
//                         <div className="circle-percent" data-percent={x}>
//                             <span>{x}<sup>%</sup></span>
//                             <div className="mask">
//                                 <div className="bar"></div>
//                                 <div className="fill"></div>
//                             </div>
//                         </div>
//                     </div>
//                     <hr/>
//                 </div>
//         </div>
//            );
//     }
//   }