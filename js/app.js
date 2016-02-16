(function(){
  var app = angular.module('library', ['ngRoute'])
  
  app.config(function($routeProvider){
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
    })
    .when('/edit/:id', {
      templateUrl: '/templates/books/edit.html',
      controller: 'editController',
      controllerAs: 'editCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });

  app.controller('mainController', mainController);

    function mainController($scope, $location){
      $scope.getClass = function(path){
        if($location.path() === path){
          return 'active';
        }else{
          return '';
        }
    }
  }

})();
