//Semana 1 2 3 4 

const nome = 'naruto';
const clan = 'uzumaki';
const idade = 17;
const isninja = true;
const ninjutsu = ["clones da sombras", "jutsu sexy"];

const nome1 = 'kakashi';
const clan1 = 'Hatake';
const idade1 = 28;
const isninja1 = true;
const ninjutsu1 = ["copiar habilidades", "chidori"];

const nome2 = 'jiraiya';
const clan2 = 'Hatake';
const idade2 = 51;
const isninja2 = true;
const ninjutsu2 = ["rasengan", "odama rasengan"];

const nome3 = 'maito-gai';
const clan3 = 'sem clan';
const idade3 = 27;
const isninja3 = true;
const ninjutsu3 = ["não tem"];

const nome4 = 'rock-lee';
const clan4 = 'sem clan';
const idade4 = 27;
const isninja4 = true;
const ninjutsu4 = ["não tem"];

const nome5 = 'neji';
const clan5 = 'hyuga';
const idade5 = 18;
const isninja5 = true;
const ninjutsu5 = ["oito trigamas", "Emissão de chakara"];

const nome6 = 'shikamaru';
const clan6 = 'nara';
const idade6 = 26;
const isninja6 = true;
const ninjutsu6 = ["técnica de Imitação pela Sombra", "técnica da Captura pela Sombra"];

const nome7 = 'nagato';
const clan7 = 'uzumaki';
const idade7 = 32;
const isninja7 = false;
const ninjutsu7 = ["Jutsus absorção da alma", "Técnica da vida celestial."];

const mediajunta = Number(idade + idade1 + idade2 + idade3 + idade4 + idade5 + idade6 + idade7) / 8

console.log("media", mediajunta);

const verificaninjas = isninja && isninja1 && isninja2 && isninja3 && isninja4 && isninja5 && isninja6 && isninja7;
console.log("verificação", verificaninjas);
// nesse caso, vai imprimir false, pois verificouninjas === false



//semana 02
//console.log((`Nome:${nome}`).toUpperCase(), ` Clan:${clan}\n Idade:${idade}\n Isninja:${true}\n Ninjutsu:${ninjutsu}\n`)
// console.log((`Nome:${nome1}`).toUpperCase(), `\n Clan:${clan1}\n Idade:${idade1}\n Isninja:${true}\n Ninjutsu:${ninjutsu1}\n`)
// console.log((`Nome:${nome2}`).toUpperCase(), `\n Clan:${clan2}\n Idade:${idade2}\n Isninja:${true}\n Ninjutsu:${ninjutsu2}\n`)
// console.log((`Nome:${nome3}`).toUpperCase(), `\n Clan:${clan3}\n Idade:${idade3}\n Isninja:${true}\n Ninjutsu:${ninjutsu3}\n`)
// console.log((`Nome:${nome4}`).toUpperCase(), `\n Clan:${clan4}\n Idade:${idade4}\n Isninja:${true}\n Ninjutsu:${ninjutsu4}\n`)
// console.log((`Nome:${nome5}`).toUpperCase(), `\n Clan:${clan5}\n Idade:${idade5}\n Isninja:${true}\n Ninjutsu:${ninjutsu5}\n`)
// console.log((`Nome:${nome6}`).toUpperCase(), `\n Clan:${clan6}\n Idade:${idade6}\n Isninja:${true}\n Ninjutsu:${ninjutsu6}\n`)
// console.log((`Nome:${nome7}`).toUpperCase(), `\n Clan:${clan7}\n Idade:${idade7}\n Isninja:${true}\n Ninjutsu:${ninjutsu7}\n`)


