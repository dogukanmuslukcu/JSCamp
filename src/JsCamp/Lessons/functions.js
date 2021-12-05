function addToCart(productName="elma",quantity=1) {
   console.log("Sepete eklendi : " + productName + " Adet : " +  quantity);
}
addToCart("bilgisayar",58);
addToCart();

let sayHello = () =>{
    console.log("Hello world!");
}
sayHello();

function addToCart4(a) {
    console.log(b);
}
 let products=[
    {productName:"elma",unitPrice:10,quantity:5},
    {productName:"karpuz",unitPrice:10,quantity:5},
    {productName:"armut",unitPrice:10,quantity:5}
]
//addToCart4(products);
let a ="metin";
let b =10;
addToCart4(a);
addToCart4(b);

let numbers=[5,26,2556,2564,]
console.log(Math.max(...numbers));