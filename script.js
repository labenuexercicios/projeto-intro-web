// semana 4 //

// Pet's

Pet = { 

    nome: "Ozzy",
    idade: 8,
    dog: true,
    alimentacao:  [ "Ração" , "Arroz" , "linguiça" ],
};

Pet2 = {

    nome: "Erick",
    idade: 15,
    dog: true,
    alimentacao: [ "Ração" , "Arroz" , "linguiça" , "Palitinhos" ],

};

Pet3 = {

    nome: "Alice",
    idade: 5,
    dog: false,
    alimentacao: [ "Ração"],

};

let animais = [];

if(Pet.dog){
    animais.push(Pet)
}else{
    alert( Pet.nome + " não foi incluído!")
};

if(Pet2.dog){
    animais.push(Pet2)
}else{
    alert( Pet2.nome + " não foi incluído!")
};

if(Pet3.dog){
    animais.push(Pet3)
}else{
    alert( Pet3.nome + " não foi incluído(a)!")
};

console.log(animais);



