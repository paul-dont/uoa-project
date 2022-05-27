import React, { useState, useRef } from 'react';
import './charts.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Charts = () => {
  const chartComponent = useRef(null);
  const [options] = useState({
    title: {
      text: 'Results'
    },
    series: [
      {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    ]
  });

  // useEffect(() => {
  //   const chart = chartComponent.current.chart;
  // }, []);

  return (
    <section id="results" className="container results__container">
      <h2>Water Consumption</h2>
      <h5>Per Year</h5>

      <HighchartsReact
        ref={chartComponent}
        highcharts={Highcharts}
        options={options}
      />
    </section>
  );
};

export default Charts;
