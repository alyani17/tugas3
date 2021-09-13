function range (start, end) {
    var total = [];

    if(!end){
        end = start;
        start = 1;
    }
    for (var i = start;i < end; i +=1){
        total.push(i);
    }
    return total;
}


console.log(range(10));
console.log(range(5,9));