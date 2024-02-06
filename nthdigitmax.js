// function nthdigitmax(num1,num2){
//     if(num1%10>num2%10)
//     return num1
// else{
//     return num2
// }

// }
// console.log(nthdigitmax(127,482)); 



function nthdigitmax(n1,n2){
    return n1%10>n2%10?n1:n2
}
console.log(nthdigitmax(127,870));