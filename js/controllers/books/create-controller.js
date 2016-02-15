(function(){
  angular.module('library')
  .controller('createController', createController)

  function createController($scope, $location){
    $scope.saveBook = function(model){
      library_books.push(model);
      model.id = library_books.length
      $location.path('/book/'+model.id);
    };
  }
})();