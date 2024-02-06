var string1="ABCD"
var string2="PQ"
output=""
// merging

var smstring=string1.length<string2.length?string1:string2 //take the small string

for(let i=0;i<smstring.length;i++){
    output+=string1[i]+string2[i]
}


var bal=""
if(string1.length>string2.length){
    bal=string1.slice(smstring.length)
}
else{
    bal=string2.slice(smstring.length)
}
output+=bal

console.log(output);