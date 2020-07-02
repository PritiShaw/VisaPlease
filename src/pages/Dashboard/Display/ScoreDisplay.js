
import React from 'react';
import "./ScoreDisplay.scss"
import {Button }from "react-bootstrap"
import OverallScoreDisplay from "./OverallScoreDisplay"
import Subscore1Display from "./Subscore1Display"
import Subscore2Display from "./Subscore2Display"


  export default class ScoreDisplay extends React.Component {
    state={
      component:"overall"
    }
    componentChange=(e)=>{
      
      this.setState((prevState)=>{
        return(prevState.component=="overall"?{component:"subscore"}:{component:"overall"})
      })
    }
    render() {
      if(this.state.component=="overall"){
      return (
            <div>
                <OverallScoreDisplay/>
                <Button onClick={(e) => this.componentChange(e)} variant="primary"  size="lg" >
                {this.state.component=="overall"?"Check Subscores":"Main Score"}  
                </Button>
            </div>
           );
      }
      else{
        return (
              <div>
                  <Subscore1Display/>
                  <Subscore2Display/>
                  <hr/>
                  <Button onClick={(e) => this.componentChange(e)} variant="primary"  size="lg" >
                  {this.state.component=="overall"?"Check Subscores":"Main Score"}  
                  </Button>
                  <br/>
                  <br/>
              </div>
             );
        }
    }
  }


  // 
  //               
  //               <Subscore3Display/>
  //               <Subscore4Display/>
  //               <Subscore5Display/>