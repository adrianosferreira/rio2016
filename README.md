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

###sport( mode, lang, [ callback( obj ) ] )
It gets the olympic sports data from the official site and returns it as a JSON object.

####Arguments

* **mode**: "all" to retrieve data of all sports or a sport name ("boxing") to retrieve from a specific one
* **lang**: pt_br, es, fr, en
* **callback**: callback carrying the JSON object

##Examples

Retrieving the full list of sports in brazilian portuguese:

```javascript
var rio2016 = require( 'rio2016' );

rio2016.sport( 'all', 'pt_br', function( obj ){
   console.log( obj );
});
```

JSON output:

```JSON
[
   {
      "name":"Badminton",
      "description":"Com petecas que podem voar a 400 km/h, o badminton exige reflexos rápidos dos jogadores – e atenção máxima do público. O esporte, que estreou em Barcelona 1992, tem torneios masculinos e femininos, individuais e de duplas, além de duplas mistas.",
      "records":{
         "male":[
            {
               "name":"Dong-Moon Kim",
               "nationality":"KOR",
               "gold":"2",
               "silver":"0",
               "bronze":"1"
            },
            {
               "name":"Lin Dan",
               "nationality":"CHN",
               "gold":"2",
               "silver":"0",
               "bronze":"0"
            },
            {
               "name":"Jun Zhang",
               "nationality":"CHN",
               "gold":"2",
               "silver":"0",
               "bronze":"0"
            }
         ],
         "female":[
            {
               "name":"Ling Gao",
               "nationality":"CHN",
               "gold":"2",
               "silver":"1",
               "bronze":"1"
            },
            {
               "name":"Young-Ah Gil",
               "nationality":"KOR",
               "gold":"1",
               "silver":"1",
               "bronze":"1"
            },
            {
               "name":"Zhao Yunlei",
               "nationality":"CHN",
               "gold":"2",
               "silver":"0",
               "bronze":"0"
            }
         ]
      }
   },
   {
      "name":"Atletismo",
      "description":"Corrida, saltos, lançamentos e arremessos. Um dos esportes mais tradicionais dos Jogos Olímpicos, o atletismo é disputado desde Atenas 1896, primeira edição da era moderna. É, hoje, o que distribui o maior número de medalhas: 141, sendo 47 de ouro.",
      "records":{
         "male":[
            {
               "name":"Paavo Nurmi",
               "nationality":"FIN",
               "gold":"9",
               "silver":"3",
               "bronze":"0"
            },
            {
               "name":"Carl Lewis",
               "nationality":"USA",
               "gold":"9",
               "silver":"1",
               "bronze":"0"
            },
            {
               "name":"Ray Ewry",
               "nationality":"USA",
               "gold":"8",
               "silver":"0",
               "bronze":"0"
            }
         ],
         "female":[
            {
               "name":"Merlene Ottey-Page",
               "nationality":"JAM",
               "gold":"0",
               "silver":"3",
               "bronze":"6"
            },
            {
               "name":"Irena Szewinska",
               "nationality":"POL",
               "gold":"3",
               "silver":"2",
               "bronze":"2"
            },
            {
               "name":"Veronica Campbell-Brown",
               "nationality":"JAM",
               "gold":"3",
               "silver":"2",
               "bronze":"2"
            }
         ]
      }
   }
]
```

Retrieving Boxing data in english:

```javascript
var rio2016 = require( 'rio2016' );

rio2016.sport( 'boxing', 'en', function( obj ){
   console.log( obj );
});
```

JSON output:

```JSON
{
   "name":"Boxing",
   "description":"Jabs, crosses, uppercuts... a single punch can make all the difference in boxing. The sport made its Olympic debut at St Louis 1904 and women entered the fray at London 2012. At Rio 2016, there are 13 categories – 10 for men and three for women.",
   "records":{
      "male":[
         {
            "name":"Teófilo Steveson",
            "nationality":"CUB",
            "gold":"3",
            "silver":"0",
            "bronze":"0"
         },
         {
            "name":"Lázló Papp",
            "nationality":"HUN",
            "gold":"3",
            "silver":"0",
            "bronze":"0"
         },
         {
            "name":"Félix Savón",
            "nationality":"CUB",
            "gold":"3",
            "silver":"0",
            "bronze":"0"
         }
      ],
      "female":[
         {
            "name":"Nicola Adams",
            "nationality":"GBR",
            "gold":"1",
            "silver":"0",
            "bronze":"0"
         },
         {
            "name":"Katie Taylor",
            "nationality":"IRL",
            "gold":"1",
            "silver":"0",
            "bronze":"0"
         },
         {
            "name":"Claressa Shields",
            "nationality":"USA",
            "gold":"1",
            "silver":"0",
            "bronze":"0"
         }
      ]
   }
}
```