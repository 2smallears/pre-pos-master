function collect_same_elements(collection_a, collection_b) {

    var collection_new = [];

    for (var i = 0; i < collection_a.length; i++){

        if(isExsit(collection_a[i], collection_b)){
            collection_new.push(collection_a[i]);
        }
    }
    return collection_new;
}

function isExsit(element, collection) {

    for(var i = 0; i <collection.value.length; i++){

        if(element === collection.value[i]){
            return true;
        }
    }
}