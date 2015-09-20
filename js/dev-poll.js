DEV_POLL_URL = SERVER_ADDR + '/polls';
DEV_POLL_CHART_URL = SERVER_ADDR + '/polls_chart?type=dev'

function submitDevWithOthersPoll(el) {
  var vote = $(el).attr('data-value');
  $('.dev-poll-btn').remove();
  $.getJSON(DEV_POLL_URL, {type: 'dev', value: vote}, function(json, textStatus) {
    console.log('Developed with others poll submitted');
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
new Chartkick.ColumnChart('dev-chart', DEV_POLL_CHART_URL, options);
