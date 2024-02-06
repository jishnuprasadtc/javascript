var text="jishnuprasad"

var vowel="aeiou"

var newtxt=text.toLowerCase()

v_count=0
c_count=0

for(let ch of newtxt){  //for taking the charater we use (OF) //(IN) for index
    vowel.includes(ch)?v_count++ :c_count++
}
console.log(v_count,"vowel count");
console.log(c_count,"const_count");