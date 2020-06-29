import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import "../calculator.css";
import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question4b,
  Question5,
  Question6
} from "./questions";
import { ProgressBar } from "react-bootstrap";
import { storeRecoveryQuestionnaire } from "../../../utils/firestore";
import { calculateRecoveryScore } from "./score_calculator";

const Questions = () => {
  const cookies = new Cookies();
  const userid = cookies.get("userid");


  const history = useHistory();
  if (userid == undefined) {
    history.push("/auth/");
    window.location.reload();
  }
  const [answers, setAnswers] = useState({});
  const [groupNumber, setGroupNumber] = useState(1);


  const submitAll = async () => {
    var answers_with_scores = await calculateRecoveryScore(userid, answers);
    if (await storeRecoveryQuestionnaire(userid, answers_with_scores)) {
      history.push("/dashboard/ScoreDisplay");
      window.location.reload();
    }
  };

  const questionRenderer = () => {

    if (groupNumber === 1)
      return <Question1 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />

    else if (groupNumber === 2)
      return <Question2 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />

    else if (groupNumber === 3)
      return <Question3 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />

    else if (groupNumber === 4)
      return <Question4 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />

    else if (groupNumber === 4.5)
      return <Question4b setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />

    else if (groupNumber === 5)
      return <Question5 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />

    else if (groupNumber === 6)
      return <Question6 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />

    else if (groupNumber === 7)
      return (
        <div>
          <center>
            <h3>Are you sure?</h3>
            <button
              className="btn btn-success w-25"
              onClick={() => submitAll()}
            >
              Yes
            </button>
          </center>
        </div>
      );
    else return <h3>Internal Error</h3>;
  };
  return (
    <div>
      {(groupNumber < 8) && <ProgressBar animated now={(groupNumber / 7) * 100} label={`Step ${groupNumber} of 7`} />}
      <hr/>
      {questionRenderer()}
    </div>
  )
};

export default Questions;
