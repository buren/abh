DEV_POLL_ID = 'dev' // The poll type key, unique key that identified a given poll
DEV_POLL_URL = SERVER_ADDR + '/polls'; // The URL to submit answers to
DEV_POLL_CHART_URL = SERVER_ADDR + '/polls_chart?type=' + DEV_POLL_ID // Dev poll result data

// Submit dev poll answer to server
function submitDevWithOthersPoll(el) {
  var answer = $(el).attr('data-value'); // Get the users answer
  $('.dev-poll-btn').remove(); // Don't allow multiple answers
  $.getJSON(DEV_POLL_URL, {type: DEV_POLL_ID, value: answer}, function(json, textStatus) {
    log('Developed with others poll submitted');
  });
}

// Don't animate plotting
var libraryOptions =  { plotOptions: { column: { animation: false } } };
// Options for chart
var devPollOptions = {
  vAxisTitle: "Count",    // y-axis title
  refresh: 4000,          // Refresh chart every 4th second
  library: libraryOptions // HighCharts options
};
// Create the Column chart
new Chartkick.ColumnChart('dev-chart', DEV_POLL_CHART_URL, devPollOptions);
