
import React from 'react';
import {Line,Bar} from 'react-chartjs-2';
import { Container } from "react-bootstrap";
import {Button} from "react-bootstrap"
import "../calculator.css";





const Subscore4RecoveryScoreArray=[ 59, 80, 81, 56,100,85,65,11,20,65, 59, 80, 81, 56,65, 59, 80, 81, 56,65];
const CalculatedOn=['Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28','Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28','Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28','Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28'];
const Subscore4state1 = {
  labels: CalculatedOn,
  datasets: [
    {
      label: 'Tech-savviness of business',
      fill: false,
      lineTension: 0,
      backgroundColor: '#000000',
      borderColor: '#1a1f71',
      borderWidth: 2,
      data: Subscore4RecoveryScoreArray
    }
  ] 
}
const Subscore4state2 = {
  labels: CalculatedOn,
  datasets: [
    {
      label: 'Tech-savviness of business',
      fill: false,
      lineTension: 0.5,
      backgroundColor:'#1a1f71' ,
      borderColor: '#000000',
      borderWidth: 2,
      data: Subscore4RecoveryScoreArray
    }
  ] 
}
export default class Subscore4 extends React.Component {
  state={
    line:"bar"
  }
  handleGraph=()=>{
    this.setState((prevState)=>{
      if(prevState.line=="bar")return{line:"line"}
      return{line:"bar"}
    })
  }
  render() {
    if(this.state.line=="bar"){
    return (
      <Container maxWidth="sm">
      <p id="sub">d)Tech-savviness of business</p>
      <div id="graph" >
      <Button id="buttn" onClick={this.handleGraph} variant="success">{this.state.line=="bar"?"Switch to bar graph":"Switch to line graph"}</Button>  
      <br/><br/>
      <Line id="graph-style"
          data={Subscore4state1}
          options={{
            title:{
              display:true,
              text:'Tech-savviness of business',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
      </Container>
    );}
    else
          {
            return (
              <Container maxWidth="sm">
              <p id="sub">d)Tech-savviness of business</p>
              <div id="graph" >
              <Button id="buttn" onClick={this.handleGraph} variant="success">{this.state.line=="bar"?"Switch to bar graph":"Switch to line graph"}</Button>  
              <br/><br/>
              <Bar id="graph-style"
                  data={Subscore4state2}
                  options={{
                    title:{
                      display:true,
                      text:'Tech-savviness of business',
                      fontSize:20
                    },
                    legend:{
                      display:false,
                      position:'right'
                    }
                  }}
                />
              </div>
              </Container>
            );
          }
  }
}
