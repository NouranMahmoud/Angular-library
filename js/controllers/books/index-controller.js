(function(){
  angular.module('library')
  .controller('indexController', indexController);
  
  function indexController ($scope){
    $scope.books = library_books;
    $scope.queryHttp = function() {
      HttpService.query().then(function(response) {
          $scope.queryResults = response.data;
      });
    };
  }

  var library_books= [
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
    },
    {
      bookid: 2,
      author: "by Álvaro Enrigue",
      title: "Sudden Death",
      // publish_date: new Date(2014, 4, 7),
      image: 'images/book1.jpg',
      description: 'A daring, kaleidoscopic novel about the clash'+
        'of empires and ideas in the sixteenth century that continue'+
        'to reverberate throughout modernity—a story unlike anything'+
        'you’ve ever read before. Sudden Deathbegins with a brutal'+
        'tennis match that could decide the fate of the world.'
    },
    {
      bookid: 3,
      author: "by Álvaro Enrigue",
      title: "Sudden Death",
      // publish_date: new Date(2014, 4, 7),
      image: 'images/book1.jpg',
      description: 'A daring, kaleidoscopic novel about the clash'+
        'of empires and ideas in the sixteenth century that continue'+
        'to reverberate throughout modernity—a story unlike anything'+
        'you’ve ever read before. Sudden Deathbegins with a brutal'+
        'tennis match that could decide the fate of the world.'
    },
    {
      bookid: 4,
      author: "by Álvaro Enrigue",
      title: "Sudden Death",
      // publish_date: new Date(2014, 4, 7),
      image: 'images/book1.jpg',
      description: 'A daring, kaleidoscopic novel about the clash'+
        'of empires and ideas in the sixteenth century that continue'+
        'to reverberate throughout modernity—a story unlike anything'+
        'you’ve ever read before. Sudden Deathbegins with a brutal'+
        'tennis match that could decide the fate of the world.'
    },
    {
      bookid: 5,
      author: "by Álvaro Enrigue",
      title: "Sudden Death",
      // publish_date: new Date(2014, 4, 7),
      image: 'images/book1.jpg',
      description: 'A daring, kaleidoscopic novel about the clash'+
        'of empires and ideas in the sixteenth century that continue'+
        'to reverberate throughout modernity—a story unlike anything'+
        'you’ve ever read before. Sudden Deathbegins with a brutal'+
        'tennis match that could decide the fate of the world.'
    },
    {
      bookid: 6,
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
})();