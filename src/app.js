//console.log("selam");
//JS type safe değildir.
let dolarDun = 9.20
let dolarBugun = 9.30
dolarDun = "9.35"

{
    let dolarDun = 9.10
}

const euroDun = 11.25
//euroDun = 11.22 bu yapılamaz

//console.log(dolarDun)

//array
//camel casing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamut Konut Kredisi","Özel Konut Kredisi"]

//console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
//    console.log("<li>"+konutKredileri[i]+"</li>")
}
//console.log("</ul>")

//console.log("deneme")

let sayi1 = 10;
sayi1 = "dsadas"
let student = {id:1, name:"Oğuzhan"}
//console.log(student);

let students = ["a","b","c"];

//console.log(students)

let students2 = [student,{id:2, name:"dsadas"}]

//console.log(students2)

let students3 = [students,students2]

//console.log(students3)

//rest
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])    
}

// console.log(typeof showProducts)

// showProducts(10,["elma","armut","karpuz"])

//spread
let points = [1,2,3,4,54,123,321,32,55]

console.log(...points)
console.log(Math.max(...points))
console.log(..."adsa","dsadsa",..."dsadaswq","dsad")

//destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
// console.log(small)
// console.log(medium)
// console.log(high)
// console.log(veryHigh)
// console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1,name:"içecek"};
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)

