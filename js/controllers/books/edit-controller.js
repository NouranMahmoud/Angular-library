(function(){
  angular.module('library')
  .controller('editController', editController)

  function editController($scope, $location, $routeParams){
    $scope.book = library_books[$routeParams.id-1]
    $scope.updateBook = function(model){
      model.id = $routeParams.id
      library_books[model.id-1] = model;
      $location.path('/book/'+model.id);
    };
  }
})();