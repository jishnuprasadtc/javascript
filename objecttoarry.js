var item={tea:12,coffe:20,milk:29,fiftyfifty:30,oreo:35}

var data=Object.entries(item)

var costly_object=data.reduce((o1,o2)=>o1[1]>o2[1]?o1:o2)

console.log(costly_object);


data.sort((o1,o2)=>o2[1]-o1[1])
console.log(data);