import React, { useState } from 'react';
import './Waterconsumption.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import waterData from './data/waterData';
import energyData from './data/energyData';
import emissionsData from './data/emissionsData';
import lala from './data/lala';

const WaterConsumption = () => {
  const [chartData, setChartData] = useState(lala);

  const onClickHandler = e => {
    if (e.target.textContent === 'Water') {
      setChartData(waterData);
    }
    if (e.target.textContent === 'Energy') {
      setChartData(energyData);
    }
    if (e.target.textContent === 'CO2') {
      setChartData(emissionsData);
    }
  };

  return (
    <section id="results" className="container results__container">
      <h2>Final Results</h2>
      <h5>Per European Country</h5>
      <div className="buttons">
        <button onClick={onClickHandler}>Water</button>
        <button onClick={onClickHandler}>Energy</button>
        <button onClick={onClickHandler}>CO2</button>
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </section>
  );
};

export default WaterConsumption;
