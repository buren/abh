// scatter-chart.js:
//   Render a very simple scatter chart
//
// Depends on: chartkick.js, highcharts.js


// Element id as defined in slides.md
var elementId = "example-scatter-chart";

// Some example data: [Lenght (cm), Weight (kg)]
var data = [
  [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
  [160.0, 52.0], [166.5, 62.3], [175.3, 68.6], [168.6, 54.1], [168.0, 75.9]
];

// Display options for the chart
var options = {
  xtitle: "Length (cm)", // x-axis title
  ytitle: "Weight (kg)", // y-axis title
  min: 40                // min y-value
};

// Initialize the chart passing:
//    elementId: The element defined in slides.md
//    data: The data points for the chart
//    options: Chart display options
new Chartkick.ScatterChart(elementId, data, options);
