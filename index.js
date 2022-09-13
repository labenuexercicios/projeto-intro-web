// SEMANA2
//1. Transforme os itens que criamos nas últimas semanas em objetos.

const objeto1 = {
   módulo1: "Legislação de Trânsito",
   cargaHorária1: 12,
   avaliação1: true 
}

const objeto2 = {
  módulo2: "Direção Defensiva",
  cargaHorária2: 8,
  avaliação2: true
}

const objeto3 = {
 módulo3: "Noções de Primeiros Socorros",
 cargaHorária3: 4,
 avaliação3: true,
}

const objeto4 = {
 módulo4: "Relacionamento Interpessoal",
 cargaHorária4: 6,
 avaliação4: true
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const todosOsObjetos = []
console.log(todosOsObjetos)

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

todosOsObjetos.push(objeto1, objeto2, objeto3, objeto4)
   
//console.log(todosOsObjetos)


//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push.


if(checarAvaliação == true) {
   console.log("Você foi Aprovado!", todosOsObjetos.push())
   /*Se todas as avaliações forem true, o usuário foi aprovado*/
}
 else if (checarAvaliação == false){
   console.log(alert("Você foi reprovado, refaça suas avaliações!"))
   /*Se alguma avaliação for false, o usuário está reprovado*/
}
