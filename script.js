let filme1 = "De Repente Uma Família".toUpperCase();
let genero1 = "comédia/drama";
let anoDeLançamento1 = 2018;
let duracaoEmMinutos1 = 119;
let ehRemake1 = false;
let filmesSemelhantes1 = ['\"O Que Esperar Quando Você Está Esperando\", \"Cartas Para Julieta\", \"Ensinando A Viver\"']

let filme2 = "Tropa De Elite".toUpperCase();
let genero2 = "policial/ação";
let anoDeLançamento2 = 2007;
let duracaoEmMinutos2 = 115;
let ehRemake2 = true;
let filmesSemelhantes2 = ['\"O Rei De Nova York\", \"O Resgate\", \"Atraídos Pelo Crime\"']

let filme3 = "O Sorriso Da Morte".toUpperCase();
let genero3 = "terror";
let anoDeLançamento3 = 2022;
let duracaoEmMinutos3 = 115;
let ehRemake3 = false;
let filmesSemelhantes3 = ['\"Mar Do Medo\", \"Gritos Do Além\", \"Predadores\"']

const mediaItem1 = (anoDeLançamento1 + duracaoEmMinutos1)/2; 
console.log(mediaItem1);

const mediaItem2 = (anoDeLançamento2 + duracaoEmMinutos2)/2; 
console.log(mediaItem2);

const mediaItem3 = (anoDeLançamento3 + duracaoEmMinutos3)/2; 
console.log(mediaItem3);

let verificaRemakes = ehRemake1 && ehRemake2 && ehRemake3;
console.log(verificaRemakes);

console.log(`${filme1} \ngênero: ${genero1} \nano de lançamento: ${anoDeLançamento1} \nduração: ${duracaoEmMinutos1} minutos \nremake: ${ehRemake1} \nfilmes semelhantes: ${filmesSemelhantes1}`);

console.log("");

console.log(`${filme2} \ngênero: ${genero2} \nano de lançamento: ${anoDeLançamento2} \nduração: ${duracaoEmMinutos2} minutos \nremake: ${ehRemake2} \nfilmes semelhantes: ${filmesSemelhantes2}`);

console.log("");

console.log(`${filme3} \ngênero: ${genero3} \nano de lançamento: ${anoDeLançamento3} \nduração: ${duracaoEmMinutos3} minutos \nremake: ${ehRemake3} \nfilmes semelhantes: ${filmesSemelhantes3}`);











