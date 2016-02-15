(function(){
  angular.module('library')
  .controller('showController', showController);

  function showController($scope, $routeParams){
    $scope.book = library_books[$routeParams.id-1] 
  }
})();