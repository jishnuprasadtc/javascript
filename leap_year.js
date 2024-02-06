year=2025
if(year%100==0 && year%400==0 ||year%100!=0 && year%4==0){
    console.log("leapYear");
}
else{
    console.log("non leapyear");
}