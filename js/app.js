  angular.module('library', ['ngRoute', 'ngMock'])
  .config(function($routeProvider){
    debugger
    $routeProvider.when('/', {
      templateUrl: 'templates/books/index.html',
      controller: 'indexController',
      controllerAs: 'indexCtrl'
    })
    .when('/books',{redirectTo: '/'})
    .when('/book/:id', {
      templateUrl: 'templates/books/show.html'
    })
    .when('/new', {
      templateUrl: 'templates/books/new.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
