// OBJECTS
var employee={
    code:"1245",
    name:"jishnu",
    department:"Developer",
}
console.log(employee.name);


employee.salary="70000"
console.log(employee);

if("department" in employee){
    console.log("found");
}
else{
    console.log("not found");
}