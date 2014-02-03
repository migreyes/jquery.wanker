jquery.wanker.js
================

Responsive design has been a blessing to web crafters everywhere. The web, however, was meant to be read, not squished. **jquery.wanker.js** is a tiny (*549 bytes minified*) jQuery plugin that reveals a public service announcement when people start wanking (excessively resizing) their desktop browser as they try to see your responsive breakpoints.

**jquery.wanker.js** is the perfect easter egg plugin for designers, photographers, writers, and other creative people displaying their work on the web wishing their viewers to focus more on their work, and less on the magic of media queries.

![Wanker](https://github.com/migreyes/jquery.wanker/raw/master/example/gallery/example-wanker-animated.gif)

## Installing jquery.wanker.js
Assuming you’re already using jQuery, include the file in your `<head>`:

```html
<head>
  <script src="jquery.wanker.min.js"></script>
</head>
```

## Design your public service announcement

```html
<div class="wanker" data-wanker>
  <div class="wanker-content">
    <h1>The web was meant to be read, not squished.</h1>
    <p>Prevent browser wanking and get people back to reading.</p>
  </div>
</div>
```

## Call the wanker() function on your design

```javascript
$(function() {
  $('[data-wanker]').wanker();
});
```

The message will show up after 1 second of continuous browser resizing, and will disappear 1.5 seconds later. Prefer to choose your own delay and duration? No problem!

```javascript
$(function() {
  $('[data-wanker]').wanker({delay: 100, duration: 5000});
});
```

View (and contribute to!) the [list of websites using jquery.wanker.js](https://github.com/migreyes/jquery.wanker/wiki/Wanker-Design-Gallery).

Made with love by [@migreyes](http://twitter.com/migreyes).

*Special thanks to @sstephenson for his expert eyes.*