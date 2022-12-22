// it is used to construct? objects
// 2 types of Constructors -- Internal/default ----> External/Explicit

function personDetails(name, age, gender, Occupation){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.Occupation=Occupation;
}
// function personDetails(name, age){
//     this.name=name;
//     this.age=age;
// }

let hD= new personDetails("Hemanth", 26, "Male", "IT Employee");
let bD= new personDetails("Balaji", 31, "Male", "IT Employee");
let h2D= new personDetails("Harsih", 31);
// console.log(hD);
// console.log(bD);
// console.log(h2D);

// let hemanthDetails={
//     "name": "Hemanth", 
//     "age":26, 
//     "gender":"Male"
// }

// let BalajiDetails={
//     "name": "Balaji", 
//     "age":31, 
//     "gender":"Male"
// }

class Car{
    constructor(Name, Brand, Colour){
        this.Name=Name;
        this.Brand=Brand;
        this.Colour=Colour;
    }
}

class CarProperties extends Car{
    constructor(TransissionType, Engine, Seating, Colour, Name){
        super(Colour, Name);
        this.TransissionType=TransissionType;
        this.Engine=Engine;
        this.Seating=Seating;
        super.Colour=Colour;
        super.Name=Name;
    }
    carDetails(){
        console.log("TransissionType - "+this.TransissionType);
        console.log("Engine - "+this.Engine);
        console.log("Seating - "+this.Seating);
        console.log("Colour - "+this.Colour);
        console.log("Name - "+this.Name);
    }
    
}


let cP=new CarProperties("Manual", "Petrol", 5, "Red", "Verna");
cP.carDetails();
