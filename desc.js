let arr = [1, 2, 3, 4];
arr.push(5);    // [1, 2, 3, 4, 5]
arr.push(7);    // [1, 2, 3, 4, 5, 7]

arr.pop();      // return 7, arr = [1, 2, 3, 4, 5]
arr.shift();    // return 1, arr = [2, 3, 4, 5]

// Iteration
for (let i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);    // [2, 3, 4, 5]
}

for (let index in arr) {
    console.log(arr[index]);    //  [2, 3, 4, 5]
}

for (let element of arr) {
    console.log(element);   //  [2, 3, 4, 5]
}

arr.forEach(function (element, index) {
    console.log(element);
    console.log(arr[index]);
});

arr.slice(1, 2);    // return 3, arr = [2, 3, 4, 5]

let arr2 = Array.from(arr);     // arr2 = [2, 3, 4, 5]
arr2[0] = 5;    // arr2 = [5, 3, 4, 5], arr = [2, 3, 4, 5]

arr2 = arr;
arr2[0] = 5;    //  arr2 = [5, 3, 4, 5], arr = [5, 3, 4, 5]

arr.splice(1, 2);   // return [3, 4], arr = [5, 5]
arr.splice(1, 1, 5, 6, 7)   // return [5], arr = [5, 5, 6, 7]
arr.splice(0, 2, [5, 6, 7]);    // return [5, 5], arr = [[5, 6, 7], 6, 7]
arr.splice(0, 1);    // arr = [6, 7]


arr.concat()    // return [6, 7]
arr.concat([8, 9, 10]);     // return [6 ,7, 8, 9, 10], arr = [6, 7]

arr.map(function(value) {
    return value*value;     // return [36, 49], arr = [6, 7]
});

arr.filter(function (value) {
    return value === 7;      // return [7], arr = [6, 7]
})

let sum = arr.reduce(function(prevVal, currentValue, index, array){
    return prevVal + currentValue;      // return 13, arr = [6, 7]
})

sum = arr.reduce(function(prevVal, currentVal, index, array) {
    return prevVal + currentVal;    // return 13, arr = [6, 7]
}, 5);  // 13 + 5

function Matrix(rows, cols) {
    var arr = [];
    for(var i =0;i<rows;i++) {
        arr.push(new Array(cols));
    }
    return arr;
}
