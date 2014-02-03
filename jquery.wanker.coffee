#
# Wanker 1.0.0
# http://mig.io/makes/wanker
#
# The web was meant to be read, not squished.
# Display a message on excessive browser resizing.
#
# MIT License
#
# by Mig Reyes, Designer at Basecamp
# http://twitter.com/migreyes
#

(($) ->
  $.fn.wanker = (options) ->

    settings = $.extend(
      delay: 1000
      duration: 1200
    , options)

    return @each ()->
      $message = $(@)
      mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      unless mobile
        fired = 0
        start = null
        elapsed = null
        timer = undefined

        reset = ->
          fired = 0
          elapsed = null

        $(window).resize ->
          if fired < 1
            start = new Date()
            fired++
          else
            elapsed = Math.abs(new Date() - start)
            fired++

          # Reveal the message after the delay is surpassed.
          if elapsed > settings.delay then $message.fadeIn()

          # Countdown timer before closing and resetting.
          clearTimeout timer if timer
          timer = setTimeout(->
            $message.fadeOut()
            reset()
          , settings.duration)
) jQuery
