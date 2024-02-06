var num=153
var origin=num
var digitCount=String(num).length //taking the count
sum=0

while(num!=0){
    let digit=num%10  //taking the last digit
    let exp=digit**digitCount // taking the expoent 
    sum=sum+exp
    num=Math.floor(num/10)  //making the floor
}
console.log(origin==sum ?"armstorng":"not armstorng");



