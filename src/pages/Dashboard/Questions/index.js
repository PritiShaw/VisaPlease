import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question4b,
  Question5,
  AddSupplier
} from "./questions";
import {ProgressBar} from "react-bootstrap";
import { storeRecoveryQuestionnaire } from "../../../utils/firestore";

const Questions = () => {
  const cookies = new Cookies();
  const userid = cookies.get("userid");
  if (userid == undefined) alert("Unauthorized");
  const [answers, setAnswers] = useState({});
  const [groupNumber, setGroupNumber] = useState(1);
  const [noOfSuppliers, setnoOfSuppliers] = useState({});

  const history = useHistory();
  const submitAll = () => {
    console.log(userid, answers);
    if (storeRecoveryQuestionnaire(userid, answers))
      history.push("/dashboard/");
  };

  const questionRenderer = () => {
    
    if(groupNumber==1)
    {
        const now=0;
        return (<div><br/><br/><p>Step 1 of 7:</p><ProgressBar now={now} label={`${now}%`} /><br/><br/><br/>
                 <Question1 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/>
                 
                 </div>)
    }
    
    else if(groupNumber==2)
        {
            const now=20;
            return (<div><br/><br/><p>Step 2 of 7:</p>
                <ProgressBar now={now} label={`${now}%`} /><br/><br/><br/>
                    <Question2 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/>    
                     
                     </div>)
        }
        else if(groupNumber==3)
        {
            const now=40;
            return (<div>
                <br/><br/><p>Step 3 of 7:</p>
                <ProgressBar now={now} label={`${now}%`} /><br/><br/><br/>
                <Question3 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/>    
                     
                     </div>)
        }
        else if(groupNumber==4)
        {
            const now=60;
            return (<div>
                <br/><br/><p>Step 4 of 7:</p>
                <ProgressBar now={now} label={`${now}%`} /><br/><br/><br/>
                <Question4 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/>    
                     
                     </div>)
        }
        else if(groupNumber==4.5)
        {
            const now=70;
            return (<div>
                <br/><br/><p>Step 5 of 7:</p>
                <ProgressBar now={now} label={`${now}%`} /><br/><br/><br/>
                <Question4b setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/>    
                     
                     </div>)
        }
        else if(groupNumber==5)
        {
            const now=80;
            return (<div>
                <br/><br/><p>Step 6 of 7:</p>
                <ProgressBar now={now} label={`${now}%`} /><br/><br/><br/>
                <Question5 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/> 
                     
                     </div>)
        }
    //         else if(groupNumber==6&&noOfSuppliers!==0)
    //             return <Question6 setNoOfSuppliers={setNoOfSuppliers} setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/>
    //         else if(groupNumber<=6+noOfSuppliers)
    //             return <Question7 numb={groupNumber} setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/>
    //         else if(groupNumber>6+noOfSuppliers)
    
    else if(groupNumber==6)
        {
            const now=90;
            return (<div>
                <br/><br/><p>Step 7 of 7:</p>
                <ProgressBar now={now} label={`${now}%`} /><br/><br/><br/>
                <AddSupplier setGroupNumber={setGroupNumber} /> 
                     
                     </div>)
        }
    
    
    else if (groupNumber == 7)
      return (
        <div><ProgressBar 
            now={100} label={100} />
            <br/><br/><br/>
          <h3>Are you sure?</h3>
          <center>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => submitAll()}
            >
              Yes
            </button>
          </center>
        </div>
      );
    else return <h3>Internal Error</h3>;
  };
  return <div>{questionRenderer()}</div>;
};

export default Questions;
