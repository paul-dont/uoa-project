const lala = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Estimated European Water Consumption per Country'
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
      text: 'WATER  m³'
    },
    labels: {
      formatter: function() {
        return this.value;
      }
    }
  },
  tooltip: {
    split: true,
    valueSuffix: ' m³'
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
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    },
    {
      name: 'France',
      data: [106, 107, 111, 133, 221, 767, 1766]
    },
    {
      name: 'UK',
      data: [163, 203, 276, 408, 547, 729, 628]
    },
    {
      name: 'Spain',
      data: [18, 31, 54, 156, 339, 818, 1201]
    },
    {
      name: 'Greece',
      data: [2, 2, 2, 6, 13, 30, 46]
    }
  ]
};

export default lala;
