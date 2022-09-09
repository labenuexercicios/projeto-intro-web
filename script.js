const author1 = 'John Ronald Reuel Tolkien';
const numberBooks1 = 40;
const live1 = false;
const bestBook1 = ['The Silmarillion', ' The Lord Of The Rings', ' The Hobbit']

const author2 = 'CS Lewis';
const numberBooks2 = 49;
const live2 = false;
const bestBook2 = ['Till We Have Face','The Screwtappers Letters', 'Chronicles Of Narnia: The Last Battle']


const author3 = 'John Piper';
const numberBooks3 = 49;
const live3 = true;
const bestBook3 = ['Desiring God', 'Providence', 'Don´t Waste Your Cancer']

let media = (numberBooks1+numberBooks2+numberBooks3)/2
console.log(media);

const authorsLive = live1 && live2 && live3
console.log(authorsLive, "\n\n---------------------------\n")

console.log(`${author1.toUpperCase()}\nBooks released: ${numberBooks1}\nAlive: ${live1}\nBest books: ${bestBook1}`, "\n\n---------------------------\n")
console.log(`${author2.toUpperCase()}\nBooks released: ${numberBooks2}\nAlive: ${live2}\nBest books: ${bestBook2}`, "\n\n---------------------------\n")
console.log(`${author3.toUpperCase()}\nBooks released: ${numberBooks3}\nAlive: ${live3}\nBest books: ${bestBook3}`, "\n\n---------------------------\n")