/*Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. Pode ser qualquer coisa que pode ser descrita com características escritas. Alguns exemplos abaixo:

🐳 Animal
* Nome;
* Nome científico;
* Tempo médio de vida;
* Classe (réptil, mamífero, ave etc);
* Ambiente;
* Está extinto?

 🎬 Filme
* Título;
* Sinopse;
* Duração em minutos;
* Ano de Lançamento;
* Gênero (terror, suspense, ação, comédia etc);
* É um remake?

 🍕 Comida
* Nome;
* Descrição;
* Ingredientes;
* Preço;
* Categoria (entrada, prato principal, sobremesa etc);
* É vegetariano?;

1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
Você precisará criar pelo menos:
  * uma característica String;
  * uma característica Number;
  * uma característica Boolean;
Exemplos abaixo
const nome; //string
const idade; //number 
const verificouEmail; //boolean 
Recomendamos, pensando no futuro, que você também pense em dados que podem receber múltiplos valores de uma só vez. Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.
2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
Exemplo:
const nome1 = "Fulano";
const idade1 = 33;
const verificouEmail1 = false;

const nome2 = "Sicrano";
const idade2 = 41;
const verificouEmail2 = true;

const nome3 = "Beltrano";
const idade3 = 27;
const verificouEmail3 = true;
3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
💡A média deve ser igual à soma dos itens, dividida pelo total de itens.
4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
💡 Exemplo
const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
console.log(verificaEmails);
// nesse caso, vai imprimir false, pois verificouEmail1 === false
 */
const paciente1 = "R.C.W."
const idade1 = 33
const emDesintox1 = true

const paciente2 = "F.M.C.J"
const idade2 = 36
const emDesintox2 = false

const paciente3 = "L.A.F.C"
const idade3 = 27
const emDesintox3 = false

const idadeMedia = (33+36+27) / 3
console.log(idadeMedia)

if(emDesintox1){
    console.log("Paciente em internação para desintoxicação")
} else{
    console.log("Paciente ambulatorial do territorio")
}

if(emDesintox2){
    console.log("Paciente em internação para desintoxicação")
} else{
    console.log("Paciente ambulatorial do territorio")
}

if(emDesintox3){
    console.log("Paciente em internação para desintoxicação")
} else{
    console.log("Paciente ambulatorial do territorio")
}

const DesintoxicaçaoTotal = emDesintox1 && emDesintox2 && emDesintox3;
console.log(DesintoxicaçaoTotal);



