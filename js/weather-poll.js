WEATHER_POLL_ID = 'weather' // The poll type key, unique key that identified a given poll
WEATHER_POLL_URL = SERVER_ADDR + '/polls'; // The URL to submit answers to
WEATHER_POLL_CHART_URL = SERVER_ADDR + '/polls_chart?type=' + WEATHER_POLL_ID; // Weather poll result data

// Submit weather poll answer to server
function submitWeatherPoll(el) {
  var answer = $(el).attr('data-value'); // Get the users answer
  $.getJSON(WEATHER_POLL_URL, {type: WEATHER_POLL_ID, value: answer}, function(json, textStatus) {
    log('Weather poll submitted');
  });
}

// Don't animate plotting
var libraryOptions =  { plotOptions: { column: { animation: false } } };
// Options for the chart
var weatherOptions = {
  vAxisTitle: "Count",    // y-axis title
  refresh: 4000,          // Refresh chart every 4th second
  library: libraryOptions // HighCharts options
};
// Init Column chart
new Chartkick.ColumnChart('weather-chart', WEATHER_POLL_CHART_URL, weatherOptions);
