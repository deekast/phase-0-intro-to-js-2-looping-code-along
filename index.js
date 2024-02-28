// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//       }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

let thankYouArray= [];

function writeCards(names) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}


function countDown(number){
    for (let i = number; i >= 0; i--)
    console.log(i)
}
