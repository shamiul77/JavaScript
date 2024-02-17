




const myObj = {
    name: "Laptop",
    brand: "HP",
    model: "V24",
    color: "",
    price: 20000
    };
    const y = {};
    for (let x in myObj) {
    if (myObj[x] !== null && myObj[x] !== undefined && myObj[x] !=="")
    y[x] = myObj[x];
    }
    {
    }
    console.log(y); 