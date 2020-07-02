
import React from 'react';
import {Line,Bar} from 'react-chartjs-2';
import { Container } from "react-bootstrap";
import {Button} from "react-bootstrap"
import "../calculator.css";



const OverallRecoveryScoreArray=[];
const CalculatedOn=[];















const state1={}
const state2={}
const Months=[];
export default class OverallScoresHelp extends React.Component {
  state={
    line:"bar"
  }
  handleGraph=()=>{
    this.setState((prevState)=>{
      if(prevState.line=="bar")return{line:"line"}
      return{line:"bar"}
    })
  }
   
  Months=["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"]
  HandleLabels=()=>{
      var lab=[];
        for(var i=0;i<this.props.DateArray.length;i++)
        {
                lab[i]=this.props.DateArray[i].toDate().getDate().toString()+" "+this.Months[this.props.DateArray[i].toDate().getMonth()]
        } 
        return lab;
  }
  
  OverallRecoveryScoreArray=this.props.ArrayOfScores
  CalculatedOn=this.HandleLabels();
   state1 = {
    labels: this.CalculatedOn,
    datasets: [
      {
        label: 'Overall Recovery score',
        fill: false,
        lineTension: 0,
        backgroundColor: '#000000',
        borderColor: '#1a1f71',
        borderWidth: 2,
        data: this.OverallRecoveryScoreArray
      }
    ] 
  }


  state2 = {
    labels: this.CalculatedOn,
    datasets: [
      {
        label: 'Overall Recovery score',
        fill: false,
        lineTension: 0.5,
        backgroundColor:'#1a1f71' ,
        borderColor: '#000000',
        borderWidth: 2,
        data: this.OverallRecoveryScoreArray
      }
    ] 
  }
  
  render() {  
    
    if(this.state.line=="bar"){
    return (
      <Container maxWidth="sm">
      
      <p id="subover">Overall Recovery Score</p>
      <div id="graph" >
      <Button id="buttn" onClick={this.handleGraph} variant="success">{this.state.line=="bar"?"Switch to bar graph":"Switch to line graph"}</Button>
      <br/><br/>
      <Line id="graph-style"
          data={this.state1}
          options={{
            title:{
              display:true,
              text:'Overall Recovery score',
              fontSize:20
            },
            legend:{
              display: false,
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
              <p id="subover">Overall Recovery Score</p>
              <div id="graph" >
              <Button id="buttn" onClick={this.handleGraph} variant="success">{this.state.line=="bar"?"Switch to bar graph":"Switch to line graph"}</Button>
              <br/><br/>
                <Bar id="graph-style"
                  data={this.state2} 
                  options={{
                    title:{
                      display:true,
                      text:'Overall Recovery score',
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
