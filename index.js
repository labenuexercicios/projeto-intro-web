//TEMA Series
//Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
// * uma característica String;
// * uma característica Number;
// * uma característica Boolean;

const nomeHimym= "How I met your mother"
const AnoDeLancamentoHimym= 2005;
const episodiosHimym= 208 ;
const continuaLancandoHimym= false;
const generoHimym=["siticom"," romance"," drama"," comedia"," misterio"]
console.log(`nome:${nomeHimym}
ano de lancamento:${AnoDeLancamentoHimym}
Continua sendo lancado novos episodios? ${continuaLancandoHimym}
Generos:${generoHimym}`)
//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const nomeFriends="Friends"
const AnoDelancamentoFriends= 1994
const episodiosFriends= 236 
const continuaLancandoFriends= false
const generoFriends=["siticom", "romance", "comedia"]
console.log(`nome:${nomeFriends}
ano de lancamento:${AnoDelancamentoFriends}
Continua sendo lancado novos episodios? ${continuaLancandoFriends}
Generos:${generoFriends}`)

const nomeBlackMirror= "Black Mirror"
const AnoDeLancamentoBlackMirror=2011
const episodiosBlackMirror=22 
const continuaLancandoBlackMirror= true
const generoBlackMirror=[" Distopia", " Ficção científica", " Suspense", " Drama", " Sátira", " Ficção especulativa"]
console.log(`nome:${nomeBlackMirror}
ano de lancamento:${AnoDeLancamentoBlackMirror}
Continua sendo lancado novos episodios? ${continuaLancandoBlackMirror}
Generos:${generoBlackMirror}`)

//ideia posso tamber criar outro boolean "continua no ar?" ou seja continua na tv aberta ou em programas de streaming.

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const.
const media= (episodiosFriends + episodiosHimym + episodiosBlackMirror)/3
console.log("A media de episodios das 3 series e de: "+ media) 


// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
const continuamLancando= continuaLancandoBlackMirror && continuaLancandoFriends && continuaLancandoHimym;
console.log(continuamLancando)

// Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é,
//  se é um array de strings, só deve receber strings.

