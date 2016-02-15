angular.module('library').run(function($httpBackend, ServerDataModel) {
    
    $httpBackend.whenGET('/books').respond(function(method, url, data) {
        var books = ServerDataModel.findAll();
        return [200, books, {}];
    });
    
    $httpBackend.whenGET(/\/books\/\d+/).respond(function(method, url, data) {
        // parse the matching URL to pull out the id (/books/:id)
        var bookid = url.split('/')[2];
        
        var book = ServerDataModel.findOne(bookid);

        return [200, book, {}];
    });

    // this is the creation of a new resource
    $httpBackend.whenPOST('/books').respond(function(method, url, data) {
        var params = angular.fromJson(data);

        var book = ServerDataModel.addOne(params);
        
        // get the id of the new resource to populate the Location field
        var bookid = book.bookid;
        
        return [201, book, { Location: '/books/' + bookid }];
    });

    // this is the update of an existing resource (ngResource does not send PUT for update)
    $httpBackend.whenPOST(/\/books\/\d+/).respond(function(method, url, data) {
        var params = angular.fromJson(data);

        // parse the matching URL to pull out the id (/books/:id)
        var bookid = url.split('/')[2];
        
        var book = ServerDataModel.updateOne(bookid, params);
        
        return [201, book, { Location: '/books/' + bookid }];
    });
    
    // this is the update of an existing resource (ngResource does not send PUT for update)
    $httpBackend.whenDELETE(/\/books\/\d+/).respond(function(method, url, data) {
        // parse the matching URL to pull out the id (/books/:id)
        var bookid = url.split('/')[2];
        
        ServerDataModel.deleteOne(bookid);
        
        return [204, {}, {}];
    });    
    
    $httpBackend.whenGET(/templates\//).passThrough();
    
});

                