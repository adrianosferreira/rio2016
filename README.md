#Rio2016
Rio2016 module provides a set of functions to work with Rio 2016 Olympic games real time data.

##How to Install
npm install --save rio2016

##Documentation
Some available functions available in the module:

###calendar( mode, lang, [callback(obj)] )
It gets the olympic schedule.

####Arguments

* **mode**: "full" to retrieve the full JSON calendar object, a month day to retrieve the day object
* **lang**: pt_br, es, fr, en
* **callback**: callback with the object

##Examples

```javascript
var rio2016 = require( 'rio2016' );

//retrieving the full calendar
rio2016.calendar('full', 'pt_br', function( obj ){
	console.log( obj );
});

//retrieving events occurring in August 8th
rio2016.calendar(8, 'pt_br', function( obj ){
	console.log( obj );
});
```
