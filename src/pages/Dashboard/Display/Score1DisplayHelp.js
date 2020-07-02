
import React from 'react';
import "./ScoreDisplay.scss"
export default class Subscore1Display extends React.Component {
    render() {
        const x=this.props.ArrayOfScores[this.props.ArrayOfScores.length-1][0];const y=this.props.ArrayOfScores[this.props.ArrayOfScores.length-1][1];const z=this.props.ArrayOfScores[this.props.ArrayOfScores.length-1][2]; 
      return (
          <div>
                <div>
                    <table>
                    <tr id="row">
                    <td id="td">
                    <span >
                    <p id="sub"> Emergency loan basis</p>
                        <div className="circle-percent" data-percent={x}>
                            <span>{x}<sup>%</sup></span>
                            <div className="mask">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                    </span>
                    </td>
                    <td id="td">
                    <span >
                    <p id="sub" >Business performance</p>
                    <div className="circle-percent" data-percent={y}>
                        <span>{y}<sup>%</sup></span>
                        <div className="mask">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    </span>
                    </td>
                    <td id="td">
                    <span >
                    <p id="sub">Based on cash flow</p>
                    <div className="circle-percent" data-percent={z}>
                        <span>{z}<sup>%</sup></span>
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
        </div>
           );
    }
  }