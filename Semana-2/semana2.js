//*****SEMANA 2 ***** 
//1. Transforme os itens que criamos nas últimas semanas em objetos.
const objeto1 = {
nomeArtista: "Justin Bieber",
nomeAlbum: "Justice",
anoLançamentoAlbum1: 2021,
artistaNacional: false,
musicasPreferidasAlbum: ["2 Much", "Hold On", "Somebody"]
}


const objeto2 = {
nomeArtista: "Henrique e Juliano",
nomeAlbum: "Manifesto Musical(Ao Vivo)",
anoLançamentoAlbum: 2022,
artistaNacional: true,
musicasPreferidasAlbum: ["Arranhão", "A Maior Saudade", "Evento Cancelado"]
}

const objeto3  = {
nomeArtista: "Linkin Park",
nomeAlbum: "Minutes to Midnight",
anoLançamentoAlbum: 2017,
artistaNacional: false,
musicasPreferidasAlbum: ["Leave Out All The Rest", "Bleed It Out", "Shadow Of The Day"]
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
let primeiroArray = [];
//console.log (primeiroArray)

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()
let segundoArray = primeiroArray.slice()
// segundoArray.push(objeto1, objeto2, objeto3)
// console.log (segundoArray)


//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
// 5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if (objeto1.artistaNacional === true){
    segundoArray.push(objeto1);
    console.log (segundoArray)
}else {
    alert ("O artista é brasileiro? NÃO \nOBJETO 1 não adicionado.")
}if (objeto2.artistaNacional === true){
        segundoArray.push(objeto2)
        console.log (segundoArray)
}else{
    alert ("O artista é brasileiro? NÃO \nOBJETO 2 não adicionado.")
}if (objeto3.artistaNacional === true){
            segundoArray.push(objeto3)
            console.log (segundoArray)
}else{
    alert ("O artista é brasileiro? NÃO \nOBJETO 3 não adicionado.")
        }