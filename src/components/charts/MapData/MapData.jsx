import React from 'react';
import HighchartsReact from 'highcharts-react-official';

const MapData = ({ options, highcharts }) => (
  <HighchartsReact
    highcharts={highcharts}
    constructorType={'mapChart'}
    options={options}
  />
);
export default MapData;
