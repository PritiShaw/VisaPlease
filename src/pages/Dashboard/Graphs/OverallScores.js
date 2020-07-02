import React from 'react';

import "../calculator.css";
import {getAllOverallScore,getAllDates} from "../../../utils/firestore"
import Cookies from "universal-cookie";
import OverallScoresHelp from "./OverAllScoreHelp";
import { PureComponent } from "react";
import { firestore, auth } from "../../../firebaseConfig";
import firebase from "firebase/app";
import { Roller } from "react-awesome-spinners";

 
class OverallScore extends React.Component {
    constructor(){
      super();
      this.state = { scoreArray:[],arrayLength:0 ,dateArray:[]}
    }
    
    async componentDidMount() {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        
       let scores = await getAllOverallScore(userid);
       let dates = await getAllDates(userid);
       this.setState({
           scoreArray:scores,
            dateArray:dates,
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
          <OverallScoresHelp ArrayOfScores={this.state.scoreArray.slice(this.state.scoreArray.length-20,this.state.scoreArray.length)} DateArray={this.state.dateArray}/>
          </div>
      )
  }
}
}
export default OverallScore;





















// const Track=()=> {
//   const [attemptDoc, setAttemptDoc] = React.useState([]);

//   React.useEffect(() => {
//     const cookie = new Cookies();
//     const userid = cookie.get("userid");
//     const fetchData = async () => {
//       const db = firebase.firestore();
//       const data = await db
//         .collection("questionnaire")
//         .doc("responses")
//         .collection(userid)
//         .get();
//       setAttemptDoc(data.docs.map((doc) => doc.data()));
//     };
//     fetchData();
//   }, []);

//   return (
//     <ul>
//       {attemptDoc.map((attempt) => (
//         <li> {attempt.Overall_Recovery_Score}</li>
//       ))}
//     </ul>
//   );
// }

// export default Track

