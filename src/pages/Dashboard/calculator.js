import React from "react";
import "./calculator.css";
import "../../App.css";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import QuestionHandler from "./Questions"

import "./calculator.css";
const Calculator = (props) => {
    return (
        <div>
        <br/><br/>
            <div className="col-12 py-5">
                <h2 id="ques">Recovery Score Calculator</h2>
                <h4 id="ques">Fill out the following information to know your Recovery Score</h4>
                <hr />
                <QuestionHandler userid={props.userid} />
            </div>
        </div>
    )
}

export default Calculator;