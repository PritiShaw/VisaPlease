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
} from "./questions";

import {
  storeRecoveryQuestionnaire,
  getAllOverallScore,
} from "../../../utils/firestore";

const Questions = () => {
  const cookies = new Cookies();
  const userid = cookies.get("userid");
  if (userid == undefined) alert("Unauthorized");
  const [answers, setAnswers] = useState({});
  const [groupNumber, setGroupNumber] = useState(1);
  const [noOfSuppliers, setnoOfSuppliers] = useState({});

  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "." +
    (currentdate.getMonth() + 1) +
    "." +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  const history = useHistory();

  const submitAll = () => {
    console.log(userid, answers);
    if (storeRecoveryQuestionnaire(userid, answers, datetime))
      history.push("/dashboard/");
    console.log(answers)
  };

  const questionRenderer = () => {
    console.log(groupNumber);
    console.log(noOfSuppliers);
    if (groupNumber == 1)
      return (
        <Question1
          setGroupNumber={setGroupNumber}
          presentAns={answers}
          setAnswers={setAnswers}
        />
      );
    else if (groupNumber == 2)
      return (
        <Question2
          setGroupNumber={setGroupNumber}
          presentAns={answers}
          setAnswers={setAnswers}
        />
      );
    else if (groupNumber == 3)
      return (
        <Question3
          setGroupNumber={setGroupNumber}
          presentAns={answers}
          setAnswers={setAnswers}
        />
      );
    else if (groupNumber == 4)
      return (
        <Question4
          setGroupNumber={setGroupNumber}
          presentAns={answers}
          setAnswers={setAnswers}
        />
      );
    else if (groupNumber == 4.5)
      return (
        <Question4b
          setGroupNumber={setGroupNumber}
          presentAns={answers}
          setAnswers={setAnswers}
        />
      );
    else if (groupNumber == 5)
      return (
        <Question5
          setGroupNumber={setGroupNumber}
          presentAns={answers}
          setAnswers={setAnswers}
        />
      );
    //         else if(groupNumber==6&&noOfSuppliers!==0)
    //             return <Question6 setNoOfSuppliers={setNoOfSuppliers} setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/>
    //         else if(groupNumber<=6+noOfSuppliers)
    //             return <Question7 numb={groupNumber} setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers}/>
    //         else if(groupNumber>6+noOfSuppliers)
    else if (groupNumber == 6)
      return (
        <div>
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
