function create_updated_collection(collection_a, object_b) {
   
   var object_b = {value: ["a", "d", "e", "f"]};
   
   var collection_a = [
    {key: "a", count: 2},
    {key: "e", count: 2},
    {key: "h", count: 2},
    {key: "t", count: 2},
    {key: "f", count: 2},
    {key: "c", count: 2},
    {key: "g", count: 2},
    {key: "b", count: 2},
    {key: "d", count: 2}];
  
  var new_collection_a = collection_a;
  
  for (var i = 0; i < new_collection_a.length; i++){
      if(have_same_element(new_collection_a[i].key, object_b)){
          new_collection_a[i].count --;
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