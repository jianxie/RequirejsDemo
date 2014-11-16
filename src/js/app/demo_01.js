/**
 * 
 */
define(["require","helper/util", "lib/jquery"],function(require, util, jquery){
//	var $$ = require('jquery');
	return {
		color:"black",
		zice:"unisize",
		say: function(){
			console.log(util.name);
			console.log($().jquery);
			console.log(jquery().jquery);
		}	
	};
});
