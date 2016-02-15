  angular.module('library', ['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: '/templates/books/index.html',
      controller: 'indexController',
      controllerAs: 'indexCtrl'
    })
    // .when('/books',{redirectTo: '/'})
    .when('/book/:id', {
      templateUrl: '/templates/books/show.html',
      controller: 'showController',
      controllerAs: 'showCtrl'
    })
    .when('/new', {
      templateUrl: '/templates/books/new.html',
      controller: 'createController',
      controllerAs: 'createCtrl'
    });
    // .otherwise({
    //   redirectTo: '/'
    // });
});
