let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];


let one=[...numsOne,...numsTwo];
let two=numsOne.concat(numsTwo);
let three=Object.values([...numsOne,...numsTwo])
let four=Object.assign([],[...numsOne,...numsTwo])

console.log(one)
console.log(two)
console.log(three)
console.log(four)
// [1, 2, 3, 4, 5, 6]