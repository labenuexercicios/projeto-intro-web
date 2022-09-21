// const nomeDoJogo = 'Far Cry 4' //String
// const nomeDoJogo1 = 'Crash Bandicoot'
// const nomeDoJogo2 = 'Devil May Cry'

// const personagensPrincipais = ['Pagan Min','Amita','Sabal','Ajay Ghale'] //String
// const personagensPrincipais1 = ['Crash Bandicoot', 'Doctor Neo Cortex', 'Coco Bandicoot']
// const personagensPrincipais2 = ['Dante','Nero','Vergil','Trish','Saparda']

// const anoDeLancamento = 2014 //Number
// const anoDeLancamento1 = 1996
// const anoDeLancamento2 = 2001

// const ehUmBomJogo = true 
// const ehUmBomJogo1 = true
// const ehUmBomJogo2 = true

// console.log(`${nomeDoJogo.toUpperCase()},\n ${personagensPrincipais}, \n ${anoDeLancamento}, \n ${ehUmBomJogo}`);
// console.log(`${nomeDoJogo1.toUpperCase()},\n ${personagensPrincipais1}, \n ${anoDeLancamento1},\n ${ehUmBomJogo1}`);
// console.log(`${nomeDoJogo2.toUpperCase()},\n ${personagensPrincipais2}, \n ${anoDeLancamento2},\n ${ehUmBomJogo2}`);

// const mediaValoresNumericosJgs = (anoDeLancamento + anoDeLancamento1 + anoDeLancamento2) / 3
// console.log(mediaValoresNumericosJgs);

// const verificacaoBoolean = ehUmBomJogo && ehUmBomJogo1 && ehUmBomJogo2
// console.log(verificacaoBoolean);


let todosBonsJogos=[]

const jogoZero={
    nomeDoJogo: 'Far Cry 4',
    personagensPrincipais : ['Pagan Min','Amita','Sabal','Ajay Ghale'],
    anoDeLancamento : 2014,
    ehUmBomJogo: true
}

if (jogoZero.ehUmBomJogo===true){
    todosBonsJogos.push(jogoZero)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}

const jogoUm={
    nomeDoJogo : 'Far Cry 5',
    personagensPrincipais: ['Joseph Seed', 'Boomer', 'X-burguer', 'Jacob Seed'],
    anoDeLancamento : 2018,
    ehUmBomJogo : true
}

if(jogoUm.ehUmBomJogo===true){
    todosBonsJogos.push(jogoUm)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}

const jogoDois={
    nomeDoJogo: 'Far Cry 3',
    personagensPrincipais: ['Josh','Vaas Montenegro'],
    anoDeLancamento: 2012,
    ehUmBomJogo: true
}

const jogoTres={
    nomeDoJogo: 'Far Cry 4',
    personagensPrincipais : ['Pagan Min','Amita','Sabal','Ajay Ghale'],
    anoDeLancamento : 2014,
    ehUmBomJogo: true
}

if (jogoZero.ehUmBomJogo===true){
    todosBonsJogos.push(jogoZero)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}

const jogoQuatro={
    nomeDoJogo: 'Far Cry 4',
    personagensPrincipais : ['Pagan Min','Amita','Sabal','Ajay Ghale'],
    anoDeLancamento : 2014,
    ehUmBomJogo: true
}

if (jogoZero.ehUmBomJogo===true){
    todosBonsJogos.push(jogoZero)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}

const jogoCinco={
    nomeDoJogo: 'Far Cry 4',
    personagensPrincipais : ['Pagan Min','Amita','Sabal','Ajay Ghale'],
    anoDeLancamento : 2014,
    ehUmBomJogo: true
}

if (jogoZero.ehUmBomJogo===true){
    todosBonsJogos.push(jogoZero)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}


if(jogoDois.ehUmBomJogo===true){
    todosBonsJogos.push(jogoDois)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}

let personagensPrincipais='' 

for(let i of jogoZero.personagensPrincipais){
    personagensPrincipais=personagensPrincipais+i+','
}

console.log(personagensPrincipais);

for(let jogo of todosBonsJogos){
    console.log(`${jogo.nomeDoJogo.toUpperCase()},\n ${jogo.personagensPrincipais}, \n ${jogo.anoDeLancamento}, \n ${jogo.ehUmBomJogo}`);
}