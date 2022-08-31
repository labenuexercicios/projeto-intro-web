let dino1 = {
    personagem:  "Tiranossauro Rex",
    Velocidade: 27,
    Carnívoro: true,
    Tamanho: ['doze metros de altura','oito toneladas']
}
let dino2 = {
    personagem:  "Triceratops",
    Velocidade: 32,
    Carnívoro: false,
    Tamanho: ['trez metros de altura','doze toneladas']
}
let dino3 = {
    personagem:  "Espinossauro",
    Velocidade: 24,
    Carnívoro: true,
    Tamanho: ['cinco metros de altura','nove toneladas']
}
let dino4 = {
    personagem:  "Velociraptor",
    Velocidade: 40,
    Carnívoro: true,
    Tamanho: ['meio metro de altura','sete quilos']
}
let dino5 = {
    personagem:  "Braquiossauro",
    Velocidade: 20,
    Carnívoro: false,
    Tamanho: ['vinte e cinco metros de altura','setenta toneladas']
}
let dino6 = {
    personagem:  "Estegossauro",
    Velocidade: 7,
    Carnívoro: false,
    Tamanho: ['quatro metros de altura', 'nove toneladas']    
}






let todosDinos = []

if(dino1.Carnívoro===true){
    todosDinos.push(dino1)
}if(dino2.Carnívoro===true){
    todosDinos.push(dino2)
}if(dino3.Carnívoro===true){
    todosDinos.push(dino3)
}if(dino4.Carnívoro===true){
    todosDinos.push(dino4)
}if(dino5.Carnívoro===true){
    todosDinos.push(dino5)
}if(dino6.Carnívoro===true){
    todosDinos.push(dino6)
}else{alert('Só é permitido dino carnivoro')}


//todosDinos.push(dino1,dino2,dino3,dino4,dino5,dino6)


console.log(todosDinos)