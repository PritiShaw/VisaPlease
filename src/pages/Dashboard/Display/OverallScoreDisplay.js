
import React from 'react';
import "./ScoreDisplay.scss"
export default class OverallScoreDisplay extends React.Component {
    render() {
        const x=85;
      return (
          <div>
                <br/><br/><br/>
                <div id="sameline">

                    <div >
                        <br/><br/><br/><br/>
                        <p id="recoveryScore">Overall Recovery Score Calculated</p>
                    </div>  

                    <div id="driver" className="drivers-insured">
                        <div className="circle-percent" data-percent={x}>
                            <span>{x}<sup>%</sup></span>
                            <div className="mask">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
           );
    }
  }