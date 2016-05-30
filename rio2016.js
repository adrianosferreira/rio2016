var cheerio = require( 'cheerio' )
  , request = require( 'request' )
  , url     = require( 'url' )
  , replay  = require( 'request-replay' )
  , fs      = require( 'fs' );

exports.calendar = function(mode, lang, callback ){
	switch( lang ){
		case 'pt_br':
			url = 'https://www.rio2016.com/calendario-e-resultados';
			break;
		case 'en':
			url = 'https://www.rio2016.com/en/schedule-and-results';
			break;
		case 'es':
			url = 'https://www.rio2016.com/es/calendario-y-resultados';
			break;
		case 'fr':
			url = 'https://www.rio2016.com/fr/calendrier-et-resultats';
			break;
	}
	replay(request(url, function( err, res, body ){
		if( err ){
			callback( err );
		}else{
			$ = cheerio.load(body);
			calendar = [];
			days = '.static-sport-daily-calendar__days';
			sports = '.schedule-general-table__sports.active tr';
			sportName = '.schedule-general-table__td--name';
			sportsDay = '.schedule-general-table__td';
			$( days ).each(function( index ){
				sportJSON = {};
				day = index + 3;
				$( sports ).each(function(){
					sport = $( this ).find( sportName ).text().trim();
					sportEvent = $( this ).find( sportsDay ).slice( index + 1 ).first().find( 'span' ).attr( 'class' );
					if( sportEvent ){
						if( sportEvent.search( "medal" ) > 0 ){
							sportJSON[sport] = "medal";
						}
						if( sportEvent.search( "competition" ) > 0 ){
							sportJSON[sport] = "competition";
						}
						if( sportEvent.search( "star" ) > 0 ){
							sportJSON[sport] = "cerimony";
						}
					}
				});
				calendar.push({
					day: day,
					events: sportJSON
				});
			});
			fs.writeFile( 'calendar.json', JSON.stringify( calendar ), "utf8" );

			if( mode == 'full' ){
				fs.readFile( './calendar.json', 'utf8', ( err, data ) => {
					if( err ) callback( err );
					callback( data );
				});
			}

			if( !isNaN( mode ) ){
				fs.readFile( './calendar.json', 'utf8', ( err, data ) => {
					if( err ) callback( err );
					calendar = JSON.parse( data )
					for (var i = 0; i < calendar.length; i++) {
						if( calendar[i]['day'] == mode )
							callback( JSON.stringify( calendar[i]['events'] ) );
					}
				});	
			}
		}
	}));
}