const energyData = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Estimated European Energy Consumption per Country'
  },
  subtitle: {
    text: 'University of Athens'
  },
  xAxis: {
    categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: 'ENERGY GWh'
    },
    labels: {
      formatter: function() {
        return this.value;
      }
    }
  },
  tooltip: {
    split: true,
    valueSuffix: ' GWh'
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666'
      }
    }
  },
  series: [
    {
      name: 'Germany',
      data: [255, 360, 440, 630, 1222, 2944, 4788]
    },
    {
      name: 'France',
      data: [880, 990, 1001, 1210, 1990, 6770, 1566]
    },
    {
      name: 'UK',
      data: [1440, 1880, 2330, 4240, 4890, 5440, 5990]
    },
    {
      name: 'Spain',
      data: [180, 310, 540, 1560, 3390, 818, 1201]
    },
    {
      name: 'Greece',
      data: [155, 200, 188, 333, 455, 467, 555]
    }
  ]
};

export default energyData;
