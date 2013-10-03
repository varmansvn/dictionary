'use strict';

angular.module('dictionaryApp')
  .service('Wordservice', function Wordservice($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
    	getCount: function() {
    		var url = 'https://api.mongolab.com/api/1/databases/dictionary/collections/word?c=true&apiKey=_WM-TPsVMEUenxiu9GGh91V_Y2_hYlpu';
    		return $http.get(url);
    	},    	
    	search: function(query, size) {    		
    		var url = 'https://api.mongolab.com/api/1/databases/dictionary/collections/word?q={"title":{"$regex":"^'
    			+query+'","$options":"i"}}&l='+size+'&apiKey=_WM-TPsVMEUenxiu9GGh91V_Y2_hYlpu';
    		return $http.get(url);
    	}
    };
  });
