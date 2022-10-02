const BandaZimbra = {
    Artista: "Banda Zimbra",
    isArtista : true,
    QuantosAlbuns: 04,
    TemMaisDe5anos: 12 > 5, 
    AlgunsAlbuns: ["Azul", "Sala Dois", "Verniz", "O tudo, o Nada e o Mundo"]}

const Miley = {
    Artista: "Miley Cyrus", 
    isArtista : true,
    QuantosAlbuns: 09, 
    TemMaisDe5anos: 21 > 5, 
    AlgunsAlbuns: ["Bangerz", "Can't Be Tamed", "Plastic Hearts" ]
    }

const PedroSampaio = {
    Artista : "Pedro Sampaio",
    isArtista: true,
    QuantosAlbuns: 02,
    TemMaisDe5anos: 3 > 5,
    AlgunsAlbuns: ["Chama meu Nome", "REMIXES"]

}

const MediaAlbuns = 24 / 3
console.log(MediaAlbuns)
const ArmarioArtistas = []



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

const ImagineDragons = [{
    Artista: "Imagine Dragons", 
    isArtista : true,
    QuantosAlbuns: 09, 
    TemMaisDe5anos: 12 > 5, 
    AlgunsAlbuns:["Mercury - Act 2", "Nigth Visions", "Evolve", "It's Time"]

}]
ArmarioArtistas.push(ImagineDragons[0])

for(i = 0; i<=(ArmarioArtistas.length-1); i++){
    console.log(ArmarioArtistas[i])
}


// faça uma função para que o objeto pedido seja encontrado com a string do relatorio com os dados do objt
function encontrarBanda (nome){
    for(i = 0; i <= (ArmarioArtistas.length-1); i++){
        if ( nome == ArmarioArtistas[i].Artista){
            console.log(`Nome Artista/Banda:${ArmarioArtistas[i].Artista}\n Quantos Albuns: ${ArmarioArtistas[i].QuantosAlbuns}\n Alguns Albuns: ${ArmarioArtistas[i].AlgunsAlbuns}`)
        }
        }
        return (nome)
    }
//
//const arrayobjt = [BandaZimbra, Miley, ImagineDragons, PedroSampaio]

    /*function objetostring (string){
    for(let i = 0; i <= (arrayobjt.Artista.length-1); i++){
        if (string !== arrayobjt[i].Artista){
            alert("Não encontrado no nosso sistema")

        }
    }
    return string*///TRAVOU NA PARTE 4

//4//

encontrarBanda(prompt("Qual banda/artista deseja encontrar?"))
