
    const nome1= "Morro dos Crentes"
    const tempoDeCaminhada1= 30
    const facilAcesso1= true
    const caracteristicas1= ['Mirante', ' Próximo à cachoeira']
    const localizacao1= "-21.138974839880216, -44.2861929771177"

    const nome2=  "Pico dos Três Pontões"
    const tempoDeCaminhada2=  60
    const facilAcesso2=  false
    const caracteristicas2=  ['Mirante', ' Próximo à cachoeira', ' Possibilita escalada']
    const localizacao2= "-21.138974839880216, -44.2861929771177" 
   
    const nome3= "Morro das Almas"
    const tempoDeCaminhada3= 150
    const facilAcesso3= true
    const caracteristicas3= ['Mirante', ' Ponto de maior altitude do Parque']
    const localizacao3="-21.138974839880216, -44.2861929771177"
  
    const nome4= "Mirante dos Três Pontões"
    const tempoDeCaminhada4= 60
    const facilAcesso4= false
    const caracteristicas4= ['Mirante', ' Próximo à cachoeira', ' Possibilita escalada']
    const localizacao4="-21.138974839880216, -44.2861929771177"

//SEMANA 1 
// 3.Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

let media =(tempoDeCaminhada1+tempoDeCaminhada2+tempoDeCaminhada3+tempoDeCaminhada4)/4
console.log(media);

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
        
let acessivel = (facilAcesso1&&facilAcesso2&&facilAcesso3)
console.log(acessivel);
// Semana 2
// 1. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

// 2. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

console.log((`${nome1}`).toUpperCase(), `\n Tempo de Caminhada:${tempoDeCaminhada1}\n Fácil Acesso:${facilAcesso1}\n Características:${caracteristicas1}\n Localização:${localizacao1}\n`)
console.log((`${nome2}`).toUpperCase(), `\n Tempo de Caminhada:${tempoDeCaminhada2}\n Fácil Acesso:${facilAcesso2}\n Características:${caracteristicas2}\n Localização:${localizacao2}\n`)
console.log((`${nome3}`).toUpperCase(), `\n Tempo de Caminhada:${tempoDeCaminhada3}\n Fácil Acesso:${facilAcesso3}\n Características:${caracteristicas3}\n Localização:${localizacao3}\n`)
console.log((`${nome4}`).toUpperCase(), `\n Tempo de Caminhada:${tempoDeCaminhada4}\n Fácil Acesso:${facilAcesso4}\n Características:${caracteristicas4}\n Localização:${localizacao4}\n`)

// Semana 3
//1. Transforme os itens que criamos nas últimas semanas em objetos.

const morro1 = {
    nome: "Morro dos Crentes",
    tempoDeCaminhada: 30,
    facilAcesso: true,
    caracteristicas: ['Mirante', ' Próximo à cachoeira'],
    localizacao:"-21.138974839880216, -44.2861929771177"
    }
const morro2 = {
    nome : "Pico dos Três Pontões",
    tempoDeCaminhada : 60,
    facilAcesso : true,
    caracteristicas : ['Mirante', ' Próximo à cachoeira', ' Possibilita escalada'],
    localizacao:"-21.138974839880216, -44.2861929771177"
   
    }
const morro3 = {
    nome : "Morro das Almas",
    tempoDeCaminhada : 150,
    facilAcesso : true,
    caracteristicas : ['Mirante', ' Ponto de maior altitude do Parque'],
    localizacao:"-21.138974839880216, -44.2861929771177"
    }
const morro4 = {
    nome : "Mirante dos Três Pontões",
    tempoDeCaminhada : 60,
    facilAcesso : false,
    caracteristicas : ['Mirante', ' Próximo à cachoeira', ' Possibilita escalada'],
    localizacao:"-21.138974839880216, -44.2861929771177"
    }


// 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const mirantes=[]

// 3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push() .
// mirantes= [
//     {
//     nome: "Morro dos Crentes",
//     tempoDeCaminhada: 30,
//     facilAcesso: true,
//     caracteristicas: ['Mirante', ' Próximo à cachoeira'],
//     img: "https://altamontanha.com/wp-content/uploads/2019/03/len7.jpg"
//     },
//     {
//     nome : "Pico dos Três Pontões",
//     tempoDeCaminhada : 60,
//     facilAcesso : true,
//     caracteristicas : ['Mirante', ' Próximo à cachoeira', ' Possibilita escalada'],
//     img:"https://www.pousoeprosa.com.br/atrativos_turisticos/204/772fd10261d400157265471cda6ce643.jpg"
//     },    
//     {
//     nome : "Morro das Almas",
//     tempoDeCaminhada : 150,
//     facilAcesso : true,
//     caracteristicas : ['Mirante', ' Ponto de maior altitude do Parque'],
//     img:"http://1.bp.blogspot.com/-r8PM14lowd4/TniIL3sdwII/AAAAAAAAARI/WKgR6VplNNo/s1600/7.JPG"
//     },
//     {
//     nome : "Mirante dos Três Pontões",
//     tempoDeCaminhada : 60,
//     facilAcesso : false,
//     caracteristicas : ['Mirante', ' Próximo à cachoeira', ' Possibilita escalada'],
    
//     },
// ] 
// semana 4
// // 1. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3 da semana 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

