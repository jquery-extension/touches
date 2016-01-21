# jquery-touches
It easy use touches object in touch event. 

# Why use it?
If you do not use it you have to use originalEvent property in event object.
```js
$("#some").on("touchmove",function(e){
	e.originalEvent.touches;
	e.originalEvent.changedTouches;
	e.originalEvent.targetTouches;
});
```
You can easy use touches object when you use `touchstart`,`touchmove`, `touchend`.
```js
$("#some").on("touchmove",function(e){
	e.touches;
	e.changedTouches;
	e.targetTouches;
});
```

# How to use it?

```
bower install jquery-touches
```
```html
<script src="jquery.js"></script>
<script src="../bower_components/jquery-touches/jquery-touches.js"></script>
```