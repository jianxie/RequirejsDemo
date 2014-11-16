/**
 * require.js  config
 */
require.config({
	baseUrl:'../js',
	paths:{
		app1:'app/demo_01'
	}
});

//requirejs(['app1'],
//	function(demo_01){
//		console.log(demo_01.color);
//		demo_01.say();
//});

require(['app1'],
		function(demo_01){
			console.log(demo_01.color);
			demo_01.say();
	});

//require(['jquery'],
//function($){
//	console.log($().jquery);
//});