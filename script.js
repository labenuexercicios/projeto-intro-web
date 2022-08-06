
const animal1 = {
    nome1: "Aranha-marrom",
    tempoMedioDeVida1: 2,
    arrayCor1: [ "Marrom" ],
    extinto1: false
}

const animal2 = {
    nome2: "Viuva-negra",
    tempoMedioDeVida2: 3,
    arrayCor2: [ "preta" ],
   extinto2: false
}


const animal3 = {
    nome3: "Aranha-armadeira",
    tempoMedioDeVida3: 2 ,
    arrayCor3: [ "marrom" ],
    extinto3: false
}


 




let mediaDeTempoDeVida = animal1.tempoMedioDeVida1 + animal2.tempoMedioDeVida2 + animal3.tempoMedioDeVida3
let mediaDeTempoDeVidaFinal =  mediaDeTempoDeVida / 3

let media = mediaDeTempoDeVidaFinal






console.log("A media de vida é:",media)



const verificarExtinto = animal1.extinto1 && animal2.extinto2 && animal3.extinto3;

console.log(verificarExtinto)



console.log(

`${animal1.nome1.toLocaleUpperCase()} 
Tempo de vida media: ${animal1.tempoMedioDeVida1}
Qual a cor da aranha: ${animal1.arrayCor1}
Ela esté extinta? ${animal1.extinto1}`
    
           )
console.log(

`${animal2.nome2.toLocaleUpperCase()} 
Tempo de vida media: ${animal2.tempoMedioDeVida2}
Qual a cor da aranha: ${animal2.arrayCor2}
Ela esté extinta? ${animal2.extinto2}`
    
           )
console.log(

`${animal3.nome3.toLocaleUpperCase()} 
Tempo de vida media: ${animal3.tempoMedioDeVida3}
Qual a cor da aranha: ${animal3.arrayCor3}
Ela esté extinta? ${animal3.extinto3}`
    
           )

const arrayAnimais = []


arrayAnimais.push(animal1 , animal2 , animal3)

console.log(arrayAnimais)



arrayAnimais.push({nome4: "Aranha de Jardim" , 
tempoMedioDeVida4: 2,
arrayCor4: [ "Marrom" ],
extinto4: false})


const aranha4 = {
    nome4: "Aranha de Jardim" , 
    tempoMedioDeVida4: 2,
    arrayCor4: [ "Marrom" ],
    extinto4: false}

if(aranha4.extinto4){
    arrayAnimais.push(aranha4)
}else{
    console.log("o item não foi adicionado")
    alert("o item não foi adicionado")
}



 