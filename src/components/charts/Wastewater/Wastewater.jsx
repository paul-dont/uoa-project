import React from 'react';
import './Wastewater.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Wastewater = () => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Dummy Title'
    },
    subtitle: {
      text:
        'Source: <a href="https://en.wikipedia.org/wiki/Wastewater">Wikipedia</a>'
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '15px',
          fontFamily: 'Quicksand, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Wastewater ( m³)'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: 'Wastewater: <b>{point.y:.1f}  m³</b>'
    },
    series: [
      {
        name: 'Wastewater',
        data: [
          ['Germany', 24.2],
          ['France', 20.8],
          ['UK', 14.9],
          ['Spain', 13.7],
          ['Norway', 13.1],
          ['Turkey', 12.7],
          ['Sweden', 12.4],
          ['Russia', 12.2],
          ['Belgium', 12.0],
          ['Greece', 11.7],
          ['Italy', 11.5],
          ['Romania', 11.2],
          ['Serbia', 11.1],
          ['Portugal', 10.6],
          ['Poland', 10.6],
          ['Bulgaria', 10.6],
          ['Albania', 10.3],
          ['Austria', 9.8],
          ['Slovakia', 9.3],
          ['Hungary', 9.3]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }
    ]
  };

  return (
    <section id="results" className="container results__container">
      <h2>Wastewater</h2>
      <h5>Per Region</h5>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
};

export default Wastewater;
