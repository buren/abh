TROLLFACE = '<img class="emoji" title=":trollface:" alt=":trollface:" src="https://assets-cdn.github.com/images/icons/emoji/trollface.png" align="absmiddle">';
// DURATION = 10000;

function trollPlayer(player) {
  // Replace player page content
  player.setContent(TROLLFACE);
}

function appendTrollFace() {
  $('#soundcloud').append(TROLLFACE);
}

var addSoundcloudPageListener = function() {
  Reveal.addEventListener('soundcloud-page', function() {
      log("Page#soundcloud");

      var url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/216756926&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";

      var killAfter = 10000;
      var playerOptions = { removeCallback: trollPlayer, killAfter: killAfter };
      var player = initPlayer("#soundcloud", url, playerOptions);

      var afterIframe = '<h3>LTH webpage</h3><iframe src="http://www.lth.se/" width="100%" height="760" frameborder="0"></iframe>';
      setTimeout(function() {
        player.setContent(afterIframe);
      }, killAfter + 2000)
  }, false);
};

// Reveal.js gets added after this file
// wait for an 5 seconds, so the library has plenty of time to load
// before adding the eventlistener
setTimeout(addSoundcloudPageListener, 5000);
