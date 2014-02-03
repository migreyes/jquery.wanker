jquery.wanker.js
================

Responsive design has been a blessing to web crafters everywhere. The web, however, was meant to be read, not squished. **`jquery.wanker.js`** is a simple, silly jQuery plugin that reveals a message takeover when people start wanking (excessively resizing) their desktop web browser to see your responsive breakpoints and design.

![Wanker](https://github.com/migreyes/jquery.wanker/raw/master/example/wanker.gif)

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

The message will show up after 1 second of continuous browser resizing, and will disappear 1.2 seconds later. Prefer to choose your own delay and duration? No problem!

```javascript
$(function() {
  $('[data-wanker]').wanker({delay: 100, duration: 5000});
});
```

You see (and contribute to) the [list of websites using jquery.wanker.js](https://github.com/migreyes/jquery.wanker/wiki/Wanker-Sites).

Made with love by [@migreyes](http://twitter.com/migreyes).