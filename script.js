//SEMANA 3

// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

 array = [{
 Personagem: "Saci-Pererê",
personagemProtetor : false,  
localidade : "mata",
anoDaLenda : 1918,
elementoConjunto : ["Redemoinho", "Velocidade", "Invisibilidade"]
},

{
 Personagem : "Lobisomem",
 personagemProtetor : true,
 localidade : "cidade do interior",
 anoDaLenda : 1400,
 elementoConjunto : ["Super-Força", "Velocidade", "Ressucitar", "Mudar de aparencia"]
},

{
Personagem : "Boto-Rosa",
personagemProtetor : false,
localidade : "lago",
anoDaLenda : 1800,
elementoConjunto : ["Mudar aparencia", "invisilidade", "Ressucitar"]
},

{
Personagem : "Cuca",
personagemProtetor : false,
 localidade : "cidade grande",
 anoDaLenda: 1921,
 elementoConjunto : ["Super mordida", "Disfarces", "Poderes de feitiço"]
},

{
Personagem : "Caipora",
personagemProtetor : true,
localidade : "mata fechada",
anoDaLenda: 1870,
elementoConjunto : ["Proteção", "Velocidade", "Super audição"]

},
{
 Personagem : "Mula sem Cabeça",
 personagemProtetor : false,
 localidade : "cidade",
 anoDaLenda: 1972,
 elementoConjunto : ["Fogo", "Velocidade", "Invisibilidade"]

 },

{
 Persoanagem : "Curupira",
 personagemProtetor : true,
localidade : "mata",
anoDaLenda : 1560,
elementoConjunto : ["velocidade", "camuflagem com a floresta", "visão de raio - X"]
 },

 {
Personagem : "Iara",
personagemProtetor : true,
 localidade : "mar",
 anoDaLenda: 1600,
 elementoConjunto : ["hipnose pela voz", "super-audição", "camuflagem com o mar"]
 }]


const novoArray =[]
for (let i in array){
   if (array[i].personagemProtetor){
      novoArray.push(array[i])
   } else {
      alert (`${array[i].Personagem} Não foi adicionado!`)
   }
}


// 2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.


for(let i in array){
   array[i].elementoConjunto = array[i].elementoConjunto.toString()
   console.log(array[i])
}
// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

function obj (objeto){
   return objeto.Personagem
}
// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

function busca (array,string){
     for(let i in array){
       if (array[i].Personagem === string){
          return array[i]
          }
       }  
         return alert(`O ${string}, não foi encontrado!`)
      }
