// no number limit
// duplicate allowe
// indexing  method

// var arr=[10,20,30,40,50]
// console.log(arr[2]);


// for(let i=0;i<arr.length;i++){ //i<arr.length; taking the upto the last
//     console.log(arr[i]);
// }


// for(let num of arr){
//     // console.log(num);
// }


// arry method
// .)push last add
// .)unshift 1st add
// .)pop to remove last element
// .)shif to remove 1st element

// arr.push(100)
// console.log(arr);

// arr.unshift(90)
// console.log(arr);


// arr.pop()
// console.log(arr);


// arrpow function =>



// arr.shift()
// console.log(arr);

// map() taking all 
// filter() filetr according the condition
// reduce()processing the entire and taking one
// sort()
// var arr=[10,20,30,40,20,10,50,50]

// function square(n1){
//     return n1**2
// }


// MAP
// var cube= arr.map(n=>n**3)
// console.log(cube);

// var addfive=arr.map(n=>n+5)
// console.log(addfive);


// FILTER
// var lessthan=arr.filter((n)=>n>30)
// console.log(lessthan);


// var even=arr.filter((n)=>n%2==0)
// console.log(even);

// REDUCE
// var sum= arr.reduce((n1,n2)=>n1+n2)
// console.log(sum);

// var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);

// var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(min);

// SORT
// arr.sort((o1,o2)=>o1-o2)//acs
// console.log(arr);

// arr.sort((o1,o2)=>o2-o1)//dsc
// console.log(arr);


var arr=[8,70,9,1]

var number=arr.sort()

var total=number.reverse((n1,n2)=>String(n1)+String(n2))
console.log(total);