// projeto semana 1
// Cadastro de Países
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
let calculoMediaHDI = (country1HDI+country2HDI+country3HDI+country4HDI)/4
console.log(`Média do Índice de desenvolvimento humano : ${calculoMediaHDI}`)
console.log("Dados atualizados : ", country1UpToDateData && country2UpToDateData && country3UpToDateData && country4UpToDateData)
const country1GPD_MW_Population = [75180, 15080, 331893745]
const country2GPD_MW_Population = [12970, 2084, 1410539758]
const country3GPD_MW_Population = [8570, 2923, 217240060]
const country4GPD_MW_Population = [66408, 31771, 26008700]
console.log(`País: ${country1Name}\nPopulação : ${country1GPD_MW_Population[2]}\nRenda per capta : US$ ${country1GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country1GPD_MW_Population[1]}\nIDH : ${country1HDI}\nHemisfério Norte : ${country1NorthernHemisphere}\nPaís do ocidente : ${country1WesternCountry}\n`);
console.log(`País: ${country2Name}\nPopulação : ${country2GPD_MW_Population[2]}\nRenda per capta : US$ ${country2GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country2GPD_MW_Population[1]}\nIDH : ${country2HDI}\nHemisfério Norte : ${country2NorthernHemisphere}\nPaís do ocidente : ${country2WesternCountry}\n`);
console.log(`País: ${country3Name}\nPopulação : ${country3GPD_MW_Population[2]}\nRenda per capta : US$ ${country3GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country3GPD_MW_Population[1]}\nIDH : ${country3HDI}\nHemisfério Norte : ${country3NorthernHemisphere}\nPaís do ocidente : ${country3WesternCountry}\n`);
console.log(`País: ${country4Name}\nPopulação : ${country4GPD_MW_Population[2]}\nRenda per capta : US$ ${country4GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${country4GPD_MW_Population[1]}\nIDH : ${country4HDI}\nHemisfério Norte : ${country4NorthernHemisphere}\nPaís do ocidente : ${country4WesternCountry}\n`);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Semana 2--------------------------------------------------------------------------------------------------------------------------------------------------------------

let country1, country2, country3, country4 = {}
country1 = {...country1, countryName:country1Name, HDI:country1HDI, NorthernHemisphere:country1NorthernHemisphere, WesternCountry:country1WesternCountry, UpToDateData:country1UpToDateData, GPD_MW_Population: country1GPD_MW_Population}
country2 = {...country2, countryName:country2Name, HDI:country2HDI, NorthernHemisphere:country2NorthernHemisphere, WesternCountry:country2WesternCountry, UpToDateData:country2UpToDateData, GPD_MW_Population: country2GPD_MW_Population}
country3 = {...country3, countryName:country3Name, HDI:country3HDI, NorthernHemisphere:country3NorthernHemisphere, WesternCountry:country3WesternCountry, UpToDateData:country3UpToDateData, GPD_MW_Population: country3GPD_MW_Population}
country4 = {...country4, countryName:country4Name, HDI:country4HDI, NorthernHemisphere:country4NorthernHemisphere, WesternCountry:country4WesternCountry, UpToDateData:country4UpToDateData, GPD_MW_Population: country4GPD_MW_Population}
let arrayCountries = []
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