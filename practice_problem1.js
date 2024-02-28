let mobileinfo=[
    {
        id:1,
        model: "iphone 6s",
        price: 20000,
        Brand: "apple",
        Ram: "2GB"
    },
    {
        id: 2,
        model: "realme 13",
        price: 20000,
        Brand: "realme",
        Ram: "2GB"
    },
    {
        id:3,
        model: "redmi 12",
        price: 20000,
        Brand: "redmi",
        Ram: "2GB"
    }
]


// const updatedArr = (arr)=>{
// let copy = [...arr]
// for(let i=0;i<copy.length;i++){
//     if(copy[i].id===3){
//       copy[i].Brand="MI"
//     }
// }
    
// return copy
// }
// console.log(updatedArr(mobileinfo))




const update= mobileinfo.map((item)=>{
    if(item.id===3){
        item.Ram="10GB"
    }
    return item
})
console.log(update)
console.log(mobileinfo)

