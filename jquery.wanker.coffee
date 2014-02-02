(($) ->
  $.fn.wanker = (options) ->
    settings = $.extend(
      duration: 1200
    , options)

    return @each ()->
      $message = $(@)

      # Restrict this to desktop browsers.
      mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      resizeTimer = undefined

      $(window).resize ->
        unless mobile
          # Reveal the message.
          $message.fadeIn()

          # Reset timers.
          clearTimeout resizeTimer if resizeTimer

          # Start a new timer.
          resizeTimer = setTimeout(->
            resizeTimer = null
            $message.fadeOut()
          , settings.duration)
) jQuery