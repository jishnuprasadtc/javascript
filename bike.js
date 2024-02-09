var bike={
    name:"bullet",
    brand:"re",
    price:500000,
    model:2024,
    offer:7000
}
if("offer" in bike){
    bike.offer+=2000
}
else{
    bike.offer=10000
}
console.log(bike);