# Projeto de Introdução ao desenvolvimento web

Esse é o projeto de introdução aos fundamentos do desenvolvimento Web. Aqui, vamos praticar a estrutura do que faremos pelo curso todo. O objetivo é construir uma página estilizada, e com **lista** e **busca** utilizando manipulação de DOM, praticando o conteúdo do módulo com JS:

- Variáveis
- Operadores
- Strings
- Arrays
- Objetos
- Condicionais
- Laços
- Funções
- Funções de Array
- HTML e CSS
- Flex e Grid
- DOM e responsividade

## Enunciado

A página consiste em um HTML, ligado a um ou mais arquivos CSS, e um ou mais arquivos JS (recomendamos apenas um de cada, no entanto). O objetivo é conseguir criar uma página estática, depois estilizada, e por fim, dinâmica. A página vai catalogar (ou listar) itens que você escolher, e deve possuir um sistema simples de busca, que recebe um texto, e procura por nomes/títulos que correspondam a este texto.



[Exemplo](https://user-images.githubusercontent.com/11279432/180304632-97d6705d-100c-4272-8255-8aae19813700.mov)



### Lista de requisitos

- [ ]  Tela de listagem com título
- [ ]  Cabeçalho na página
- [ ]  Área principal com barra de pesquisa e botão
- [ ]  Espaço para lista dos itens
- [ ]  ao menos três itens listados
- [ ]  Itens listados **utilizando manipulação do DOM**
- [ ]  Rodapé na página com identificação
- [ ]  Barra de pesquisa com alerta se tentar pesquisar com campo em branco
- [ ]  Clique do botão executa busca entre os itens
- [ ]  Relatório impresso no console com as informações de cada item
- [ ]  Nome/título dos itens em letras maiúsculas
- [ ]  Média numérica calculada e impressa no console
- [ ]  Verificação de valores booleanos true impressa no console
- [ ]  Utilização de Grid ou Flex para estilizar
- [ ]  Atenção ao padrão de estilização enviado

### Instruções de entrega

- Faça o fork desse repositório e realize o clone da sua cópia `seu-nome-de-usuario/projeto-intro-web`.
   <details>
   <summary>Quer uma dica?</summary>
   <img src="https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/gerais%2Ffork.png?alt=media&token=7030e997-246a-41fe-a75f-2a2ced61e54d" alt="Como adicionar o projeto no repositório"/>
   </details>
- Crie os arquivos do projeto dentro deste repo;
- Execute o fluxo de entrega do git. **Lembre-se de abrir os PRs para seu próprio repositório.**
- Para isso, você precisará fazer o projeto utilizando **branches**. Evite fazer as alterações direto na branch ```main```
    <details>
       <summary>Dúvidas sobre o Git & Github?</summary>
       <p>Adiciomos um vídeo explicando o <strong>processo de entrega</strong> [do fork ao pull request] no Material Assincrono da <a href="https://classroom.google.com/w/NTM0NjA2NDg3MjIx/tc/NTM2NDg5NTQyODg4">A005 - Git e Github</a>. Esse vídeo também exemplifica situações que podem acontecer durante o fluxo de utilização do Git.</p>
    </details>
- Entregue o **link do repo** no [Formulário de entrega](https://forms.gle/Q1mXTJFxwVUgUnrZA).

**Opcional**: Tente utilizar o **Github pages** para fazer o deploy do seu projeto.





semana 1 :
Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. Pode ser qualquer coisa que possa ser descrita com características escritas. Alguns exemplos abaixo:

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

5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
const nome; //string
const idade; //number
const verificouEmail; //boolean
const projetos; //array de strings
6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 