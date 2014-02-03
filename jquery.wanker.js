/*!
  * Wanker 0.1.1
  * http://mig.io/makes/wanker
  *
  * The web was meant to be read, not squished.
  * Display a message on excessive browser resizing.
  *
  * MIT License
  *
  * by Mig Reyes, Designer at Basecamp
  * http://twitter.com/migreyes
  *
  */

(function() {
  (function($) {
    return $.fn.wanker = function(options) {
      var settings;
      settings = $.extend({
        delay: 1000,
        duration: 1200
      }, options);
      return this.each(function() {
        var $message, elapsed, fired, mobile, reset, start, timer;
        $message = $(this);
        mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (!mobile) {
          start = null;
          fired = 0;
          elapsed = null;
          timer = void 0;
          reset = function() {
            fired = 0;
            return elapsed = null;
          };
          return $(window).resize(function() {
            if (fired < 1) {
              start = new Date();
              fired++;
            } else {
              elapsed = Math.abs(new Date() - start);
              fired++;
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
  })(jQuery);

}).call(this);
