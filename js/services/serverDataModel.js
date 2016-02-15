angular.module('library', ['ngRoute', 'ngMock']).service('ServerDataModel', function ServerDataModel() {
    this.data = [
        {
            bookid: 1,
            author: "by Álvaro Enrigue",
            title: "Sudden Death",
            publish_date: new Date(2014, 4, 7),
            image: 'images/book1.jpg',
            description: 'A daring, kaleidoscopic novel about the clash'+
              'of empires and ideas in the sixteenth century that continue'+
              'to reverberate throughout modernity—a story unlike anything'+
              'you’ve ever read before. Sudden Deathbegins with a brutal'+
              'tennis match that could decide the fate of the world.'
        },
        {
            bookid: 1,
            author: "by Álvaro Enrigue",
            title: "Sudden Death",
            publish_date: new Date(2014, 4, 7),
            image: 'images/book1.jpg',
            description: 'A daring, kaleidoscopic novel about the clash'+
              'of empires and ideas in the sixteenth century that continue'+
              'to reverberate throughout modernity—a story unlike anything'+
              'you’ve ever read before. Sudden Deathbegins with a brutal'+
              'tennis match that could decide the fate of the world.'
        },
        {
            bookid: 1,
            author: "by Álvaro Enrigue",
            title: "Sudden Death",
            publish_date: new Date(2014, 4, 7),
            image: 'images/book1.jpg',
            description: 'A daring, kaleidoscopic novel about the clash'+
              'of empires and ideas in the sixteenth century that continue'+
              'to reverberate throughout modernity—a story unlike anything'+
              'you’ve ever read before. Sudden Deathbegins with a brutal'+
              'tennis match that could decide the fate of the world.'
        }        
    ];
    
    this.getData = function() {
        return this.data;
    };
    
    this.setData = function(data) {
        this.data = data;
    };
   
    this.findOne = function(bookid) {
        // find the book that matches that id
        var list = $.grep(this.getData(), function(element, index) {
            return (element.bookid == bookid);
        });
        if(list.length === 0) {
            return {};
        }
        // even if list contains multiple items, just return first one
        return list[0];
    };
   
    this.findAll = function() {
        return this.getData();
    };
    
    // options parameter is an object with key value pairs
    // in this simple implementation, value is limited to a single value (no arrays)
    this.findMany = function(options) {
        // find books that match all of the options
        var list = $.grep(this.getData(), function(element, index) {
            var matchAll = true;
            $.each(options, function(optionKey, optionValue) {
                if(element[optionKey] != optionValue) {
                    matchAll = false;
                    return false;
                }
            });
            return matchAll;
        });        
    };
    
    // add a new data item that does not exist already
    // must compute a new unique id and backfill in
    this.addOne = function(dataItem) {
        // must calculate a unique ID to add the new data
        var newId = this.newId();
        dataItem.bookid = newId;
        this.data.push(dataItem);
        return dataItem;
    };
    
    // return an id to insert a new data item at
    this.newId = function() {
        // find all current ids
        var currentIds = $.map(this.getData(), function(dataItem) { return dataItem.bookid; });
        // since id is numeric, and we will treat like an autoincrement field, find max
        var maxId = Math.max.apply(Math, currentIds);
        // increment by one
        return maxId + 1;
    };
    
    this.updateOne = function(bookid, dataItem) {
        // find the book that matches that id
        var books = this.getData();
        var match = null;
        for (var i=0; i < books.length; i++) {
            if(books[i].bookid == bookid) {
                match = books[i];
                break;
            }
        }
        if(!angular.isObject(match)) {
            return {};
        }
        angular.extend(match, dataItem);
        return match;
    };
    
    this.deleteOne = function(bookid) {
        // find the book that matches that id
        var books = this.getData();
        var match = false;
        for (var i=0; i < books.length; i++) {
            if(books[i].bookid == bookid) {
                match = true;
                books.splice(i, 1);
                break;
            }
        }
        return match;
    };
    
});
