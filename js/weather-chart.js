var WEATHER_POLL_CHART_URL = SERVER_ADDR + '/polls_chart?type=weather'
// Don't animate plotting
var libraryOptions =  { plotOptions: { column: { animation: false } } };
// Display options for the chart
var options = {
  vAxisTitle: "Count",    // y-axis title
  refresh: 4000,          // Refresh chart every 4th second
  library: libraryOptions // HighCharts options
};
// Init Column chart
new Chartkick.ColumnChart('weather-chart', WEATHER_POLL_CHART_URL, options);
