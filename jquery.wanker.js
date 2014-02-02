(function($) {
  return $.fn.wanker = function(options) {
    var settings = $.extend({
      duration: 1200
    }, options);

    return this.each(function() {
      var $message = $(this);
      var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      var resizeTimer = void 0;

      return $(window).resize(function() {
        if (!mobile) {
          $message.fadeIn();

          if (resizeTimer) {
            clearTimeout(resizeTimer);
          }

          return resizeTimer = setTimeout(function() {
            resizeTimer = null;
            return $message.fadeOut();
          }, settings.duration);
        }
      });
    });
  };
})(jQuery);