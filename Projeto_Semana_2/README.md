Semana 2

1. Transforme os itens que criamos nas últimas semanas em objetos.

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

3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .

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
  
Imprima este array no console.log

4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push
