function numberLength(arr){
    return arr.sort().filter((ele)=>!(isNaN(parseInt(ele)))).length
}
function sortArray(arr){
    let al=[];
    arr.map(ele => isNaN(parseInt(ele))?al.push(ele):al.unshift(ele))
    return al;
}

// 1
let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(sortArray(chars1).copyWithin(0,numberLength(chars1),numberLength(chars1)*2))

// 2
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(sortArray(chars2).copyWithin(0,numberLength(chars2),numberLength(chars2)*2))

// 3
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];


console.log(sortArray(chars3).copyWithin(0,numberLength(chars3),numberLength(chars3)*2))

