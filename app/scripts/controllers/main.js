'use strict';

angular.module('dictionaryApp')
  .controller('MainCtrl', function ($scope, Wordservice) {
  	
  	Wordservice.getCount().success(function(count) {
       	$scope.count = count;
   	});
   	  	
  	$scope.search = function(query) {
  		if(!query) {
  			return;  		
  		}  		
  		Wordservice.search(query, 10).success(function(words) {
  			$scope.words = words;
  		});  	
  	}

  });
