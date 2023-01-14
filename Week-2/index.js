// ##########    Semana 2 do projeto intro web #####################



// ********** Exercicio One *********************

const playerOne = {
 
    foto: "./img-nba/michael.jpg",
    name: "Michael Jordan",
    height: 198,
    still: false,
    position: [ "Ala-Armador" , "Armador"]
    
}


const playerTwo = {

    foto: "./img-nba/james.png",
    name: "Lebron James",
    heigth: 206,
    still: true,
    position: ["Ala-Armador","Armador","Ala-Pivô", "Ala"]
}

const playerThree = {

    foto: "./img-nba/oneal.png" ,
    name: "Shanquille O'Neal",
    heigth: 216,
    still: false,
    position: [ "Pivô"]
}

const playerFour = {
        
    foto: "./img-nba/iverson.png" ,
    name: "Allen Iverson",
    height: 183,
    still: true,
    position: [ "Ala-Armador" , "Armador"]
} 

// ********** Exercicio Two e Three *********************


playerNba = []
playerNba.push(playerOne, playerTwo, playerThree, playerFour)
console.log(playerNba)


// ********** Exercicio Four e Five *********************

playerNbaAction = []

if(playerOne.still ===  true){
    playerNbaAction.push(playerOne)
}else{
    alert("Item não adicionado")
}

if(playerTwo.still ===  true){
    playerNbaAction.push(playerTwo)
}else{
    alert("Item não adicionado")
}


if(playerThree.still ===  true){
    playerNbaAction.push(playerThree)
}else{
    alert("Item não adicionado")
}


if(playerFour.still ===  true){
    playerNbaAction.push(playerFour)
}else{
    alert("Item não adicionado")
}

console.log(playerNbaAction);





