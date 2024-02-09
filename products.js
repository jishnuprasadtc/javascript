var items=[
    {code:"10ac",title:"onion",price:45,avlQty:50},
    {code:"11ad",title:"potatto",price:55,avlQty:75},
    {code:"10ae",title:"tomatto",price:35,avlQty:50},
    {code:"10af",title:"cabbage",price:30,avlQty:25},
    {code:"10ag",title:"brinjal",price:23,avlQty:0},
    {code:"10ah",title:"garlic",price:400,avlQty:0},
    {code:"10ai",title:"ginger",price:350,avlQty:80},

]

// print total number of products

// console.log(items.length);

// print all title of item

// var producttitle=items.map((p)=>p.title)
// console.log(producttitle);

// print unavaliablity


// var stockitems=items.filter((p)=>p.avlQty==0).map((p)=>p.title)
// console.log(stockitems);

// print instock

// var instock=items.filter((p)=>p.avlQty!=0).map((p)=>p.title)
// console.log(instock);

// costly product item


// var costly=items.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
// console.log(costly.title);

// availabilty of product

// var availabilty=items.some((p)=>p.title=="onion")
// console.log(availabilty);


// print product title availble more than 50

// var greaterprice=items.filter((p)=>p.price>50 && p.avlQty!=0).map((p)=>p.title)
// console.log(greaterprice);

// sort with respect to price

items.sort((p1,p2)=>p1.price-p2.price).forEach(p=>console.log(p.title,p.price))



