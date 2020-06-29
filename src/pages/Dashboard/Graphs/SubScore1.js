
import React from 'react';
import {Line,Bar} from 'react-chartjs-2';
import { Container } from "react-bootstrap";
import {Button} from "react-bootstrap"
import "../calculator.css";



// Fulfilment of general criteria for a small business emergency loan

const Subscore1RecoveryScoreArray=[ 59, 80, 81, 56,100,85,65,11,20,65, 59, 80, 81, 56,65, 59, 80, 81, 56,65];
const CalculatedOn=['Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28','Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28','Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28','Jan 1', 'jan 7', 'jan 14',
'jan 21', 'jan 28'];
const Subscore1state1 = {
  labels: CalculatedOn,
  datasets: [
    {
      label: 'Small business emergency loan',
      fill: false,
      lineTension: 0,
      backgroundColor: '#000000',
      borderColor: '#1a1f71',
      borderWidth: 2,
      data: Subscore1RecoveryScoreArray
    }
  ] 
}
const Subscore1state2 = {
  labels: CalculatedOn,
  datasets: [
    {
      label: 'Small business emergency loan',
      fill: false,
      lineTension: 0.5,
      backgroundColor:'#1a1f71' ,
      borderColor: '#000000',
      borderWidth: 2,
      data: Subscore1RecoveryScoreArray
    }
  ] 
}
export default class Subscore1 extends React.Component {
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
      <p id="sub">a)Small business emergency loan</p>
      <div id="graph" >
      <Button id="buttn" onClick={this.handleGraph} variant="success">{this.state.line=="bar"?"Switch to bar graph":"Switch to line graph"}</Button>
      <br/><br/>
      <Line id="graph-style"
          data={Subscore1state1}
          options={{
            title:{
              display:true,
              text:'Small business emergency loan',
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
              <p id="sub">a)Small business emergency loan</p>
              <div id="graph" >
              <Button id="buttn" onClick={this.handleGraph} variant="success">{this.state.line=="bar"?"Switch to bar graph":"Switch to line graph"}</Button>  
              <br/><br/>
              <Bar id="graph-style"
                  data={Subscore1state2}
                  options={{
                    title:{
                      display:true,
                      text:'Small business emergency loan',
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
