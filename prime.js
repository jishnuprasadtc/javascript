var num=13
isprime=true

for(let i=2;i<num;i++){
    if(i%num==0){
        isprime=false
        break
    }
}

console.log(isprime);

