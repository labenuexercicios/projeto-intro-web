// Projeto Cadastro de Países
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Semana1
// projeto semana 1
// Cadastro de Países
/*
1-Você precisará criar pelo menos:
  * uma característica String;
  * uma característica Number;
  * uma característica Boolean;
2-Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima.*/
const country1Name = "Estados Unidos da América"
const country1HDI = 0.921
const country1NorthernHemisphere = true
const country1WesternCountry = true
const country1UpToDateData = true
const country2Name = "República Popular da China"
const country2HDI = 0.768
const country2NorthernHemisphere = true
const country2WesternCountry = false
const country2UpToDateData = true
const country3Name = "República Federativa do Brasil"
const country3HDI= 0.754
const country3NorthernHemisphere = false
const country3WesternCountry = true
const country3UpToDateData = true
const country4Name = "Comunidade da Austrália"
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

const country1LandBorders = ["Canadá", "México"]
const country2LandBorders = ["Mongólia", "Rússia", "Coreia do Norte", "Vietnã", "Laos", "Mianmar", "Índia", "Butão", "Nepal", "Paquistão", "Afeganistão", "Tajiquistão", "Quirguistão", "Cazaquistão"]
const country3LandBorders = ["Argentina", "Bolívia", "Colômbia", "Guiana Francesa", "Guiana", "Paraguai", "Peru", "Suriname", "Uruguai", "Venezuela"]
const country4LandBorders = ["Não tem fronteira terrestre com ouros países"]
// 6-Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
// console.log(`País: ${country1Name}\nPopulação : ${country1GPD_MW_Population[2]}\nRenda per capta : US$ ${country1GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country1GPD_MW_Population[1]}\nIDH : ${country1HDI}\nHemisfério Norte : ${country1NorthernHemisphere}\nPaís do ocidente : ${country1WesternCountry}\n`);
// console.log(`País: ${country2Name}\nPopulação : ${country2GPD_MW_Population[2]}\nRenda per capta : US$ ${country2GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country2GPD_MW_Population[1]}\nIDH : ${country2HDI}\nHemisfério Norte : ${country2NorthernHemisphere}\nPaís do ocidente : ${country2WesternCountry}\n`);
// console.log(`País: ${country3Name}\nPopulação : ${country3GPD_MW_Population[2]}\nRenda per capta : US$ ${country3GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country3GPD_MW_Population[1]}\nIDH : ${country3HDI}\nHemisfério Norte : ${country3NorthernHemisphere}\nPaís do ocidente : ${country3WesternCountry}\n`);
// console.log(`País: ${country4Name}\nPopulação : ${country4GPD_MW_Population[2]}\nRenda per capta : US$ ${country4GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country4GPD_MW_Population[1]}\nIDH : ${country4HDI}\nHemisfério Norte : ${country4NorthernHemisphere}\nPaís do ocidente : ${country4WesternCountry}\n`);


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Semana 2--------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1-Transforme os itens que criamos nas últimas semanas em objetos.
let country1, country2, country3, country4 = {}

country1 = {...country1, countryName:country1Name, HDI:country1HDI, NorthernHemisphere:country1NorthernHemisphere, WesternCountry:country1WesternCountry, UpToDateData:country1UpToDateData, GPD_MW_Population: country1GPD_MW_Population, LandBorders: country1LandBorders}
country2 = {...country2, countryName:country2Name, HDI:country2HDI, NorthernHemisphere:country2NorthernHemisphere, WesternCountry:country2WesternCountry, UpToDateData:country2UpToDateData, GPD_MW_Population: country2GPD_MW_Population, LandBorders: country2LandBorders}
country3 = {...country3, countryName:country3Name, HDI:country3HDI, NorthernHemisphere:country3NorthernHemisphere, WesternCountry:country3WesternCountry, UpToDateData:country3UpToDateData, GPD_MW_Population: country3GPD_MW_Population, LandBorders: country3LandBorders}
country4 = {...country4, countryName:country4Name, HDI:country4HDI, NorthernHemisphere:country4NorthernHemisphere, WesternCountry:country4WesternCountry, UpToDateData:country4UpToDateData, GPD_MW_Population: country4GPD_MW_Population, LandBorders: country4LandBorders}

// 2-Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
let arrayCountries = []

// 3-Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push(). Imprima este array no console.log.
// arrayCountries.push(country1, country2, country3, country4)
// console.log(arrayCountries);

// 4-Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
// 5-Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push


if (country1.UpToDateData) {
  arrayCountries.push(country1)
} else {
  alert(`item não adicionado`);
}

if (country2.UpToDateData) {
  arrayCountries.push(country2)
} else {
  alert(`item não adicionado`);
}

if (country3.UpToDateData) {
  arrayCountries.push(country3)
} else {
  alert(`item não adicionado`);
}

if (country4.UpToDateData) {
  arrayCountries.push(country4)
} else {
  alert(`item não adicionado`);
}
console.log(arrayCountries);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Semana3
//1. Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
for(let u of arrayCountries){
  console.log(u.countryName + " - Fronteira terrestre com : "+ u.LandBorders.join(", "));
}
// 2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
for (const i of arrayCountries) {
  console.log(`País: ${i.countryName}\nPopulação : ${i.GPD_MW_Population[2]}\nRenda per capta : US$ ${i.GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${i.GPD_MW_Population[1]}\nIDH : ${i.HDI}\nHemisfério Norte : ${i.NorthernHemisphere}\nPaís do ocidente : ${i.WesternCountry}\n`)
}
// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
function countryReport(c) {
  return (`País: ${c.countryName}\nPopulação : ${c.GPD_MW_Population[2]}\nRenda per capta : US$ ${c.GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${c.GPD_MW_Population[1]}\nIDH : ${c.HDI}\nHemisfério Norte : ${c.NorthernHemisphere}\nPaís do ocidente : ${c.WesternCountry}\n`)
}
console.log("Função CountryReport:\n\n" + countryReport(country1) );
// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
function searchCountry(array, string) {
    for (const x in array) {
      if (array[x].countryName.includes(string)) {
        console.log(array[x].countryName);
      } else {
        alert("País não encontrado.")
      } 
    }
}
searchCountry(arrayCountries, "Brasil")