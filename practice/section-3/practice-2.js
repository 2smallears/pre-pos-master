function create_updated_collection(collection_a, object_b) {
  
  var collection_a = [
    {key: "a", count: 3},
    {key: "e", count: 7},
    {key: "h", count: 11},
    {key: "t", count: 20},
    {key: "f", count: 9},
    {key: "c", count: 8},
    {key: "g", count: 7},
    {key: "b", count: 6},
    {key: "d", count: 5}];

  var object_b = {value: ["a", "d", "e", "f"]};
  
  var new_collection_a = collection_a;
  
  for(var i = 0; i < new_collection_a.length; i++){
     
      if(have_same_element(new_collection_a[i].key, object_b)){
          
          if(new_collection_a[i].count >= 3){
              
              var counts = Math.floor(new_collection_a[i].count / 3);
              new_collection_a[i].count -= counts;
          }
      }
  }
  return new_collection_a;
}

function have_same_element(element, object) {
    for(var i = 0; i < object.value.length; i++){
        if(element === object.value[i]){
            return true;
        }
    }
}