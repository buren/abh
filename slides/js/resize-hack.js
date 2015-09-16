// resize-hack.js:
//   Trigger and at artificial browser window resize event
//   Needed since Highcharts renders with the wrong width when its
//
// Depends on: jquery.js
//
// Real ugly resize hack..

// Define a function triggerResize
var triggerResize = function() {
  // Trigger the fake resize event
  $(window).trigger('resize')
};

// Every 3 second: trigger a resize event
setInterval(triggerResize, 3000);
