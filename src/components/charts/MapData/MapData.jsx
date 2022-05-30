import React from 'react';
import HighchartsReact from 'highcharts-react-official';

const MapData = ({ options, highcharts }) => (
  <section id="results" className="container results__container">
    <h2>Totals</h2>
    <h5>Per Country Region</h5>

    <HighchartsReact
      highcharts={highcharts}
      constructorType={'mapChart'}
      options={options}
    />
  </section>
);
export default MapData;
