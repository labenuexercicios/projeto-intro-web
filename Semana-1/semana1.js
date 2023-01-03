// *****SEMANA 1*****
//lista de cantores
//1. Características:
// nome do artista, nome do album, ano de lançamento do album, é artista nacional?
//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
const nomeArtista1 = ('Justin Bieber')
const nomeAlbum1 = ('Justice')
const anoLancamentoAlbum1 = 2021
const artistaNacional1 = false

const nomeArtista2 = ('Henrique e Juliano')
const nomeAlbum2 = ('Manifesto Musical(Ao Vivo)')
const anoLancamentoAlbum2 = 2022
const artistaNacional2 = true

const nomeArtista3 = ('Linkin Park')
const nomeAlbum3 = ('Minutes to Midnight')
const anoLancamentoAlbum3 = 2017
const artistaNacional3 = false

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
const media = (anoLancamentoAlbum1 + anoLancamentoAlbum2 + anoLancamentoAlbum3) / 3
console.log (`O valor da média dos valores numéricos é ${media};
`)

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
console.log (`
Todos os valores de variáveis booleanas(artista nacional) criadas até aqui são verdadeiras? 
${artistaNacional1 && artistaNacional2 && artistaNacional3 === true};
`)

//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
const musicasPreferidasAlbum1 = ["2 Much", "Hold On", "Somebody"]
const musicasPreferidasAlbum2 = ["Arranhão", "A Maior Saudade", "Evento Cancelado"]
const musicasPreferidasAlbum3 = ["Leave Out All The Rest", "Bleed It Out", "Shadow Of The Day"]

//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
console.log (`
Nome do Artista:${nomeArtista1.toUpperCase()};
Nome do Álbum:${nomeAlbum1};
Ano de Lançamento do Album: ${anoLancamentoAlbum1};
Artista é nacional? ${artistaNacional1};
Músicas Preferidas do Album: ${musicasPreferidasAlbum1}.`)

console.log (`
Nome do Artista:${nomeArtista2.toUpperCase()};
Nome do Álbum:${nomeAlbum2};
Ano de Lançamento do Album: ${anoLancamentoAlbum2};
Artista é nacional? ${artistaNacional2};
Músicas Preferidas do Album: ${musicasPreferidasAlbum2}.`)

console.log (`
Nome do Artista:${nomeArtista3.toUpperCase()};
Nome do Álbum:${nomeAlbum3};
Ano de Lançamento do Album: ${anoLancamentoAlbum3};
Artista é nacional? ${artistaNacional3}
Músicas Preferidas do Album: ${musicasPreferidasAlbum3}.`)