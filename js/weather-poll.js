WEATHER_POLL_URL = SERVER_ADDR + '/polls';
WEATHER_POLL_CHART_URL = SERVER_ADDR + '/polls_chart?type=weather'

function submitWeatherPoll(el) {
  var vote = $(el).attr('data-value');
  $.getJSON(WEATHER_POLL_URL, {type: 'weather', value: vote}, function(json, textStatus) {
    console.log('Weather poll submitted');
  });
}

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
