
import React from 'react';
import "./ScoreDisplay.scss"
import OverallScoreDisplay from "./OverallScoreDisplay"
import Subscore1Display from "./Subscore1Display"
import Subscore2Display from "./Subscore2Display"
import Subscore3Display from "./Subscore3Display"
import Subscore4Display from "./Subscore4Display"
import Subscore5Display from "./Subscore5Display"

  export default class ScoreDisplay extends React.Component {
    render() {
      return (
            <div>
                <OverallScoreDisplay/>
                <Subscore1Display/>
                <Subscore2Display/>
                <Subscore3Display/>
                <Subscore4Display/>
                <Subscore5Display/>
            </div>
           );
    }
  }