// Needed Output
let test=new Set([10]);

test.add(20).add(test.size)

console.log(test)


let testArray=[...test.values()]

console.log(testArray[testArray.length-1])

// Set(3) {10, 20, 2}
// 2