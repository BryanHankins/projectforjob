Highcharts.chart('WORKCHART', {
    colors: ['#01BAF2', '#71BF45', '#FAA74B', '#B37CD2'],
    chart: {
      type: 'pie'
    },
    title: {
     
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {y} %'
        },
        
      }
    },
    series: [{
      name: 'Percentage',
      colorByPoint: true,
      innerSize: '33%',
      data: [{
        name: 'Current Deductions',
        y: 33
      }, {
        name: 'Current Taxes',
        y: 33
      }, {
        name: 'Current Earnings',
        y: 33
      }]
    }]
  });