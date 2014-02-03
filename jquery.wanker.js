//
// Wanker 0.1.2
// http://mig.io/makes/wanker
//
// The web was meant to be read, not squished.
// Display a message on excessive browser resizing.
//
// MIT License
//
// by Mig Reyes, Designer at Basecamp
// http://twitter.com/migreyes
//

(function() {
  (function(jQuery) {
    return $.fn.wanker = function(options) {
      var settings;
      settings = $.extend({
        delay: 1000,
        duration: 1500
      }, options);
      return this.each(function() {
        var $message, elapsed, fired, mobile, reset, start, timer;
        $message = $(this);
        mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (!mobile) {
          fired = false;
          start = null;
          elapsed = null;
          timer = null;
          reset = function() {
            fired = false;
            return elapsed = null;
          };
          return $(window).resize(function() {
            if (fired) {
              elapsed = Math.abs(new Date() - start);
            } else {
              start = new Date();
              fired = true;
            }
            if (elapsed > settings.delay) {
              $message.fadeIn();
            }
            if (timer) {
              clearTimeout(timer);
            }
            return timer = setTimeout(function() {
              $message.fadeOut();
              return reset();
            }, settings.duration);
          });
        }
      });
    };
  })($);

}).call(this);
