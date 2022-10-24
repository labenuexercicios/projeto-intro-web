
//Semana 1 E 2

let BandaZimbra = {
    nome: "Banda Zimbra",
    isArtista : true,
    QuantosAlbuns: 04,
    TemMaisDe5anos: 12 > 5, 
    AlgunsAlbuns: ["Azul", "Sala Dois", "Verniz", "O tudo, o Nada e o Mundo"],
    html: document.getElementById("b1")
}

let Miley = {
    nome: "Miley Cyrus", 
    isArtista : true,
    QuantosAlbuns: 09, 
    TemMaisDe5anos: 21 > 5, 
    AlgunsAlbuns: ["Bangerz", "Can't Be Tamed", "Plastic Hearts" ],
    html: document.getElementById("b2")
}

let PedroSampaio = {
    nome : "Pedro Sampaio",
    isArtista: true,
    QuantosAlbuns: 02,
    TemMaisDe5anos: 3 > 5,
    AlgunsAlbuns: ["Chama meu Nome", "REMIXES"],
    html: document.getElementById("b3")
}

let ImagineDragons = [{
    nome: "Imagine Dragons", 
    isArtista : true,
    QuantosAlbuns: 09, 
    TemMaisDe5anos: 12 > 5, 
    AlgunsAlbuns:["Mercury - Act 2", "Nigth Visions", "Evolve", "It's Time"],
    html: document.getElementById("b4")

}]

let Djonga = [{
    nome: "Djonga",
    isArtista: true,
    QuantosAlbuns: 04,
    TemMaisDe5anos: 12 > 5,
    AlgunsAlbuns:["Heresia", "Nu", "O Menino Que Queria Ser Deus", "Ladrão"],
    html: document.getElementById("b5")

}]








let MediaAlbuns = 24 / 4
console.log("Média de Albuns de todos os artistas no MEU PORTAL: ", MediaAlbuns)
let ArmarioArtistas = []



ArmarioArtistas.push(ImagineDragons[0])
ArmarioArtistas.push(Djonga[0])

for(i = 0; i<=(ArmarioArtistas.length-1); i++){
    console.log(ArmarioArtistas[i])
}








if (Djonga.isArtista === true){
    ArmarioArtistas.push(Djonga)
}else{
    alert(`O artista ${Djonga.Artista} não foi adicionado`)
}

if (BandaZimbra.isArtista === true){
    ArmarioArtistas.push(BandaZimbra)
}else{
    alert(`O artista ${BandaZimbra.Artista} não foi adicionado`)
}

if(Miley.isArtista === true){
    ArmarioArtistas.push(Miley)

}else{
    alert(`O artista ${Miley.Artista} não foi adicionado `)
}

if(PedroSampaio.isArtista === true){
    ArmarioArtistas.push(PedroSampaio)

}else{
    alert(`O artista ${PedroSampaio.Artista} não foi adicionado`)
}
console.log(ArmarioArtistas)



//semana 3:
//1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
var stringarray = ""

for ( let i = 0; i < (BandaZimbra.AlgunsAlbuns.length); i++){
    stringarray += BandaZimbra.AlgunsAlbuns[i] + ","
}
BandaZimbra.AlgunsAlbuns = stringarray
stringarray = ""

for (let i = 0; i <= (Miley.AlgunsAlbuns.length); i++){
    stringarray += Miley.AlgunsAlbuns[i] + ","
}
Miley.AlgunsAlbuns = stringarray
stringarray = ""

for (let i = 0; i <= (PedroSampaio.AlgunsAlbuns.length); i++){
    stringarray += PedroSampaio.AlgunsAlbuns[i] + ","
}
PedroSampaio.AlgunsAlbuns = stringarray
stringarray = ""


//2 - adicionar um objeto ao array de objetos 

function toUpperCase () {

for(let artistass of ArmarioArtistas){
    console.log(`${artistass.Artista.toUpperCase()},\n ${artistass.isArtista}, \n ${artistass.TemMaisDe5anos}, \n ${artistass.AlgunsAlbuns}`);
}
}



// SEMANA 6

    for(let artistass of ArmarioArtistas){
        console.log(`${artistass.nome.toUpperCase()},\n ${artistass.isArtista}, \n ${artistass.TemMaisDe5anos}, \n ${artistass.AlgunsAlbuns}`);

    }
    





function arrayAramarioDeBandas(array, titulo) {
    let resultado = array.filter(arm => {
        return arm.nome.toUpperCase().includes(titulo.toUpperCase())
    })
    if(resultado.length >= 1){
        return resultado
    }else{
        alert("Banda ou Artista não encontrado!")
    }
}

function buscarItens (arrayObj, string) {
    let busca = document.getElementById("nome");
    string = busca.value

    let container = document.getElementById("todos");

    for(objeto of arrayObj){
        if(objeto.nome === string ){
            return container.innerHTML = objeto.html.innerHTML
        }
    }
    return alert(`Seu produto ${string} não foi encontrado!`)

  
}

buscarItens(arrayAramarioDeBandas, "Banda Zimbra")


