(function(){
  angular.module('library')
  .controller('indexController', indexController);
  
  function indexController ($scope, HttpService, ServerDataModel){
    $scope.dataModal = ServerDataModel;
    debugger
    $scope.queryResults = [
    {
      bookid: 1,
      author: "by Álvaro Enrigue",
      title: "Sudden Death",
      // publish_date: new Date(2014, 4, 7),
      image: 'images/book1.jpg',
      description: 'A daring, kaleidoscopic novel about the clash'+
        'of empires and ideas in the sixteenth century that continue'+
        'to reverberate throughout modernity—a story unlike anything'+
        'you’ve ever read before. Sudden Deathbegins with a brutal'+
        'tennis match that could decide the fate of the world.'
    }];
    
    $scope.queryReset = function() {
        $scope.queryResults = [];
    };
    
    $scope.queryHttp = function() {
        HttpService.query().then(function(response) {
            $scope.queryResults = response.data;
        });
    };
    
    // $scope.queryResource = function() {
    //     $scope.queryResults = ResourceService.query();
    // };
    
    // $scope.queryHttp();

  }
})();