(function(){
  angular.module('library')
  .controller('editController', editController)

  function editController($scope, $location, $routeParams){
    $scope.book = getSelectedBook($routeParams.id)
    $scope.updateBook = function(model){
      library_books.forEach(function(book, index){
        if(book.id == $routeParams.id){
          library_books[index] = model;
        }
      });
      $location.path('/book/'+model.id);
    };
  }
})();