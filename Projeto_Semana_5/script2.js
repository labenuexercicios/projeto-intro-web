let country1, country2, country3, country4 = {};

country1 = { ...country1, 
  countryName: "Estados Unidos da América", 
  HDI: 0.921, 
  NorthernHemisphere: true, 
  WesternCountry: true, 
  UpToDateData: true, 
  GPD_MW_Population: [75180, 15080, 331893745], 
  LandBorders: ["Canadá", "México"], 
  Image: "./assets/640px-Flag_of_the_United_States.svg.webp", 
  Link: "https://pt.wikipedia.org/wiki/Estados_Unidos" };

country2 = { ...country2, 
  countryName: "República Popular da China", 
  HDI: 0.768, 
  NorthernHemisphere: true, 
  WesternCountry: false, 
  UpToDateData: true, 
  GPD_MW_Population: [12970, 2084, 1410539758], 
  LandBorders: ["Mongólia", "Rússia", "Coreia do Norte", "Vietnã", "Laos", "Mianmar", "Índia", "Butão", "Nepal", "Paquistão", "Afeganistão", "Tajiquistão", "Quirguistão", "Cazaquistão"], 
  Image: "./assets/640px-Flag_of_the_People's_Republic_of_China.svg.png", 
  Link: "https://pt.wikipedia.org/wiki/China" };

country3 = { ...country3, 
  countryName: "República Federativa do Brasil", 
  HDI: 0.754, 
  NorthernHemisphere: false, 
  WesternCountry: true, 
  UpToDateData: true, 
  GPD_MW_Population: [8570, 2923, 217240060], 
  LandBorders: ["Argentina", "Bolívia", "Colômbia", "Guiana Francesa", "Guiana", "Paraguai", "Peru", "Suriname", "Uruguai", "Venezuela"], 
  Image: "./assets/640px-Flag_of_Brazil.svg.webp", Link: "https://pt.wikipedia.org/wiki/Brasil" };

country4 = { ...country4, 
  countryName: "Comunidade da Austrália", 
  HDI: 0.951, 
  NorthernHemisphere: false, 
  WesternCountry: false, 
  UpToDateData: true, 
  GPD_MW_Population: [66408, 31771, 26008700], 
  LandBorders: ["Não tem fronteira terrestre com ouros países"], 
  Image: "./assets/640px-Flag_of_Australia_(converted).svg.png", 
  Link: "https://pt.wikipedia.org/wiki/Austr%C3%A1lia" };

let arrayCountries = [];

if (country1.UpToDateData) {
  arrayCountries.push(country1)
} else {
  alert(`item não adicionado`);
}; if (country2.UpToDateData) {
  arrayCountries.push(country2)
} else {
  alert(`item não adicionado`);
}; if (country3.UpToDateData) {
  arrayCountries.push(country3)
} else {
  alert(`item não adicionado`);
}; if (country4.UpToDateData) {
  arrayCountries.push(country4)
} else {
  alert(`item não adicionado`);
}; console.log(arrayCountries);

console.log("valor de arrayCountries: " + arrayCountries)

let calculoMediaHDI = (arrayCountries[0].HDI + arrayCountries[1].HDI + arrayCountries[2].HDI + arrayCountries[3].HDI) / arrayCountries.length
console.log(`Média do Índice de desenvolvimento humano : ${calculoMediaHDI}`);

console.log("Dados atualizados : ", country1.UpToDateData && country2.UpToDateData && country3.UpToDateData && country4.UpToDateData);

//Semana3
//1. Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
for (let u of arrayCountries) {
  console.log(u.countryName + " - Fronteira terrestre com : " + u.LandBorders.join(", "));
};
// 2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
for (const i of arrayCountries) {
  console.log(`País: ${i.countryName}\nPopulação : ${i.GPD_MW_Population[2]}\nRenda per capta : US$ ${i.GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${i.GPD_MW_Population[1]}\nIDH : ${i.HDI}\nHemisfério Norte : ${i.NorthernHemisphere}\nPaís do ocidente : ${i.WesternCountry}\n`)
};
// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
function countryReport(c) {
  return (`País: ${c.countryName}\nPopulação : ${c.GPD_MW_Population[2]}\nRenda per capta : US$ ${c.GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${c.GPD_MW_Population[1]}\nIDH : ${c.HDI}\nHemisfério Norte : ${c.NorthernHemisphere}\nPaís do ocidente : ${c.WesternCountry}\n`)
};
console.log("Função CountryReport:\n\n" + countryReport(country1));
// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
let contPaises = document.getElementById("contPaises");

// País: ${i.countryName}\ ${i.GPD_MW_Population[2]}\nRenda per  US$ ${i.GPD_MW_Population[0]}\nSalário mínimo anual : US$ ${i.GPD_MW_Population[1]}\nIDH : ${i.HDI}\${i.NorthernHemisphere}\${i.WesternCountry}\n`)

function createSection(recebaPais) {
  let section = `<section>
                <img class="bandeiraMedia" src="${recebaPais.Image}" alt="Bandeira ${recebaPais.countryName}">
                <ul>
                    <li><a href="${recebaPais.Link}">País: ${recebaPais.countryName.toUpperCase()}</a></li>
                    <br/>
                    <li>População : ${recebaPais.GPD_MW_Population[2]}</li>
                    <li>Renda per capta : US$ ${recebaPais.GPD_MW_Population[0]}</li>
                    <li>Salário mínimo anual : US$ ${recebaPais.GPD_MW_Population[1]}</li>
                    <li>IDH : ${recebaPais.HDI}</li>
                    <li>Hemisfério Norte : ${recebaPais.NorthernHemisphere}</li>
                    <li>País do ocidente : ${recebaPais.WesternCountry}</li>
                </ul>
            </section>`

  contPaises.innerHTML += section
};

function searchCountry(array, string) {
  contPaises.innerHTML = ""
  let arrayCountriesFiltred = []
  for (const x in array) {
    if (array[x].countryName.includes(string)) {
      console.log(array[x].countryName);
      createSection(array[x])
      arrayCountriesFiltred.push(array[x])
    }
  }
  if (arrayCountriesFiltred.length == 0) {
    alert("País não encontrado.")
  }
  console.log(arrayCountriesFiltred)
};

searchCountry(arrayCountries, "a")

// searchCountry(arrayCountries, "Brasil")
// document.getElementById("textoPesquisa").value

function clickPress() {
  contPaises.innerHTML = ""
  let textoPesquisa = document.getElementById("textoPesquisa")
  if (textoPesquisa.value.length === 0) {
    alert("pesquisa vazia")
  } else {
    searchCountry(arrayCountries, textoPesquisa.value)
  }
};

document.getElementById("pesquisaBotao").addEventListener("click", function (element) { clickPress() });

document.getElementById("textoPesquisa").addEventListener("keypress", function (element) { 
  if (element.key === "Enter") 
  {clickPress() }});
