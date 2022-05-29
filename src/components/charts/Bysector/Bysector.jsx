import React from 'react';
import './Bysector.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Bysector = () => {
  const options = {
    chart: {
      plotBackgroundColor: '#fff',
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          connectorColor: 'silver'
        }
      }
    },
    series: [
      {
        name: 'Share',
        data: [
          { name: 'Chrome', y: 61.41 },
          { name: 'Internet Explorer', y: 11.84 },
          { name: 'Firefox', y: 10.85 },
          { name: 'Edge', y: 4.67 },
          { name: 'Safari', y: 4.18 },
          { name: 'Other', y: 7.05 }
        ]
      }
    ]
  };

  return (
    <section id="results" className="container results__container">
      <h2>Totals</h2>
      <h5>Per Category</h5>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
};

export default Bysector;
