const product =[              //object
    {
        name: "phone",
        brand: "iphone",
        model: "6s",
        price: 45000
    }
]
for(i=0; i<product.length; i++){    //access the object
    if(product[i].price == 45000){
        product[i] = 50000      //update price 
    }
}
console.log(product);
