
import React from 'react';
import "./ScoreDisplay.scss"
export default class Subscore5Display extends React.Component {
    render() {
        const x=92;
      return (
          <div>
                <br/><br/><br/>
                <div id="sameline">

                    <div >
                        <br/><br/><br/><br/>
                        <p id="subScore">e)Based on evaluation of suppliers</p>
                    </div>  

                    <div className="drivers-insured">
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