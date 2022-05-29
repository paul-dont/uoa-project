import React from 'react';
import Nav from './components/nav/Nav';
import Title from './components/title/Title';
import About from './components/about/About';
import Bysector from './components/charts/Bysector/Bysector';
import Wastewater from './components/charts/Wastewater/Wastewater';
import Waterconsumption from './components/charts/Waterconsumption/Waterconsumption';
import MapData from './components/charts/MapData/MapData';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Highcharts from 'highcharts/highstock';
import mapData from '../src/assets/mapData';

// Load Highcharts modules
require('highcharts/indicators/indicators')(Highcharts);
require('highcharts/indicators/pivot-points')(Highcharts);
require('highcharts/indicators/macd')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/map')(Highcharts);

const mapOptions = {
  title: {
    text: ''
  },
  colorAxis: {
    min: 0,
    stops: [
      [0, '#EFEFFF'],
      [0.67, '#4444FF'],
      [1, '#000022']
    ]
  },
  tooltip: {
    pointFormatter: function() {
      return this.properties['woe-label'].split(',')[0];
    }
  },
  series: [
    {
      mapData: mapData,
      dataLabels: {
        formatter: function() {
          return this.point.properties['woe-label'].split(',')[0];
        }
      },
      name: 'Norway',
      data: [
        ['no-mr', 0],
        ['no-st', 1],
        ['no-ho', 2],
        ['no-sf', 42],
        ['no-va', 4],
        ['no-of', 5],
        ['no-nt', 6],
        ['no-ro', 7],
        ['no-bu', 8],
        ['no-vf', 9],
        ['no-fi', 10],
        ['no-no', 11],
        ['no-tr', 12],
        ['no-ak', 13],
        ['no-op', 14],
        ['no-he', 15],
        ['no-os', 16],
        ['no-te', 17],
        ['no-aa', 18]
      ]
    }
  ]
};

const App = () => {
  return (
    <>
      <Nav />
      <Title />
      <About />
      <Waterconsumption highcharts={Highcharts} />
      <Wastewater highcharts={Highcharts} />
      <Bysector highcharts={Highcharts} />
      <MapData options={mapOptions} highcharts={Highcharts} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
