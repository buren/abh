function Player(id) {
  var self = this; // Clear context
  self.id = id; // Store the element id
  log('Player#new', {id: id})

  self.setContent = function(content) {
    log('Player#setContent', {content: content})

    $(self.id).html(content);
  };

  self.add = function(url) {
    log('Player#add', {url: url});

    var iframe = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="' + url + '"></iframe>';

    // Add player content to page
    self.setContent(iframe);
  };

  self.remove = function(callback) {
    log('Player#remove');

    self.setContent('');
    callback(self);
  };

  self.deplayedRender = function(content, timeout) {
    log('Player#deplayedRender', {content: content, timeout: timeout});

    setTimeout(function() {
      self.setContent(content);
    }, timeout)
  };
}

// id: Element id
function initPlayer(id, url, opts) {
  // Initialize the player
  var player = new Player(id);

  // Add soundcloud player
  player.add(url);

  // Remove soundcloud player
  var removePlayerCall = function() {
    player.remove(opts.removeCallback);
  };

  // After 10 seconds: kill the player
  setTimeout(removePlayerCall, opts.killAfter || 10000);

  return player;
}
