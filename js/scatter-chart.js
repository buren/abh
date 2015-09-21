// scatter-chart.js:
//   Render a very simple scatter chart
//
// Depends on: chartkick.js, highcharts.js

// Server address for weight/height data
WEIGHT_CHART_URL = SERVER_ADDR + '/weight_height_chart';

// Element id as defined in slides.md
var elementId = 'example-scatter-chart';

// Don't animate plotting
var libraryOptions =  { plotOptions: { scatter: { animation: false } } };
// Display options for the chart
var scatterOptions = {
  vAxisTitle: 'Length (cm)', // y-axis title
  hAxisTitle: 'Weight (kg)', // x-axis title
  min: 40,                   // min y-value,
  refresh: 4000,             // Refresh chart every 4th second
  library: libraryOptions    // HighCharts options
};

// Server address for the chart data
var dataSource = WEIGHT_CHART_URL;
// var dataSource = 'https://abh-server.herokuapp.com';
// Initialize the chart passing:
//    elementId: The element defined in slides.md
//    dataSource: The data source for chart points
//    options: Chart display options
new Chartkick.ScatterChart(elementId, dataSource, scatterOptions);
