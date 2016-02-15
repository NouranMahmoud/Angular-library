  angular.module('library', ['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: '/templates/books/index.html',
      controller: 'indexController',
      controllerAs: 'indexCtrl'
    });
    // .when('/books',{redirectTo: '/'})
    // .when('/book/:id', {
    //   templateUrl: '/templates/books/show.html'
    // })
    // .when('/ ', {
    //   templateUrl: '/templates/books/new.html'
    // })
    // .otherwise({
    //   redirectTo: '/'
    // });
});
