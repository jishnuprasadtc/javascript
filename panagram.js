var text="A quick brown fox jumps over the lazy dog"

var newtxt=text.toLowerCase()

var alphabets="abcdefghijklmnopqrstuvwxyz"
var panagram=true

for(let ch of alphabets){

    if (!newtxt.includes(ch)){  //for taking a single charater
        panagram=false
        break
    }
    

}
console.log(panagram);