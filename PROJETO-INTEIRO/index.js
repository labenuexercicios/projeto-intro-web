

const arrayVazio = []

const itemSerie1 = {
    nome: 'the last kingdon', 
    sinopse: 'um jovem garoto perde seu pai e seu castelo, depois de anos ele retoma o que lhe foi tirado, e que é dele por direito',
    duracao: 2700, 
    anoDeInicio: 2015,
    genero: ['tema medieval', 'hitórico', 'drama', 'ação'],
    isRemake: false,
    imagem: "../the last kingdon.jpeg"
}
const itemSerie2 = {
    nome: 'the walking dead', 
    sinopse: 'após um apocalipse de zumbis e ao acordar de um coma sozinho, um policia se ve em uma trama onde busca pela sua familia e por sobrevivencia',
    duracao: 2700, 
    anoDeInicio: 2011,
    genero: ['terror', 'suspense', 'drama', 'ação'],
    isRemake: false,
    imagem: "../the walking dead.jpeg"
}
const itemFilme1 = {
    nome: 'clube da luta',
    sinopse: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído',
    duracao: 258,
    anoDeInicio: 1999,
    genero: ['suspense', 'humor ácido', 'drama', 'crime', 'ação'],
    isRemake: false,
    imagem: "../clube da luta.jpeg"
}
console.log(itemSerie1)
console.log(itemSerie1)
console.log(itemSerie2)


// //💡 média de calculo de tempo de duração no filme 
const calculoDeTempoDeDuração = Number(itemSerie1.duracao + itemSerie2.duracao + itemFilme1.duracao)
//console.log(calculoDeTempoDeDuracao)

const mediaDeTempoDeDuração = Number(calculoDeTempoDeDuração / 3)
console.log("Média de tempo de duração =",mediaDeTempoDeDuração)

// //verificação com if ternário
// //💡 verificando operção lógica que checa os boleanos das variáveis
const verificandoBoleano = (itemFilme1.isRemake && itemSerie1.isRemake && itemSerie2.isRemake)
console.log(verificandoBoleano === false? 'BOLEANOS VERIFICADOS = valores corretos' : 'são incorretos')




//SEMANA 2------------
// const itemSerie1 = {
//     nome: 'The last kingdon'.toUpperCase(),
//     sinopse: 'um jovem garota perde seu pai e seu castelo, mais tarde depois de anos ele retoma o que lhe foi tirado, que é dele por direito', 
//     duração: 2700,
//     anoDeInicioDaSerie: 2015, 
//     generoDaSerie: ['tema medieval', 'histórico', 'drama', 'ação'], 
//     isRemake: false,
//     produtorExecutivo: ['Stephen Butchard Nigel Marchant Gareth Neame']
// }
//  const itemSerie2 = {
//     nome: 'the walking dead'.toUpperCase(), 
//     sinopse: 'após um apocalipse de zumbis e ao acordar de um coma sozinho, um policia se ve em uma trama onde busca pela sua familia e por sobrevivencia', 
//     duração: 2700,
//     anoDeInicioDaSerie: 2011, 
//     generoDaSerie:['terror', 'suspense', 'drama', 'ação'],
//     isRemake: false,
//     produtorExecutivo: [' Frank Darabont']
// }
//  const itemFilme1 = {
//     nome: 'clube da luta'.toUpperCase(), 
//     sinopse: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído',
//     duração: 258,
//     anoDeInicioDoFilme: 1999,
//     generoDoFilme: ['suspense', 'humor ácido', 'drama', 'crime', 'ação'],
//     isRemake: false,
//     produtorExecutivo: ['Arnon Milchan']
//  }
// 2. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS 
//   MAIÚSCULAS.
// console.log("THE LAST KINGDON", itemFilme1)
// console.log("THE WALKING DEAD", itemSerie1)
// console.log("CLUBE DA LUTA", itemSerie2)
//SEMANA 3-----------
//transformando os itens em objetos
// // const itemSerie1 = {
//     nome: 'The last kingdon',
//     sinopse: 'um jovem garota perde seu pai e seu castelo, mais tarde depois de anos ele retoma o que lhe foi tirado, que é dele por direito', 
//     duração: 2700,
//     anoDeInicioDaSerie: 2015, 
//     generoDaSerie: ['tema medieval', 'histórico', 'drama', 'ação'], 
//     isRemake: false 
// }
//  const itemSerie2 = {
//     nome: 'the walking dead', 
//     sinopse: 'após um apocalipse de zumbis e ao acordar de um coma sozinho, um policia se ve em uma trama onde busca pela sua familia e por sobrevivencia', 
//     duração: 2700,
//     anoDeInicioDaSerie: 2011, 
//     generoDaSerie:['terror', 'suspense', 'drama', 'ação'],
//     isRemake: false 
// }
//  const itemFilme1 = {
//     nome: 'clube da luta', 
//     sinopse: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído',
//     duração: 250,
//     anoDeInicioDoFilme: 1999,
//     generoDoFilme: ['suspense', 'humor ácido', 'drama', 'crime', 'ação'],
//     isRemake: false 
//  }
// const filmesESeries = [...itemFilme1, ...itemSerie1, ...itemSerie2]
//3. Adicione os objetos criados
//  no item 1 ao array de objetos criado no item 2
//  utilizando o push()
//2 criar um array vazio 
// const filmeESeries = [...itemFilme1, itemSerie1] 
// const filmeESeries = []//array vazio
//3. Adicione os objetos criados
//  no item 1 ao array de objetos criado no item 2
//  utilizando o push()
// const filmeESeries = []
// const alocando = itemSerie1.generoDaSerie.push(itemSerie2.generoDaSerie)
// console.log(alocando)//mostra a quantidade de valor dentro do array
// console.log(itemSerie1)
//SEMANA 4------------
// let verificação = prompt('diga se a boleana é: (V) verdadeira ou (F)falsa')
// if(verificação === 'V'){
//     const novoArray = itemFilme1.genero.push('ficção')  
//     console.log('verdadeiro')
//     console.log(novoArray)
//     console.log(itemFilme1)
// }else if(verificação === 'F'){
//     alert('falso, não foi adicionado o valor ao array de objetos')
//     console.log(itemFilme1)
    // console.log("VALORES SEM O OBJETO ADICIONADO", itemFilme1)
    
