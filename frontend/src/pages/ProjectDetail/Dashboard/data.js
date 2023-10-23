const getDemoChartConfig = (theme, mode, series, type) => {
  const colors = {
    dark: [theme.palette.primary.main, theme.palette.secondary.main],
    light: [theme.palette.primary.light, theme.palette.secondary.light],
  }
  return {
    height: 150,
    options: {
      colors: colors[mode],
      chart: {
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: '10px',
          borderRadius: 4
        }
      },
      stroke: {
        width: 2
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: 'Ticket '
        },
        marker: {
          show: false
        }
      }
    },
    type,

    series,
  }
};




export default getDemoChartConfig;
