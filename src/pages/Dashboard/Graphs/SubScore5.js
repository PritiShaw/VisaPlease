import React from 'react';

import "../calculator.css";
import {getAllOverallScore,getAllDates,getAllPartScore} from "../../../utils/firestore"
import Cookies from "universal-cookie";
import Subscore5Help from "./Subscore5Help";
import { PureComponent } from "react";
import { firestore, auth } from "../../../firebaseConfig";
import firebase from "firebase/app";

  
export default class Subscore5 extends React.Component {
    constructor(){
      super();
      this.state = { partscoreArray:[],arrayLength:0 ,dateArray:[]}
    }
    
    async componentDidMount() {
        const cookies = new Cookies();
        const userid = cookies.get("userid");
        
       let scores = await getAllPartScore(userid);
       let dates = await getAllDates(userid);
       this.setState(()=>{
         let Arr=[];
         for(var i=0;i<scores.length;i++)
         {
            Arr[i]=scores[i][4]
         }
         return{
           partscoreArray:Arr,
            dateArray:dates,
           arrayLength:scores.length}
       });
      }
render () {
  if(this.state.arrayLength==0)
  {
          console.log("ram")
        return( 
          null
      )
  }
  else
  {
    console.log("shyam")
    return (
          <div>
          <Subscore5Help ArrayOfScores={this.state.partscoreArray.slice(this.state.partscoreArray.length-20,this.state.partscoreArray.length)} DateArray={this.state.dateArray}/>
          </div>
      )
  }
}
}



















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

