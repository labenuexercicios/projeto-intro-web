/*# Projeto de Introdução ao desenvolvimento web

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

**Opcional**: Tente utilizar o **Github pages** para fazer o deploy do seu projeto.*/

/*presidente*/


const nome = "Lula"
const partido = "PT"
const esquerda = true
const tempoPoder = 8
const projetos = [ "bolsa família", "fome zero", "primeiro emprego"]
console.log("nome:" + nome.toLocaleUpperCase())
console.log("partido:" + partido)
var espectro = []
if (esquerda == true) {
   (espectro = "esquerda") 
} else {
   (espectro = "direita")
}
console.log("no espectro esse candidato é de: " + espectro)
console.log("ficou no poder: " + tempoPoder + " anos")
console.log("seus principais projetos foram: "+ projetos)





const nome1 = "FHC"
const partido1 = "PSDB"
const esquerda1 = false
const tempopoder1 = 8
const projetos1 = ["Programa Auxílio-Gás", "Programa Nacional de Renda Mínima vinculada à Saúde","Cadastramento Único do Governo Federal"]
console.log("nome:" + nome1.toLocaleUpperCase())
console.log("partido:" + partido1)
var espectro = []
if (esquerda1 == true) {
   (espectro = "esquerda") 
} else {
   (espectro = "direita")
}
console.log("no espectro esse candidato é de: " + espectro)
console.log("ficou no poder: " + tempopoder1 + " anos")
console.log("seus principais projetos foram: "+ projetos1)

const nome2 = "dilmãe"
const partido2 = "pt"
const esquerda2 = true
const tempopoder2 = 6
const projetos2 = ["Mais Médicos","PAC2" ,"Programa Nacional de Acesso ao Ensino Técnico e Emprego"]
console.log("nome:" + nome2.toLocaleUpperCase())
console.log("partido:" + partido2)
var espectro = []
if (esquerda2 == true) {
   (espectro = "esquerda") 
} else {
   (espectro = "direita")
}
console.log("no espectro esse candidato é de: " + espectro)
console.log("ficou no poder: " + tempop oder2 + " anos")
console.log("seus principais projetos foram: "+ projetos2)


const media = ((tempoPoder + tempopoder1 + tempopoder2) / 3)
console.log(media + " a média do tempo de permanência dos três itens")

const esquerdaT = esquerda && esquerda1 && esquerda2
console.log(esquerdaT)


