const emissionsData = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Estimated European CO2 Emissions per Country'
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
      text: 'CO2 EMISSIONS'
    },
    labels: {
      formatter: function() {
        return this.value;
      }
    }
  },
  tooltip: {
    split: true,
    valueSuffix: ' kt'
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
      data: [766, 344, 455, 1147, 1702, 998, 5568]
    },
    {
      name: 'France',
      data: [125, 177, 211, 255, 311, 888, 1999]
    },
    {
      name: 'UK',
      data: [211, 277, 344, 511, 633, 925, 1111]
    },
    {
      name: 'Spain',
      data: [25, 44, 66, 233, 444, 1211, 1655]
    },
    {
      name: 'Greece',
      data: [15, 25, 35, 55, 85, 111, 225]
    }
  ]
};

export default emissionsData;
