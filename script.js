/*
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
*/



//1. Transforme os itens que criamos nas últimas semanas em objetos.
filme1 = {
    nome: "De Repente Uma Família",
    genero: "comédia/drama",
    anoDeLançamento: 2018,
    duracaoEmMinutos: 119,
    ehRemake: true
}

filme2 = {
    nome: "Tropa De Elite",
    genero: "policial/ação",
    anoDeLançamento: 2007,
    duracaoEmMinutos: 115,
    ehRemake: false
}

filme3 = {
    nome: "O Sorriso Da Morte",
    genero: "terror",
    anoDeLançamento: 2022,
    duracaoEmMinutos: 115,
    ehRemake: false
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
const meusFilmes = [];

//3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .

/*meusFilmes.push(filme1, filme2, filme3);
console.log(meusFilmes);*/

//4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

function verificando (meusFilmes){

    if(filme1.ehRemake && filme2.ehRemake && filme3.ehRemake === true){
     meusFilmes.push(filme1, filme2,filme3); 
    }

    else if(filme1.ehRemake && filme2.ehRemake === true){
        meusFilmes.push(filme1, filme2);
        console.log("O filme " + filme3.nome + " é falso, portanto não será impresso no console");
    }

    else if(filme1.ehRemake && filme3.ehRemake === true){
        meusFilmes.push(filme1, filme3);
        console.log("O filme: " + filme2.nome + " é falso, portanto não será impresso no console");
    }

    else if(filme2.ehRemake && filme3.ehRemake === true){
        meusFilmes.push(filme2, filme3);
        console.log("O filme: " + filme1.nome + " é falso, portanto não será impresso no console");
    }
    
    else if(filme1.ehRemake === true){
        meusFilmes.push(filme1);
        console.log("Os filmes: " + filme2.nome + ", " + filme3.nome + " são falsos, portanto não serão impressos no console");
    }

    else if(filme2.ehRemake === true){
        meusFilmes.push(filme2);
        console.log("Os filmes: " + filme1.nome + ", " + filme3.nome + " são falsos, portanto não serão impressos no console");
    }

    else if(filme3.ehRemake === true){
        meusFilmes.push(filme3);
        console.log("Os filmes: " + filme1.nome + ", " + filme2.nome + " são falsos, portanto não serão impressos no console");
    }

    else{
        alert("O item não foi adicionado")
    }

}
verificando(meusFilmes);
console.table(meusFilmes);


















