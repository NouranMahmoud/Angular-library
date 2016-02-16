(function(){
  angular.module('library')
  .controller('indexController', indexController);
  
  function indexController ($scope, $location){
    $scope.books = library_books;
  }

})();

window.library_books= [
    {
      id: 1,
      author: "Álvaro Enrigue",
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
      id: 2,
      author: "Barbara Goldsmith",
      title: "The Inner World of Marie Curie",
      // publish_date: new Date(2014, 4, 7),
      image: 'https://d.gr-assets.com/books/1348693726l/459134.jpg',
      description: 'The best-selling, "excellent . . . poignant—and scientifically '+
        'lucid— portrait" (New York Times Book Review) of the remarkable '+
        'Marie Curie...."Never a dull moment. . . . Goldsmith leads the '+
        'reader through a wonderland of facts with just the right blend of '+
        'science and story. In the end, the mystery of the great Madame .'
    },
    {
      id: 3,
      author: "Jack Foster",
      title: "How to Get Ideas",
      // publish_date: new Date(2014, 4, 7),
      image: 'https://d.gr-assets.com/books/1328854791l/534758.jpg',
      description: 'Written by Jack Foster, a creative director for various advertising '+
        'agencies with more than 40 years experience, How to Get Ideas '+
        '(over 90,000 copies sold and translated into 15 languages) is a '+
        'fun, accessible, and practical guide that takes the mystery and '+
        'confusion out of developing new ideas.'
    },
    {
      id: 4,
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
      id: 5,
      author: "Barbara Goldsmith",
      title: "The Inner World of Marie Curie",
      // publish_date: new Date(2014, 4, 7),
      image: 'https://d.gr-assets.com/books/1348693726l/459134.jpg',
      description: 'The best-selling, "excellent . . . poignant—and scientifically '+
        'lucid— portrait" (New York Times Book Review) of the remarkable '+
        'Marie Curie...."Never a dull moment. . . . Goldsmith leads the '+
        'reader through a wonderland of facts with just the right blend of '+
        'science and story. In the end, the mystery of the great Madame .'
    },
    {
      id: 6,
      author: "Jack Foster",
      title: "How to Get Ideas",
      // publish_date: new Date(2014, 4, 7),
      image: 'https://d.gr-assets.com/books/1328854791l/534758.jpg',
      description: 'Written by Jack Foster, a creative director for various advertising '+
        'agencies with more than 40 years experience, How to Get Ideas '+
        '(over 90,000 copies sold and translated into 15 languages) is a '+
        'fun, accessible, and practical guide that takes the mystery and '+
        'confusion out of developing new ideas.'
    }
    ];