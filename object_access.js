
   
   const productInfo=[
        {
            Brand :"Acer",
            Model :"Nitro 17",
            Color : "Black",
            Price : 142000 
        },{
            Brand : "Columbia",
            Model : "1556531",
            Color : "black",
            Price : 5499
        },
        {
            Brand : "Puma",
            Model : "B0BR5MF1MC",
            Color : "Black",
            Price : 1399
        }, {
            Brand : "Sony",
            Model : "MDR-ZX110",
            Color : "Black",
            Price : 900
        },
        {
            Brand : "Motorola",
            Model : "Moto G Stylus",
            Color : "Parpel",
            Price : 129000
        },
        {
            Brand : "Southpole",
            Model : "B07BRGLGHR",
            Color : "Yellow",
            Price : 1499
        },
        {
            Brand : "Skechers",
            Model : "54601",
            Color : "Black",
            Price : 5400
        },
        {
            Brand : "Amazon Essentials",
            Model : "F17AE25000",
            Color : "N/A",
            Price : 1100
        },
        {
            Brand : "Wrangler",
            Model : "ZM1CSCB",
            Color : "Navyblue",
            Price : 1850
        },
        {
            Brand : "Hanes",
            Model : "O055P",
            Color : "Navyblue",
            Price : 1400
        },
    
    ]


for(i = 0; i<productInfo.length; i++){
    // console.log(productInfo[i].Brand)
    if (productInfo[i].Brand == "Puma"){
    productInfo[i].Brand = "Easy"
    }
}

console.log(productInfo);

