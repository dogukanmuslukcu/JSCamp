let products =
[
    {id:1,name:"pantolon",unitPrice:70},
    {id:2,name:"kazak",unitPrice:45},
    {id:3,name:"ayakkabı",unitPrice:100},
    {id:4,name:"tişört",unitPrice:30},
    {id:5,name:"gömlek",unitPrice:50}
]

products.map(product=>
    {
        console.log(product)
        console.log(product.name)
    }
    );

    let filteredProducts =products.filter( product=>
       product.unitPrice>=20
    );
 console.log(filteredProducts);

let cartTotal = products.reduce((acc,product)=>
acc + product.unitPrice,0
)
 console.log(cartTotal);
 
 let cartTotal2 = products.filter(p=>p.unitPrice>50).
 map(p=>
    {
        p.unitPrice*=1.18;
        console.log(p);
        return p
    }).reduce((acc,p)=>acc+p.unitPrice,0);
    console.log(cartTotal2);