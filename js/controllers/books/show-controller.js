(function(){
  angular.module('library')
  .controller('showController', showController);

  function showController($scope, $routeParams, $location){
    $scope.book = library_books[$routeParams.id-1] 
    $scope.redirectToEdit = function(){
      $location.path('/edit/'+$routeParams.id)
    }
  }

})();