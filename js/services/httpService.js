angular.module('library').factory('HttpService', function($http) {
    var service = {
        query: function() {
            return $http.get('/books');
            
        },
        get: function(id) {
            return $http.get('/books/' + id);
        },
        save: function(data) {
            if(angular.isDefined(data.bookid)) {
                return $http.post('/books/' + data.bookid, data);
            } else {
                return $http.post('/books', data);
            }
        },
        delete: function(id) {
            return $http.delete('/books/' + id);
        }
    };
    
    return service;    
})