// }
//SEMANA 5------------
//refatoração
// const itemSerie1 = {
//     nome: 'the last kingdon', 
//     sinopse: 'um jovem garoto perde seu pai e seu castelo, depois de anos ele retoma o que lhe foi tirado, e que é dele por direito',
//     duracao: 2700, 
//     anoDeInicio: 2015,
//     genero: ['tema medieval', 'hitórico', 'drama', 'ação'],
//     isRemake: false,
//     imagem: "../the last kingdon.jpeg"
// }
// const itemSerie2 = {
//     nome: 'the walking dead', 
//     sinopse: 'após um apocalipse de zumbis e ao acordar de um coma sozinho, um policia se ve em uma trama onde busca pela sua familia e por sobrevivencia',
//     duracao: 2700, 
//     anoDeInicio: 2011,
//     genero: ['terror', 'suspense', 'drama', 'ação'],
//     isRemake: false,
//     imagem: "../the walking dead.jpeg"
// }
// const itemFilme1 = {
//     nome: 'clube da luta',
//     sinopse: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído',
//     duracao: 258,
//     anoDeInicio: 1999,
//     genero: ['suspense', 'humor ácido', 'drama', 'crime', 'ação'],
//     isRemake: false,
//     imagem: "../clube da luta.jpeg"
// }


if(itemFilme1.isRemake === false){
    console.log('aceito, itemFilme1 foi alocado no arraVazio')
    arrayVazio.push(itemFilme1)
}else{
    alert('não é possivel adiciona-lo ao arrayVazio')
}

if(itemSerie1.isRemake === false){
    console.log('aceito, itemSerie1 foi alocado no arraVazio')
    arrayVazio.push(itemSerie1)
    
}else{
    alert('não é possivel adiciona-lo ao arrayVazio')
}

if(itemSerie2.isRemake === false){
    console.log('aceito, itemSerie2 foi alocado no arraVazio')
    arrayVazio.push(itemSerie2)
}
console.log("ARRAY VAZIO", arrayVazio)

for(let i = 0; i < arrayVazio.length; i++){
    console.log(`Nome: ${arrayVazio[i].nome.toLocaleUpperCase()}\n Sinopse: ${arrayVazio[i].sinopse} \n Duracao: ${arrayVazio[i].duracao}\n AnoDeInicio: ${arrayVazio[i].anoDeInicio} \n Genero: ${arrayVazio[i].genero} \n Isremake: ${arrayVazio[i].isRemake} \n Imagem: ${arrayVazio[i].imagem}`)
}

// for(let j = 0; j < sayajins.length; j++ ) {
//     console.log(Nome: ${sayajins[j].nome.toLocaleUpperCase()}\nAltura: ${sayajins[j].altura}\nMasculino: ${sayajins[j].masculino}\n${sayajins[j].localDeNascimento.join()})

// }

//SEMANA 6------------
// function colocandoObjeto(OBJETO){
//     const colocandoObjeto = noVoArray
// }
// função([])


//SEMANA 7------------
//1. Crie uma página HTML, e nesta página, dê um título para sua lista de itens;
//2. Crie um cabeçalho, uma seção principal, e um footer para a página;
//3. Na seção principal. Crie duas divisões. Uma deve possuir um input e um botão. A outra, deve possuir sections para criar os itens da lista;
//4. Crie uma section para cada item da lista;
//5. Para cada um dos três itens criados deve possuir todas as informações do array de objetos. As informações devem estar elencadas como lista não ordenada. Esta tela não precisa interagir com o JavaScript, tendo seus dados escritos diretamente nos elementos.
//6. Transforme o nome/título do item em um link para um artigo sobre este item (pode ser do google, de algum blog ou da Wikipédia)
//💡 Recomendamos adicionar imagens a seus itens agora. Ao fazer isso, lembre-se de criar mais uma propriedade String nos seus objetos, para guardar o caminho do link até a imagem.

//FEITO

//SEMANA 8
//estilização 

//SEMANA 9 
//TRANSFORMAR OS ELEMENTOS EM FLEXBOX
//OU O CONTAINER INTEIRO EM FLEXBOX

//SEMANA 10
//
//1. Transforme os elementos da lista de itens em Grid;
//2. Faça com que a página se torne responsiva, exibindo 
//corretamente as informações em desktop e móvel;
//OU
//1. Transforme o container da tela toda em Grid;
//2. Faça com que a página se torne responsiva, exibindo 
//corretamente as informações em desktop e móvel;

//SEMANA 11
const meuIput = document.getElementById('inputS')
const pegandoE = document.getElementById('section')


function insereItem(event){
    event.preventDefault()
    const pegandoE = document.getElementById('section')
    const noVa = document.createTextNode(itemSerie1)
    pegandoE.appendChild(noVa)
}