import CanvasJSReact from "./../../assets/canvasjs.react";
import React from "react";
import { Container } from "react-bootstrap";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Track extends React.Component {
  render() {
    const options = {
      animationEnabled: true,
      height: 200,
      width: 300,
      title: {
        text: "Overall Score",
      },
      axisX: {
        valueFormatString: "MMM",
      },
      axisY: {
        title: "Recovery Score (%)",
        postfix: "%",
        includeZero: false,
      },
      data: [
        {
          yValueFormatString: "##%",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: [
            { x: new Date(2020, 0), y: 0 },
            { x: new Date(2020, 1), y: 10 },
            { x: new Date(2020, 2), y: 20 },
            { x: new Date(2020, 3), y: 30 },
            { x: new Date(2020, 4), y: 40 },
            { x: new Date(2020, 5), y: 50 },
            { x: new Date(2020, 6), y: 40 },
            { x: new Date(2020, 7), y: 30 },
            { x: new Date(2020, 8), y: 20 },
          ],
        },
      ],
    };
    return (
      <React.Fragment>
        <Container maxWidth="sm">
          <CanvasJSChart
            options={options}
            /* onRef = {ref => this.chart = ref} */
          />
        </Container>
      </React.Fragment>
    );
  }
}
export default Track;
