
//console.log( "hello world"

// let i =1
// number= 5
// let prime = true
// while(i<=5){
//     if(5%2===0)
//         console.log("even numbers",i)
//     else
//         console.log("odd numbers",i)
//         i++;

// }
 function something()
{
 let name ="Harish"
 console.log(name)

}
something()

let book={"author" :" korapati", "title":"JS", "price":{"price1":100}   }
console.log(book)





let notes=new Object()
notes.title="Harry potter"
notes.price=500
console.log(notes)


// let obj1 = object.create
// ({x:100,y:200});
// let o2=obj1.x+obj1.y;
// console.log(o2)


let day ="tuesday"
switch(day){
    case "monday":
    case "sunday":
        console.log("6am")
        break;
    case "tuesday":
        console.log("7am")    
}
let a =20
console.log( a)

let harish={firstname:"Harish",lastname:"Korapati",age:24, author:{fn:"harinested"},height:6.1}
console.log(harish)
console.log(harish.age)



let rakesh={}
rakesh.fn="Rakesh"
rakesh.ln="korapati"
rakesh.first ="hari"
console.log(rakesh)


let hari=Object.create({ })
console.log(hari)

a=1
b=++a
c=a++
d=--a
e=b++
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

let object={firstname:"hari",secondname:"korapati"}
console.log(object)


let object1=new Object()

object1.fn="harrypotter"
object1.ln="harmoniee"
console.log(object1.fn)


let arr1=[1,2,3,4]
let arr2=[5,6,7]
let arr3=[...arr1,...arr2]
console.log(arr3)