function count_same_elements(collection){
    
    var new_collection = [{key: "a", count: 0},
                          {key: "e", count: 0},
                          {key: "h", count: 0},
                          {key: "t", count: 0},
                          {key: "f", count: 0},
                          {key: "c", count: 0},
                          {key: "g", count: 0},
                          {key: "b", count: 0},
                          {key: "d", count: 0}];
    
    for(var i = 0; i < new_collection.length; i++){
       
        new_collection[i].count = do_counts(new_collection[i].key, collection);
    }
    return new_collection;
}

function do_counts(element, collection) {

    var counts = 0;

    for(var i = 0; i < collection.length; i++){

        if(element === collection[i]){
            counts++;
        }
    }
    return counts;
}