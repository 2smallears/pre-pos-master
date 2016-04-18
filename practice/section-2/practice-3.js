function count_same_elements(collection) {
      
  var new_collection = [{name: "a", summary: 0},
                        {name: "e", summary: 0},
                        {name: "h", summary: 0},
                        {name: "t", summary: 0},
                        {name: "f", summary: 0},
                        {name: "c", summary: 0},
                        {name: "g", summary: 0},
                        {name: "b", summary: 0},
                        {name: "d", summary: 0}];

  for(var i = 0; i < new_collection.length; i++){
      
      do_counts(new_collection[i], collection);
  }
  return new_collection;
}

function do_counts(element, collection) {
  for(var i = 0; i < collection.length; i++){
        if(element.name === collection[i]){
            element.summary++;
        }
        else if(collection[i].length === 3 && element.name === collection[i][0]){
           element.summary += parseInt(collection[i][2]);
        }
        else if(collection[i].length > 3 && element.name === collection[i][0]){
           element.summary += counts(collection[i]);
           
        }
  }   
}

function counts(element) {
    var str = element.split("[");
    str = str[1].split("]");
    var num = Number(str[0]);
    return num;
} 