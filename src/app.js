console.log("selam");
//JS type safe değildir.
let dolarDun = 9.20
let dolarBugun = 9.30
dolarDun = "9.35"

{
    let dolarDun = 9.10
}

const euroDun = 11.25
//euroDun = 11.22 bu yapılamaz

console.log(dolarDun)

//array
//camel casing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamut Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