// const relatorio1 = ((`Nome:${nome}`).toUpperCase(), ` Clan:${clan} Idade:${idade} Isninja:${true} Ninjutsu:${ninjutsu}`)
// const relatorio2 = ((`Nome:${nome1}`).toUpperCase(), ` Clan:${clan1} Idade:${idade1} Isninja:${true} Ninjutsu:${ninjutsu1}`)
// const relatorio3 = ((`Nome:${nome2}`).toUpperCase(), ` Clan:${clan2} Idade:${idade2} Isninja:${true} Ninjutsu:${ninjutsu2}`)
// const relatorio4 = ((`Nome:${nome3}`).toUpperCase(), ` Clan:${clan3} Idade:${idade3} Isninja:${true} Ninjutsu:${ninjutsu3}`)
// const relatorio5 = ((`Nome:${nome4}`).toUpperCase(), ` Clan:${clan4} Idade:${idade4} Isninja:${true} Ninjutsu:${ninjutsu4}`)
// const relatorio6 = ((`Nome:${nome5}`).toUpperCase(), ` Clan:${clan5} Idade:${idade5} Isninja:${true} Ninjutsu:${ninjutsu5}`)
// const relatorio7 = ((`Nome:${nome6}`).toUpperCase(), ` Clan:${clan6} Idade:${idade6} Isninja:${true} Ninjutsu:${ninjutsu6}`)
// const relatorio8 = ((`Nome:${nome7}`).toUpperCase(), ` Clan:${clan7} Idade:${idade7} Isninja:${true} Ninjutsu:${ninjutsu7}`)

// const result = ([relatorio1, relatorio2, relatorio3, relatorio4, relatorio5, relatorio6, relatorio7, relatorio8]);
// console.log(result)

//SEMANA 03

const ninja0 = {
   nome: 'Naruto',
   clan: 'Uzumaki',
   idade: 17,
   isninja: true,
   ninjutsus: ['Clones das Sombras', 'Jutsu Sexy'],
   img: "img/naruto.png",
   href:'https://pt.wikipedia.org/wiki/Naruto',
}

const ninja1 = {
   nome: 'kakashi',
   clan: 'Hatake',
   idade: 28,
   isninja: false,
   ninjutsus: ['copiar habilidades', 'chidori'],
   img: "img/kakashi.png"
}

const ninja2 = {
   nome: 'jiraiya',
   clan: 'Hatake',
   idade: 51,
   isninja: false,
   ninjutsus: ["rasengan", "odama rasengan"],
   img: "img/jiraiya.png"
}

const ninja3 = {
   nome: 'Maito Gai',
   clan: 'Sem Clan',
   idade: 28,
   isninja: true,
   ninjutsus: ["Os Noves Portões"],
   img: "img/maito-gai.png",
   href:'https://naruto.fandom.com/pt-br/wiki/Might_Guy',
}

const ninja4 = {
   nome: 'Rock Lee',
   clan: 'Sem Clan',
   idade: 17,
   isninja: true,
   ninjutsus: ["Só Tem Taijuts"],
   img: "img/rock-lee.png",
   href:'https://naruto.fandom.com/pt-br/wiki/Rock_Lee',
}

const ninja5 = {
   nome: 'Neji Hyuga',
   clan: 'Hyuga',
   idade: 17,
   isninja: false,
   ninjutsus: ["oito trigamas", "Emissão de chakara"],
   img: "img/neji.png"
}

const ninja6 = {
   nome: 'Shikamaru',
   clan: 'Nara',
   idade: 26,
   isninja: true,
   ninjutsus: ["técnica de Imitação pela Sombra", "técnica da Captura pela Sombra"],
   img: "img/shikamaru.png",
   href:'https://naruto.fandom.com/pt-br/wiki/Shikamaru_Nara',
}

const ninja7 = {
   nome: 'Nagato Pain',
   clan: 'Uzumaki',
   idade: 32,
   isninja: false,
   ninjutsus: ["Jutsus absorção da alma", "Técnica da vida celestial."],
   img: "img/nagato.png"
}

// Semana 3

const ninjasarray = [];

