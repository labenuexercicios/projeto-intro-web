const playerOne = {
 
    foto: "./img-nba/michael.jpg",
    name: "Michael Jordan",
    height: 198,
    still: false,
    position:  "Ala-Armador, Armador"
    
}


const playerTwo = {

    foto: "./img-nba/james.png",
    name: "Lebron James",
    heigth: 206,
    still: true,
    position: "Ala-Armador, Armador, Ala-Pivô, Ala"
}

const playerThree = {

    foto: "./img-nba/oneal.png" ,
    name: "Shanquille O'Neal",
    heigth: 216,
    still: false,
    position:  "Pivô"
}

const playerFour = {
        
    foto: "./img-nba/iverson.png" ,
    name: "Allen Iverson",
    height: 183,
    still: true,
    position: "Ala-Armador,Armador"
} 

const allPlayer = []


for (player of allPlayer) {
    for(propriedade in player){


    console.log(`${propriedade}:${player[propriedade]}`)
    }
    console.log("----------------------");
}


function objetoParaString(relatorio) {
   
        console.log(relatorio)
    }
objetoParaString(playerOne)



const buscarPlayer = (allPlayer, string) => {
    const resultado = allPlayer.filter((relatorio) => {
        return relatorio.name.toUpperCase() === string.toUpperCase() === string.toUpperCase() || relatorio.position === string || relatorio.name.toUpperCase() === string.toUpperCase()
})   

if (resultado.length > 0){
    console.log(resultado)
}else{
    console.log("OPA!! Jogador não encontrado")
    }
}
buscarPlayer(allPlayer, "nome")