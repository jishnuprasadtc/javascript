var text="hello word hello word hello word"

// var word=text.split(" ")

var wc={}


// for(let w of word){
//     if(w in wc ){
//         wc[w]+=1

//     }
//     else{
//         wc[w]=1
//     }
// }
// console.log(wc);
text.split(" ").map(w=>w in wc?wc[w]+=1:wc[w]=1)
console.log(wc);
