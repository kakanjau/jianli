// This set's up the module paths for underscore and backbone
require.config({ 
    'paths': { 
    	"jQuery": "../vendor/jquery/dist/jquery",
    	"bootstrap": "../vendor/bootstrap/dist/js/bootstrap"
	},
	'shim': 
	{
		"jQuery": {
			"exports": "jQuery"
		},
		"bootstrap": {
			"deps": ["jQuery"],
			"exports": "bootstrap"
		}
	}	
});

require([
	'bootstrap',
	'./app'
	], 
	function(bootstrap, app){
		app.init();
});
