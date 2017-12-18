// Video Event Tracking
$(function() {
  var videoPlayerSelector = 'video-player';
  var $videoPlayer = $('#'+videoPlayerSelector);
  var category = $videoPlayer.attr('ga-event-category');
  var label = $videoPlayer.attr('ga-event-label');
  if($videoPlayer.length > 0) {
    var video = videojs(videoPlayerSelector).ready(function() {
    var player = this;
    player.on('play', function() {
      ga('send', 'event', category, 'play', label);
    });
    player.on('pause', function() {
      if(player.remainingTime() > 0) {
        ga('send', 'event', category, 'pause', label);
      }
    });
    player.on('ended', function() {
      ga('send', 'event', category, 'complete', label);
    });
  });
  }
});

