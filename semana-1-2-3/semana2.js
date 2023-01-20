// 1. Transforme os itens que criamos nas últimas semanas em objetos.


jogo1 = {

    titulo: "The Last Of Us",
    nota: 95,
    multiplayer: false,
    duracao: "15h",
    desenvolvedora: "Naughty Dog",
    genero: ['acao', 'aventura', 'terror'],

}

jogo2 = {

    titulo: "Red Dead Redemption",
    nota: 95,
    multiplayer: true,
    duracao: "18h",
    desenvolvedora: "Rockstar",
    genero: ['mundo aberto', 'acao', 'faroeste'],

}


jogo3 = {
    
    titulo: "Nier",
    nota: 68,
    multiplayer: false,
    duracao: "20h",
    desenvolvedora: "PlatinumGames",
    genero: ['hack and slash', 'rpg', 'drama'],

}

jogo4 = {

    titulo: "Mass Effect 2",
    nota: 94,
    multiplayer: false,
    duracao: "25h",
    desenvolvedora: "BioWare",
    genero: ['rpg', 'scifi', 'acao'],

}




// 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;


let arrayDeJogos = [];



// 3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .


// arrayDeJogos.push(jogo1, jogo2, jogo3, jogo4);





// 4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

if (jogo1.multiplayer === true) {

    arrayDeJogos.push(jogo1)

    console.log(arrayDeJogos)
}else{

    alert ("Jogo 2 não possui multiplayer por isso não foi adicionado")

}if (jogo2.multiplayer === true){

    arrayDeJogos.push(jogo2)
    console.log(arrayDeJogos)

}else{

    alert("Jogo 2 não possui multplayer por isso nao foi adicionado")

}if(jogo3.multiplayer === true){

        arrayDeJogos.push(jogo3)
        console.log(jogo3)

}else{

    alert("Jogo 3 não possui multplayer por isso nao foi adicionado")

}
if(jogo4.multiplayer === true){

        arrayDeJogos.push(jogo4)

}else {


    alert("Jogo 4 não possui multplayer por isso nao foi adicionado")

}









// var mediaNotas = (nota1 + nota2 + nota3 + nota4)/4;

// console.log(mediaNotas)

// const verificaMultiplayer= multiplayer1 && multiplayer2 && multiplayer3 && multiplayer4;

// console.log(verificaMultiplayer);



