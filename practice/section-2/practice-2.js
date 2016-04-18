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
        
        do_counts(new_collection[i], collection);
    }
    return new_collection;
}

function do_counts(element, collection) {

    for(var i = 0; i < collection.length; i++){
       
        if(collection[i].length != 1 && element.key === collection[i][0]){
           element.count += parseInt(collection[i][2]);
        }
      
        else if(element.key === collection[i]){
            element.count++;
        }
    }
}
