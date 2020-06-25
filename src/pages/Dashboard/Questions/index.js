import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';

import { Question1, Question2, Question3, Question4, Question4b, Question5 } from './questions';
import { storeRecoveryQuestionnaire } from "../../../utils/firestore";

const Questions = () => {
    const cookies = new Cookies();
    const userid = cookies.get('userid')
    if(userid==undefined)
        alert("Unauthorized")
    const [answers, setAnswers] = useState({});
    const [groupNumber, setGroupNumber] = useState(1);
    const [noOfSuppliers, setnoOfSuppliers] = useState({});
    
    const history = useHistory();
    const submitAll = () => {
        console.log(userid,answers)
        if (storeRecoveryQuestionnaire(userid,answers))
            history.push('/dashboard/')
    }

    const questionRenderer = () => {
        if (groupNumber == 1)
            return <Question1 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />
        else if (groupNumber == 2)
            return <Question2 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />
        else if (groupNumber == 3)
            return <Question3 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />
        else if (groupNumber == 4)
            return <Question4 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />
        else if (groupNumber == 4.5)
            return <Question4b setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />
        else if (groupNumber == 5)
            return <Question5 setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />
        // else if (groupNumber == 6)
        //     return <Question6 setnoOfSuppliers={setnoOfSuppliers} setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />
        // else if (groupNumber <= 6 + { noOfSuppliers })
        //     return <Question7 numb={groupNumber} supplier={noOfSuppliers} setGroupNumber={setGroupNumber} presentAns={answers} setAnswers={setAnswers} />
        else if (groupNumber == 6)
            return <div><h3>Are you sure?</h3><center><button className="btn btn-primary btn-lg" onClick={() => submitAll()}>Yes</button></center></div>
        else
            return <h3>Internal Error</h3>
    }
    return (
        <div>
            {questionRenderer()}
        </div>
    );
};

export default Questions;
