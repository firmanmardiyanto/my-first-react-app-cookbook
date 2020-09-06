import React, { Component } from 'react';
import c3 from 'c3';
import './Chart.css';

class Chart extends Component {
  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    const { chartType, columns } = this.props;
    c3.generate({
      bindto: '#chart',
      data: {
        columns,
        type: chartType,
      },
    });
  }

  render() {
    return <div id="chart" />;
  }
}

export default Chart;
