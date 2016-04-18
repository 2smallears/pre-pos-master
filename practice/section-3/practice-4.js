function create_updated_collection(collection_a, object_b) {
  var collection_a = [
    "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
    "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c", "c", "c", "c", "c", "c", "c", "c",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d-5"
  ];


  var object_b = {value: ["a", "d", "e", "f"]};

  collection_c = count_same_element(collection_a);
    
    for(var i = 0; i < collection_c.length; i++){
        if(have_same_element(collection_c[i].key, object_b)){
            if(collection_c[i].count >= 3){
                var counts = 0;
                counts = Math.floor(collection_c[i].count / 3);
                collection_c[i].count -= counts;
            }
        }
    }
    return collection_c;
}

function count_same_element(collection) {
  var new_collection = [ {key: "a", count: 0},
      {key: "e", count: 0},
      {key: "h", count: 0},
      {key: "t", count: 0},
      {key: "f", count: 0},
      {key: "c", count: 0},
      {key: "g", count: 0},
      {key: "b", count: 0},
      {key: "d", count: 0}];
    for(var i = 0; i < collection.length; i++){
        if(collection[i].length > 1){
            for(var m = 0; m < new_collection.length; m++){
            if(collection[i][0] === new_collection[m].key){
                new_collection[m].count = parseInt(collection[i][2]);
            }
        }
            continue;
        }
        for(var j = 0; j < new_collection.length; j++){
            if(collection[i] === new_collection[j].key){
                new_collection[j].count++;
            }
        }
    }
    return new_collection;
}

function have_same_element(element, object) {
    for(var i = 0; i < object.value.length; i++){
        if(element === object.value[i]){
            return true;
        }
    }
}