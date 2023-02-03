let theName = "Elzero";


// Needed Output
let one=theName.split("");
let two=Array.from(theName);
let three=[...theName];
let four=Object.assign([],theName);
let five=Object.values(theName);



console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);

let six=[...theName].map(function(ele){
    this.push(ele);
    if(theName.length===this.length){
        console.log(this);
    }
},[])
