const items = [
    {name: 'Bike',  price: 100 },
    {name: 'TV',  price: 200 },
    {name: 'Album',  price: 10 },
    {name: 'Book',  price: 5 },
    {name: 'Phone',  price: 500 },
    {name: 'Computer',  price: 1000 },
    {name: 'Keyboard',  price: 25 },
]

//get items priced <= 100
const filteredItems = items.filter((item) => {
    return item.price <= 100
    //new array
})

//get names of items
const itemNames = items.map((item)=>{
    return item.name;
    //new array
})

//find some value
const findItem = items.find((item)=>{
    return item.name === 'Book';
    //retruns object 
})

//forEach
items.forEach((item) => {
    console.log(item.price);
})


const lowCostItems = items.some((items) => {
    return item.price <= 100;
    //returns true/ false
})
const inexpensiveItems = items.every((items) => {
    return item.price <= 1000;
    //returns true/ false
})


const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)



// console.log(items);
// console.log(filteredItems);
// console.log(itemNames);
console.log(findItem);


const numbers = [1, 2, 3, 4, 5, 6, 7]

const includesThis = items.includes(7) //returns true/false

console.log(includesThis); //True