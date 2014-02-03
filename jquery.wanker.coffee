#
# Wanker 0.1.2
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

do (jQuery = $) ->
  $.fn.wanker = (options) ->

    settings = $.extend
      delay: 1000
      duration: 1500
    , options

    @each ->
      $message = $(@)
      mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      unless mobile
        fired = false
        start = null
        elapsed = null
        timer = null

        reset = ->
          fired = false
          elapsed = null

        $(window).resize ->
          if fired
            elapsed = Math.abs(new Date() - start)
          else
            start = new Date()
            fired = true

          # Reveal the message after the delay is surpassed.
          if elapsed > settings.delay then $message.fadeIn()

          # Countdown timer before closing and resetting.
          clearTimeout timer if timer
          timer = setTimeout ->
            $message.fadeOut()
            reset()
          , settings.duration
