/* . Transforme os itens que criamos nas últimas semanas em objetos.
Exemplo
//ANTES
  const nome1 = "Fulano";
  const idade1 = 33;
  const verificouEmail1 = false; 
//DEPOIS
objeto1 = { 
    nome: "Fulano", 
    idade: 33,
    verificouEmail: false
  } 
2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()
Ao fim, você deve ter algo parecido com isso:
[
  { 
    nome: "Fulano", 
    idade: 33,
    verificouEmail: false
  },
  { 
    nome: "Beltrano", 
    idade: 41,
    verificouEmail: true
  },
  { 
    nome: "Fulano", 
    idade: 27,
    verificouEmail: true
  },
 */

  
   paciente1 = {
   nome : "M.B,S",
   prontuario : 1001,
   emDesintox : true,
   pts : ["auriculoterapia", "grupo de meditação", "psicologia"],
},

   paciente2 = {
   nome : "F.R.T",
   prontuario : 1002,
   emDesintox : true,
   pts : ["avaliação psiquiátrica", "terapia ocupacional", "grupo criarte"],
},

   paciente3 = {
   nome : "J.R.C",
   prontuario : 1003,
   emDesintox : false,
   pts : ["avaliação clínica", "auriculoterapia", "grupo cabeça feita"],
}


const arrayDeObjetos = []
   
   arrayDeObjetos.push(paciente1, paciente2, paciente3)

   console.log(arrayDeObjetos)
   