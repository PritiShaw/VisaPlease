import React from "react";
import "./calculator.css";
import "../../App.css";
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col"
import {Link} from "react-router-dom"
import {Question1} from "./Questions/Question"
import {Question2} from "./Questions/Question"
import {Question3} from "./Questions/Question"
import {Question4} from "./Questions/Question"
import {Question5a} from "./Questions/Question"
import {Question5b} from "./Questions/Question"
class Calculator extends React.Component{
    state={
        visible:1
    }
    Visibility=(x)=>{
        this.setState((state) => {
            return {visible: x};
          });
    }
    render(){
        const SupplierFromSameCountry="";
        return( 
        <div claculator> 
        <div className="col-12 py-5">
                <h2>Recovery Score Calculator</h2>
                <h4>Fill out the following information to know your Recovery Score</h4>
                </div>
                <h4>About you:</h4>
                <Question1  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                <h4>Fulfilment of general criteria for a loan (%):</h4>
                <Question2  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                <h4>Gain/loss of cash flow due to pandemic (%):</h4>
                <Question3  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                <h4>Online presence of business (%):</h4>
                <Question4  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                <h4>Evaluation of suppliers</h4> 
                <h5>a) Accessibility to suppliers </h5>       
                <Question5a  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                <h5>b) Reliability of suppliers</h5>
                <Question5b  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
        </div>
    )}
    
}
export default Calculator;