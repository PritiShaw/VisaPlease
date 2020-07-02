
import React from 'react';
import "./ScoreDisplay.scss"
export default class Score2DisplayHelp extends React.Component {
    render() {
        const x=this.props.ArrayOfScores[this.props.ArrayOfScores.length-1][3];
        const y=this.props.ArrayOfScores[this.props.ArrayOfScores.length-1][4];
        return (
            <div>
                  
            
                      <table>
                      <tr >
                      <td id="td1">
                      <span >
                      <p id="sub"> Technology Oriented</p>
                          <div className="circle-percent" data-percent={x}>
                              <span>{x}<sup>%</sup></span>
                              <div className="mask">
                                  <div className="bar"></div>
                                  <div className="fill"></div>
                              </div>
                          </div>
                      </span>
                      </td>
                      <td id="td2">
                      <span >
                      <p id="sub">Evaluation of suppliers</p>
                      <div className="circle-percent" data-percent={y}>
                          <span>{y}<sup>%</sup></span>
                          <div className="mask">
                              <div className="bar"></div>
                              <div className="fill"></div>
                          </div>
                      </div>
                      </span>
                      </td>
                      </tr>
  
  
  
  
                      </table>
  
                      
  
                      
  
  
          </div>
             );
      }
    }