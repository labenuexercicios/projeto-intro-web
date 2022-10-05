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
    nomeDoJogo: 'Far Cry 1',
    personagensPrincipais : ['Não possue personagem com nome'],
    anoDeLancamento : 2004,
    ehUmBomJogo: true,
    img:'/Imagens/Far cry 1.jpg'
}

if (jogoZero.ehUmBomJogo===true){
    todosBonsJogos.push(jogoZero)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}

const jogoUm={
    nomeDoJogo : 'Far Cry 2',
    personagensPrincipais: ['Paul Ferenc', 'Warren Clyde', 'Andre Hyppolite', ' Quarbani Singh'],
    anoDeLancamento : 2008,
    ehUmBomJogo : true,
    img:'/Imagens/Far cry 2.jpg'
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
    ehUmBomJogo: true,
    img:'/Imagens/Far cry 3.jpg'
}

if(jogoDois.ehUmBomJogo===true){
    todosBonsJogos.push(jogoDois)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}

const jogoTres={
    nomeDoJogo: 'Far Cry 4',
    personagensPrincipais : ['Pagan Min','Amita','Sabal','Ajay Ghale'],
    anoDeLancamento : 2014,
    ehUmBomJogo: true,
    img:'/Imagens/Far cry 2.jpg'
}

if (jogoTres.ehUmBomJogo===true){
    todosBonsJogos.push(jogoTres)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}

const jogoQuatro={
    nomeDoJogo: 'Far Cry 5',
    personagensPrincipais : ['Jacob Seed','John Seed','X-burguer','Boomer'],
    anoDeLancamento : 2014,
    ehUmBomJogo: true,
    img:'/Imagens/Far cry 5.jpg'
}

if (jogoQuatro.ehUmBomJogo===true){
    todosBonsJogos.push(jogoQuatro)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}

const jogoCinco={
    nomeDoJogo: 'Far Cry 6',
    personagensPrincipais : ['Dani Rojas','Anton Castillo','Diego Catillo','Clara García'],
    anoDeLancamento : 2014,
    ehUmBomJogo: true,
    img:'/Imagens/Far cry 6.jpg'
}

if (jogoCinco.ehUmBomJogo===true){
    todosBonsJogos.push(jogoCinco)
    console.log(todosBonsJogos);
}else{
    alert('O item não foi adcionado, tente novamente')
}




// let personagensPrincipais='' 

// for(let i of todosBonsJogos){
//     personagensPrincipais=todosBonsJogos[i].personagensPrincipais     
// }

for (let i = 0; i < todosBonsJogos.length; i++) {
    let personagensPrincipais1 = todosBonsJogos[i].personagensPrincipais.join();
    todosBonsJogos[i].personagensPrincipais=personagensPrincipais1
    console.log(`${todosBonsJogos[i].nomeDoJogo.toUpperCase()},${personagensPrincipais1}, ${todosBonsJogos[i].anoDeLancamento}, ${todosBonsJogos[i].ehUmBomJogo}`);
}




// for(let jogo of todosBonsJogos){
//     console.log(`${jogo.nomeDoJogo.toUpperCase()},\n ${jogo.personagensPrincipais}, \n ${jogo.anoDeLancamento}, \n ${jogo.ehUmBomJogo}`);
// }

function procura () {
    for(let jogo of todosBonsJogos){
        console.log(`${jogo.nomeDoJogo.toUpperCase()},\n ${jogo.personagensPrincipais}, \n ${jogo.anoDeLancamento}, \n ${jogo.ehUmBomJogo}`);
}}

procura()

function arrayJogos(jogos, titulo){
    const resultado = jogos.filter(game => {
        return game.nomeDoJogo.toUpperCase().includes(titulo.toUpperCase())
    })
    if (resultado.length >= 1){
        return resultado
    }else{
    alert('nenhum jogo encontrado')
    }
}

function pesquisaJogo() {
    let conteiner;
    const searchBar=document.querySelector('.pesquisaJogos').value;
    if (!searchBar) {
       alert('Digite algo para que a busca aconteça') 
    }else{
        const jogosSelecionados=arrayJogos(todosBonsJogos, searchBar);
        console.log(todosBonsJogos);

        conteiner=`<section class="section-design">
        <!-- <h2>Far Cry</h2> -->
        <img class="foto1" src="${jogosSelecionados[0].img}"
            alt="Capa do Jogo Far Cry. Personagem saindo de um lago em meio a selva. com uma metralhadora automática empunhada em apenas uma mão.">
        <ul>
            <li class="description">Nome do Jogo: ${jogosSelecionados[0].nomeDoJogo}</li>
            <br>
            <li class="description">Personagens Principais: ${jogosSelecionados[0].personagensPrincipais} </li>
            <br>
            <li class="description">Ano de lançamento: ${jogosSelecionados[0].anoDeLancamento}</li>
            <br>
            <li class="description">Recomendo esse jogo: ${jogosSelecionados[0].ehUmBomJogo}</li>
            <br>
            <li class="description">Sinopse: Situado em um misterioso arquipélago tropical, o jogo segue Jack Carver, um ex-agente das forças especiais americanas,
            enquanto procura a jornalista Valerie Constantine, que o acompanhou às ilhas, mas desapareceu depois que seu barco foi destruído por mercenários.</li>
        </ul>
    </section>`;
    document.querySelector('.conteiner').innerHTML='';
    document.querySelector('.conteiner').innerHTML=conteiner
    }
    
}

// const titulo = prompt("Digite aqui seu jogo Far Cry:")
//  console.log(arrayJogos (todosBonsJogos, titulo))

//  let filtroJogos = arrayJogos(todosBonsJogos, titulo)
//  imprimeStringObjeto(filtroJogos)