//Semana 04
// 1. ere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3 da semana 3), 
// para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. 
// Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
// 2. Crie uma condição else, que, em caso de valor false na condição acima, 
// exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if (true) {
   if (ninja0.isninja == true) {
      ninjasarray.push(ninja0);
   } else {
      console.log(`**ALERT** O ${ninja0.nome} não foi adicionado, pois ele não e ninja,`)
   }
   if (ninja1.isninja == true) {
      ninjasarray.push(ninja1);
   } else {
      alert(`**ALERT** O ${ninja1.nome} não foi adicionado, pois ele não e ninja,`);
   }
   if (ninja2.isninja == true) {
      ninjasarray.push(ninja2);
   } else {
      alert(`**ALERT** O ${ninja2.nome} não foi adicionado, pois ele não e ninja,`);
   }
   if (ninja3.isninja == true) {
      ninjasarray.push(ninja3);
   } else {
      alert(`**ALERT** O ${ninja3.nome} não foi adicionado, pois ele não e ninja,`);
   }
   if (ninja4.isninja == true) {
      ninjasarray.push(ninja4);
   } else {
      alert(`**ALERT** O ${ninja4.nome} não foi adicionado, pois ele não e ninja,`);
   }
   if (ninja5.isninja == true) {
      ninjasarray.push(ninja5);
   } else {
      alert(`**ALERT** O ${ninja5.nome} não foi adicionado, pois ele não e ninja,`);
   }
   if (ninja6.isninja == true) {
      ninjasarray.push(ninja6);
   } else {
      alert(`**ALERT** O ${ninja6.nome} não foi adicionado, pois ele não e ninja,`);
   }
   if (ninja7.isninja == true) {
      ninjasarray.push(ninja7);
   } else {
      alert(`**ALERT** O ${ninja7.nome} não foi adicionado, pois ele não e ninja,`);
   }
}




//SEMANA 04
// Reescrevendo o relatório da semana 2, altere a forma que a característica de array,
// criada no item 1 da semana 2, faça um laço que guarde todos os valores da propriedade array do objeto em uma mesma string.Utilize esta string no relatório.
// Chamamos este processo de reescrever um código já escrito, de refatoração
// Exemplo:
// //ANTES ["Projeto de HTML", "Projeto de CSS", "Projeto React"]
// //DEPOIS "Projeto de HTML,Projeto de CSS,Projeto React" 


for (let index = 0; index < ninjasarray.length; index++) {
   const element = ninjasarray[index].ninjutsus.toString();
   console.log(element);
}


// 2.Ainda no relatório, altere - o para que ele seja criado utilizando um laço.Ou seja, você não deve mais imprimir individualmente cada item do relatório.Cada item deve ser exibido a partir de uma iteração do laço. 
//   Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.


//SEMANA 06
//1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
function ninjaRelatorio(objeto) {

   console.log(`Nome: ${objeto.nome.toUpperCase()}\n Clan: ${objeto.clan}\n Idade: ${objeto.idade}\n  Isninja: ${objeto.isninja}\n Habilidades: ${objeto.ninjutsus}\n`)
}
for (let i = 0; i < ninjasarray.length; i++) {
   ninjaRelatorio(ninjasarray[i]);
};
//2. Crie uma função que recebe um array de objetos e uma string. 
//Esta função deve retornar um objeto, 
//e o objeto retornado deve possuir apenas os itens que 
//tenham o nome/título igual à string passada como parâmetro. 
//Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
//aqui usando o filter

function buscarNinja(array, nome) {

   if(nome != undefined){

      const ninjas = array.filter((objeto) => objeto.nome.toUpperCase() == nome.toUpperCase());
      if (ninjas.length >= 1) {
         return ninjas;
      } else {
         alert('nenhum ninja foi encontrado.')
      }
   }
   
}

function buscaPersonagem(){

   let html ;

   const search = document.querySelector(".search-bar").value;
   if(!search){
       alert("Digite algo para que a busca aconteça");
   }else {
      const ninjasFiltrados = buscarNinja(ninjasarray, search);
      console.log(ninjasFiltrados);

      html = `<section id="card">

                <div id="ninja-imagem"><img class="naruto" src="${ninjasFiltrados[0].img}" alt="imagem do naruto"></div>
                <ul>
                    <li id="nome"><a href="${ninjasFiltrados[0].href}" target="_blank">Nome: ${ninjasFiltrados[0].nome}</a></li>
                    <li><strong>Clan:</strong> ${ninjasFiltrados[0].clan}</li>
                    <li>Idade: ${ninjasFiltrados[0].idade}</li>
                    <li>Isninja: ${ninjasFiltrados[0].isninja}</li>
                    <li>Ninjutsus: ${ninjasFiltrados[0].ninjutsus}</li>

                </ul>
            </section>`;

      document.querySelector(".card-container").innerHTML = "";
      document.querySelector(".card-container").innerHTML = html;
   
   }
}




// console.log(buscarNinja(ninjasarray))
