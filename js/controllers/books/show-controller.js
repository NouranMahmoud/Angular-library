(function(){
  angular.module('library')
  .controller('showController', showController);

  function showController($scope, $routeParams, $location){
    // $scope.book = library_books[$routeParams.id-1]
     
    $scope.book = getSelectedBook($routeParams.id);
    $scope.redirectToEdit = function(){
      $location.path('/edit/'+$routeParams.id)
    }
    $scope.remove = function(){
      library_books.forEach(function(book, index){
        if(book.id == $routeParams.id){
          library_books.splice(index, 1);
        }
      });
     $location.path('/');
    }
  }

})();
window.getSelectedBook = function(bookId){
  var book =  library_books.filter(function(item){
    // I use == to make type conversion be itself
    return item.id == bookId;
  });
  return book[0]
};