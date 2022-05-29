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
      pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [
      {
        name: 'Population',
        data: [
          ['Shanghai', 24.2],
          ['Beijing', 20.8],
          ['Karachi', 14.9],
          ['Shenzhen', 13.7],
          ['Guangzhou', 13.1],
          ['Istanbul', 12.7],
          ['Mumbai', 12.4],
          ['Moscow', 12.2],
          ['São Paulo', 12.0],
          ['Delhi', 11.7],
          ['Kinshasa', 11.5],
          ['Tianjin', 11.2],
          ['Lahore', 11.1],
          ['Jakarta', 10.6],
          ['Dongguan', 10.6],
          ['Lagos', 10.6],
          ['Bengaluru', 10.3],
          ['Seoul', 9.8],
          ['Foshan', 9.3],
          ['Tokyo', 9.3]
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
