'use strict';

angular.module('dictionaryApp')
  .controller('MainCtrl', function ($scope, Wordservice) {
  	
  	Wordservice.getCount().success(function(count) {
       	$scope.count = count;
   	});
  		
  	Wordservice.getRandomWord().success(function(word) {
  		$scope.word = word[0];
  	});

  	//$scope.count = "hello";
  });