// // 2. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if ( morro1.facilAcesso===true ) {
    mirantes.push(morro1 )
} else {
    alert(  morro1.nome +' não entra nesta lista'  )
}
if ( morro2.facilAcesso===true ) {
    mirantes.push(morro2 )
} else {
    alert(  morro2.nome +' não entra nesta lista'  )
}
if ( morro3.facilAcesso===true ) {
    mirantes.push(morro3 )
} else {
    alert(  morro3.nome +' não entra nesta lista'  )
}
// if ( morro4.facilAcesso===true ) {
//     mirantes.push(morro4 )
// } else {
//     alert(  morro4.nome +' não entra nesta lista'  )
// }
// Ternario
morro4.facilAcesso===true ?  mirantes.push(morro4 ): alert(  morro4.nome +' não entra nesta lista')


// Semana 5
// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

// 2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

for (let mirante of mirantes) {
    console.log(`Nome: ${mirante.nome}, \nTempo de Caminhada: ${mirante.tempoDeCaminhada}, \nFácil Acesso? ${mirante.facilAcesso ? "Sim" : "Não"}, \nCaracterísticas: ${mirante.caracteristicas}, \nLocalização: ${mirante.localizacao}`)
}

//SEMANA 6
//1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

function imprimeString(objeto) { //IMPRIME UM ÚNICO OBJETO

    console.log("Este é um dos mirantes do Parque Ecológico da Serra do Lenheiro:", objeto.nome, objeto.tempoDeCaminhada, objeto.localizacao , objeto.caracteristicas)

}
imprimeString(morro1)
//aqui eu tô chamando a função de antes pra imprimir na nova função
function imprimeStringObjeto(objetos) { //IMPRIME A LISTA DE OBJETOS DO ARRAY
    for (let string of objetos) {
        imprimeString(string)
    }
}
imprimeStringObjeto(mirantes)

//2. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

//criar função com dois parametros, array de objetos e string
//função retorna objeto
//objeto precisa ter vaor igual ao parametro passado como string //USAR FILTER?
//caso não tenha valor igual ao parametro, rodar alerta

function arrayMirantes(mirante, morro) {
    const resultado = mirante.filter(morro => {
        return morro.nome.toUpperCase().includes(morro)
    })
    if (resultado.length === 0) {
        alert("Mirante não encontrado")
    } else {
        return resultado
    }
}
 const morro = prompt("Busque por mirantes aqui:")
// console.log(arrayMirantes (mirantes, morro))

let filtroMorros = arrayMirantes(mirantes, morro)
imprimeStringObjeto(filtroMorros)

// Semana 7
// SEMANA 7
// 1. Crie uma página HTML, e nesta página, dê um título para sua lista de itens;
// 2. Crie um cabeçalho, uma seção principal, e um footer para a página;
// 3. Na seção principal. Crie duas divisões. Uma deve possuir um input e um botão. A outra, deve possuir sections para criar os itens da lista;
// 4. Crie uma section para cada item da lista;
// 5. Para cada um dos três itens criados deve possuir todas as informações do array de objetos. As informações devem estar elencadas como lista não ordenada. Esta tela não precisa interagir com o JavaScript, tendo seus dados escritos diretamente nos elementos.
// 6. Transforme o nome/título do item em um link para um artigo sobre este item (pode ser do google, de algum blog ou da Wikipédia)
// 💡 Recomendamos adicionar imagens a seus itens agora. Ao fazer isso, lembre-se de criar mais uma propriedade String nos seus objetos, para guardar o caminho do link até a imagem.

function buscarMirantes() {

    let container;

    const search = document.querySelector("#pesquisaMirantes").value;
    if (!search) {
        alert("Digite algo para que a busca aconteça");
    } else {
        const miranteSelecionado = arrayMirantes(mirantes, search);
      
    criaCard(miranteSelecionado)

//         console.log(miranteSelecionado);

//         container = `<section class="itens">
//        <img src="https://altamontanha.com/wp-content/uploads/2019/03/len7.jpg">
//         <ul>
                // <li><p>Nome:</p> ${miranteSelecionado.nome}</li>
                // <li><p>Tempo De Caminhada:</p> ${miranteSelecionado.tempoDeCaminhada}</li>
                // <li><p>Fácil Acesso?</p> ${miranteSelecionado.facilAcesso}</li>
                // <li><p>Caracteristicas:</p> ${miranteSelecionado.caracteristicas}</li>
                // <li><p>Localização:</p> ${miranteSelecionado.localizacao}</li>
                // </ul>
//    </section>`;

//         document.querySelector("#itensContainer").innerHTML = "";
//         document.querySelector("#itensContainer").innerHTML = container;

    }
}
function criaCard(morros) {
    let itens = document.getElementById("itensContainer");
    itens.innerHTML = ""

    let container

    for (const morro of morros) {
        container = `<section class="itens">
        <img src= ${morro.img}>
        <ul>
            <li><p>Nome:</p> ${morro.nome}</li>
            <li><p>Tempo De Caminhada:</p> ${morro.tempoDeCaminhada}</li>
            <li><p>Fácil Acesso?</p> ${morro.facilAcesso}</li>
            <li><p>Caracteristicas:</p> ${morro.caracteristicas}</li>
            <li><p>Localização:</p> ${morro.localizacao}</li>
        </ul>
    </section>`;
 
     itens.innerHTML += container;
    }

}

criaCard(mirantes)


