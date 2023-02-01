// projeto semana 1
// Cadastro de Países
/*
1-Você precisará criar pelo menos:
  * uma característica String;
  * uma característica Number;
  * uma característica Boolean;
2-Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima.*/

const country1 = "Estados Unidos da América"
const country1HDI = 0.921
const country1NorthernHemisphere = true
const country1WesternCountry = true
const country1UpToDateData = true


const country2 = "República Popular da China"
const country2HDI = 0.768
const country2NorthernHemisphere = true
const country2WesternCountry = false
const country2UpToDateData = true


const country3 = "República Federativa do Brasil"
const country3HDI= 0.754
const country3NorthernHemisphere = false
const country3WesternCountry = true
const country3UpToDateData = true


const country4 = "Comunidade da Austrália"
const country4HDI = 0.951
const country4NorthernHemisphere = false
const country4WesternCountry = false
const country4UpToDateData = true


// 3-cálculo de média valores numéricos e Imprima. Guarde este valor em uma const.
let calculoMediaHDI = (country1HDI+country2HDI+country3HDI+country4HDI)/4
console.log(`Média do Índice de desenvolvimento humano : ${calculoMediaHDI}`)

// 4-Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
console.log("Dados atualizados : ", country1UpToDateData && country2UpToDateData && country3UpToDateData && country4UpToDateData)

// 5-Crie pelo menos mais uma característica para o item que você criou que seja array.
const country1GPD_MW_Population = [75180, 15080, 331893745]
const country2GPD_MW_Population = [12970, 2084, 1410539758]
const country3GPD_MW_Population = [8570, 2923, 217240060]
const country4GPD_MW_Population = [66408, 31771, 26008700]


// 6-Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
console.log(`País: ${country1}\nPopulação : ${country1GPD_MW_Population[2]}\nRenda per capta : US$ ${country1GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country1GPD_MW_Population[1]}\nIDH : ${country1HDI}\nHemisfério Norte : ${country1NorthernHemisphere}\nPaís do ocidente : ${country1WesternCountry}\n`);

console.log(`País: ${country2}\nPopulação : ${country2GPD_MW_Population[2]}\nRenda per capta : US$ ${country2GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country2GPD_MW_Population[1]}\nIDH : ${country2HDI}\nHemisfério Norte : ${country2NorthernHemisphere}\nPaís do ocidente : ${country2WesternCountry}\n`);

console.log(`País: ${country3}\nPopulação : ${country3GPD_MW_Population[2]}\nRenda per capta : US$ ${country3GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country3GPD_MW_Population[1]}\nIDH : ${country3HDI}\nHemisfério Norte : ${country3NorthernHemisphere}\nPaís do ocidente : ${country3WesternCountry}\n`);

console.log(`País: ${country4}\nPopulação : ${country4GPD_MW_Population[2]}\nRenda per capta : US$ ${country4GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country4GPD_MW_Population[1]}\nIDH : ${country4HDI}\nHemisfério Norte : ${country4NorthernHemisphere}\nPaís do ocidente : ${country4WesternCountry}\n`);