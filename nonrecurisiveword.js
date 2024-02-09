var text="helloworld"

var wc={}

var charter=text.split("").map((w)=>w in wc?wc[w]+=1:wc[w]=1) 

for(let ch in wc){
    if(wc[ch]==1){
        console.log(ch);

    }
}
