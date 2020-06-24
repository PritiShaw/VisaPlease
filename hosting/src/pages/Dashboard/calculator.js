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
import {Question4a} from "./Questions/Question"
import {Question4b} from "./Questions/Question"
import {Question5} from "./Questions/Question"
import {Question6a} from "./Questions/Question"
import {Question6b} from "./Questions/Question"
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
                <h4>Getting to know you</h4>
                <Question1  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                
                <h4>Fulfilment of general criteria for a loan (%):</h4>
                <Question2  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                
                <h4>How well has your business been performing? (%)</h4>
                <Question3  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                
                <h4>Gain/loss of cash flow due to pandemic (%):</h4>
                <h5>a)Cash flow before pandemic(Needs to filled only once..needs db connection)</h5>
                <Question4a  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                <h5>b)Cash flow this month</h5>
                <Question4b  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                
                <h4>How tech-savvy is your business? (%):</h4>
                <Question5  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                
                <h4>Evaluation of suppliers</h4> 
                <h5>a) Accessibility to suppliers </h5>       
                <Question6a  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
                <h5>b) Reliability of suppliers</h5>
                <Question6b  display={this.state.visible} Visibility={this.Visibility}/><br/><br/><br/><br/>
        </div>
    )}
    
}
export default Calculator;