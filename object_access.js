

const product=[
    {
        Category : "Laptop",
        Brand :"Acer",
        Model :"Nitro 17",
        Color : "Black",
        Price : 142000 

    },
    {
        Category : "Jeans",
        Brand : "Columbia",
        Model : "1556531",
        Color : "black",
        Price : 5499
    },
    {
        Category : "Shoes",
        Brand : "Puma",
        Model : "B0BR5MF1MC",
        Color : "Black",
        Price : 1399
    }, 
    {   Category : "Headphone",
        Brand : "Sony",
        Model : "MDR-ZX110",
        Color : "Black",
        Price : 900
    },
    {
        Category : "Mobile",
        Brand : "Motorola",
        Model : "Moto G Stylus",
        Color : "Parpel",
        Price : 129000
    },
    {
        Category : "Jacket",
        Brand : "Southpole",
        Model : "B07BRGLGHR",
        Color : "Yellow",
        Price : 1499
    },
    {
        Category : "Shoes",
        Brand : "Skechers",
        Model : "54601",
        Color : "Black",
        Price : 5400
    },
    {
        Category : "Jeans",
        Brand : "Amazon Essentials",
        Model : "F17AE25000",
        Color : "N/A",
        Price : 1100
    },
    {
        Category : "Gavadin Pant",
        Brand : "Wrangler",
        Model : "ZM1CSCB",
        Color : "Navyblue",
        Price : 1850 
    },
    {
        Category : "Jacket",
        Brand : "Hanes",
        Model : "O055P",
        Color : "Navyblue",
        Price : 1400
    }
]

for(i = 0; i<product.length; i++){  // access with for loop
if (product[i].Brand == "Hanes"){
product[i].Brand = "Easy"       //replace the object value
}
if (product[i].Price == 1400){
    product[i].Price = 1500     //replace the object value
    }
    console.log(`Name: ${product[i].Brand}  \nPrice: ${product[i].Price}`)  //print Brand and Price
}
console.log(product);
