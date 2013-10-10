'use strict';

angular.module('dictionaryApp', ['pascalprecht.translate'])
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })  
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
      'KHMER': 'Khmer',
      'ENGLISH': 'English',
      'TITLE': 'Khmer Dictionary',
      'SEARCH': 'Search',
      'COUNT': 'Word Count'
    });
    $translateProvider.translations('km', {
      'KHMER': 'ភាសាខ្មែរ',
      'ENGLISH': 'ភាសាអង់គ្លេស',
      'TITLE': 'វចនានុក្រមខ្មែរ',
      'SEARCH': 'ស្វែងរក',
      'COUNT': 'ចំនួនពាក្យសរុប'
    }); 
    $translateProvider.preferredLanguage('km');
  }]);
