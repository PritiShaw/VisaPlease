














import React from 'react';
import Score1DisplayHelp from "./Score1DisplayHelp"
import "../calculator.css";
import {getAllOverallScore,getAllDates,getAllPartScore} from "../../../utils/firestore"
import Cookies from "universal-cookie";
import { PureComponent } from "react";
import { firestore, auth } from "../../../firebaseConfig";
import firebase from "firebase/app";
import { Roller } from "react-awesome-spinners";

 
class Subscore1Display extends React.Component {
    constructor(){
      super();
      this.state = { partscoreArray:[],arrayLength:0}
    }
    
    async componentDidMount() {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        
       let scores =await getAllPartScore(userid);
       console.log(scores);
       this.setState({
           partscoreArray:scores,
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
          <Score1DisplayHelp ArrayOfScores={this.state.partscoreArray}/>
          </div>
      )
  }
}
}
export default Subscore1Display;


































// import React from 'react';
// import "./ScoreDisplay.scss"
// export default class Subscore2Display extends React.Component {
//     render() {
//         const x=45;
//         return (
//             <div>
                  
            
//                       <table>
//                       <tr >
//                       <td id="td1">
//                       <span >
//                       <p id="sub"> Technology Oriented</p>
//                           <div className="circle-percent" data-percent={x}>
//                               <span>{x}<sup>%</sup></span>
//                               <div className="mask">
//                                   <div className="bar"></div>
//                                   <div className="fill"></div>
//                               </div>
//                           </div>
//                       </span>
//                       </td>
//                       <td id="td2">
//                       <span >
//                       <p id="sub">Evaluation of suppliers</p>
//                       <div className="circle-percent" data-percent={x}>
//                           <span>{x}<sup>%</sup></span>
//                           <div className="mask">
//                               <div className="bar"></div>
//                               <div className="fill"></div>
//                           </div>
//                       </div>
//                       </span>
//                       </td>
//                       </tr>
  
  
  
  
//                       </table>
  
                      
  
                      
  
  
//           </div>
//              );
//       }
//     }