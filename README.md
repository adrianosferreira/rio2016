<p align="center">
	<img src="http://s.glbimg.com/es/ge/f/original/2010/12/31/rio2016_62.jpg">
</p>

#Rio2016
Rio2016 module provides a set of functions to work with Rio 2016 Olympic games real time data.

##How to Install
npm install rio2016

##Documentation
Some functions available in the module:

###calendar( mode, lang, [ callback( obj ) ] )
It gets the olympic schedule from the official site and returns it as a JSON object.

####Arguments

* **mode**: "full" to retrieve the complete calendar or a month day to retrieve the day activities
* **lang**: pt_br, es, fr, en
* **callback**: callback carrying the JSON object

##Examples

Retrieving the full calendar in brazilian portuguese:

```javascript
var rio2016 = require( 'rio2016' );

rio2016.calendar('full', 'pt_br', function( obj ){
	console.log( obj );
});
```

JSON output:
```JSON
[
   {
      "day":3,
      "events":{
         "Futebol":"competition"
      }
   },
   {
      "day":4,
      "events":{
         "Futebol":"competition"
      }
   },
   {
      "day":5,
      "events":{
         "Cerimônia":"cerimony",
         "Tiro com Arco":"competition"
      }
   },
   {
      "day":6,
      "events":{
         "Basquetebol":"competition",
         "Boxe":"competition",
         "Ciclismo de Estrada":"medal",
         "Esgrima":"medal",
         "Futebol":"competition",
         "Ginástica Artística":"competition",
         "Handebol":"competition",
         "Hipismo":"competition",
         "Hóquei sobre Grama":"competition",
         "Judô":"medal",
         "Levantamento de Peso":"medal",
         "Natação":"medal",
         "Polo Aquático":"competition",
         "Remo":"competition",
         "Rugby de 7":"competition",
         "Tiro com Arco":"medal",
         "Tiro Esportivo":"medal",
         "Tênis":"competition",
         "Tênis de Mesa":"competition",
         "Voleibol":"competition",
         "Vôlei de Praia":"competition"
      }
   },
   {
      "day":21,
      "events":{
         "Cerimônia":"cerimony",
         "Atletismo":"medal",
         "Basquetebol":"medal",
         "Boxe":"medal",
         "Ciclismo Mountain Bike":"medal",
         "Ginástica Rítmica":"medal",
         "Handebol":"medal",
         "Luta Olímpica":"medal",
         "Voleibol":"medal"
      }
   }
]
```
Retrieving events occurring in August 8th in english:

```javascript
var rio2016 = require( 'rio2016' );

rio2016.calendar(8, 'en', function( obj ){
	console.log( obj );
});
```

JSON output:

```JSON
{
   "Archery":"competition",
   "Artistic Gymnastics":"medal",
   "Basketball":"competition",
   "Beach Volleyball":"competition",
   "Boxing":"competition",
   "Canoe Slalom":"competition",
   "Diving":"medal",
   "Equestrian":"competition",
   "Fencing":"medal",
   "Handball":"competition",
   "Hockey":"competition",
   "Judo":"medal",
   "Rowing":"competition",
   "Rugby Sevens":"medal",
   "Sailing":"competition",
   "Shooting":"medal",
   "Swimming":"medal",
   "Table Tennis":"competition",
   "Tennis":"competition",
   "Volleyball":"competition",
   "Water Polo":"competition",
   "Weightlifting":"medal"
}
```
