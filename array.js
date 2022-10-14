/* first method we are going to discuss is: */

// filter() method

// we should everything which is not under 100 $

const itemsFirst = [
  { name: "bike", price: 100 },
  { name: "TV", price: 20 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 }
];

const filteredItems = itemsFirst.filter((stuff) => {
  return stuff.price <= 100;
});

console.log(filteredItems);

// OUTPUT
/*

[ { name: 'bike', price: 100 },
  { name: 'TV', price: 20 },
  { name: 'album', price: 10 },
  { name: 'book', price: 5 },
  { name: 'keyboard', price: 25 } ]
  
  */

// next is map() method

const itemsSecond = [
  { name: "bike", price: 100 },
  { name: "TV", price: 20 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 }
];

const mapItems = itemsSecond.map((item) => {
  return item.price;
});

console.log(mapItems);

// OUTPUT -->  [ 100, 20, 10, 5, 500, 1000, 25 ]

const itemsThird = [
  { name: "bike", price: 100 },
  { name: "TV", price: 20 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 }
];

const findItems = itemsThird.find((item) => {
  return item.name === "phone";
});

console.log(findItems);

// OUTPUT --> { name: 'phone', price: 500 }
// ამ შემთხვევაში მოგცვა ის ობიექტი, რომელიც პირველი შეხვდა
// array ში. object which name Property was "book".

/* 
when using arrow functions, if you have only one argument you can omit the brackets, and if the function body is only one expression, you can omit return too. That is, you can just use,

items.map(item => item.name)

*/
// Array.find() will return <undefined> if no item matches the condition you specified.

const itemsFourth = [
  { name: "bike", price: 100 },
  { name: "TV", price: 20 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 }
];

itemsFourth.forEach((items) => {
  console.log(items.price);
});

/* OUTPUT
bike
TV
album
book
phone
computer
keyboard
*/

const items = [1, 2, 3, 4, 5, 7];

const includesTwo = items.includes(2);

console.log(includesTwo);

// OUTPUT --> true  it gives us true or false boolean
