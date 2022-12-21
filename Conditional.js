let a=100;
let b=200;
let c=300;
let d=40;
if(a>b && a>c){
    console.log("A is Greater");
}
else if(b>c){
    console.log("B is Greater");
}else{
    console.log("C is Greater");
}


let day="Tuesday";
switch(day)
{
    case "Monday" : case "Tuesday":
        console.log("Balaji's class");
        break;
   case "Wednesday": case "Thursday":
        console.log("Hemnath's class");
        break;
    case "Friday": case "Saturday":
        console.log("Harish's class");
        break;
    case "Sunday":
        console.log("No class");
        break;
}

if(day=="Monday"){
    console.log("Balaji's class");
}if(day=="Tuesday"){
    console.log("Hemanth's class");
}if(day=="Wednesday"){
    console.log("Harish's class");
}