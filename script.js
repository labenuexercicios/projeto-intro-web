//--------- Semana 1 ------------
const nomeCidade1 = 'São Paulo'
const populacao1 = 12330
const ehCapital1 = true 
const apelidos1 = ['SP', 'Sampa', 'Terra da Garoa'] // Acrescentado na Semana 2

const nomeCidade2 = 'Rio de Janeiro'
const populacao2 = 6748
const ehCapital2 = true 
const apelidos2 = ['Cidade Maravilhosa', 'La ville merveilleuse', 'Rio 40 Graus'] // Acrescentado na Semana 2

const nomeCidade3 = 'Brejo Santo'
const populacao3 = 50
const ehCapital3 = false
const apelidos3 = ['Brejim', 'BS', 'Cidade do Brejal'] // Acrescentado na Semana 2

const mediaPopulacao = (populacao1 + populacao2 + populacao3)/3

console.log(`A média da população é: ${mediaPopulacao} mil pessoas.`)

//const verificaCapital = ehCapital1&&ehCapital2&&ehCapital3

//console.log(verificaCapital)

// --------- Semana 2 -----------
// console.log(nomeCidade1.toUpperCase())
// console.log(populacao1 >=1000?`População: ${populacao1/1000} milhões de habitantes.`:
//         `PopulaçãoPopulação: ${populacao1} mil habitantes.`)
// console.log(`${nomeCidade1} é uma capital: ${ehCapital1}`)
// console.log('Apeplidos:', apelidos1)

// console.log(nomeCidade2.toUpperCase())
// console.log(populacao2 >=1000?`População: ${populacao2/1000} milhões de habitantes.`:
//         `PopulaçãoPopulação: ${populacao2} mil habitantes.`)
// console.log(`${nomeCidade2} é uma capital: ${ehCapital2}`)
// console.log('Apeplidos:', apelidos2)

// console.log(nomeCidade3.toUpperCase())
// console.log(populacao3 >=1000?`População: ${populacao3/1000} milhões de habitantes.`:
//         `PopulaçãoPopulação: ${populacao3} mil habitantes.`)
// console.log(`${nomeCidade3} é uma capital: ${ehCapital3}`)
// console.log('Apeplidos:', apelidos3)

//---------Semana 3 --------------

const objCidade1 = {
    nomeCidade: 'São Paulo',
    populacao: 12330,
    ehCapital: true, 
    apelidos: ['SP', 'Sampa', 'Terra da Garoa'],
    imagem: "./img/sao-paulo.jpg",
    link: "https://www.youtube.com/watch?v=6GpsCMo-V58"
}
const objCidade2 = {
    nomeCidade: 'Rio de Janeiro',
    populacao: 6748,
    ehCapital: true, 
    apelidos: ['Cidade Maravilhosa', 'La ville merveilleuse', 'Rio 40 Graus'],
    imagem: "./img/rio-de-janeiro.jpg",
    link:"https://www.youtube.com/watch?v=1Y94zhKOAAw"
}

const objCidade3 = {
    nomeCidade: 'Brejo Santo',
    populacao: 50,
    ehCapital:false,
    apelidos: ['Brejim', 'BS', 'Cidade do Brejal'],
    imagem: "./img/brejo-santo.jpg",
    link:"https://www.youtube.com/watch?v=ghkOJVMOtyU&t=615s"
}

const arrayCidades =[]

arrayCidades.push(objCidade1)
arrayCidades.push(objCidade2)
arrayCidades.push(objCidade3)

//console.log(arrayCidades)

//--------Semana 4 ------------
// objCidade1.ehCapital === true?arrayCidades.push(objCidade1): alert(`${objCidade1.nomeCidade} não foi adicionado`)
// objCidade2.ehCapital === true?arrayCidades.push(objCidade2): alert(`${objCidade2.nomeCidade} não foi adicionado`)
// objCidade3.ehCapital === true?arrayCidades.push(objCidade3): alert(`${objCidade3.nomeCidade} não foi adicionado`)


//---------- Semana 5 --------------


arrayCidades.forEach(function relatorio1 (cidade){
    console.log(cidade.nomeCidade.toUpperCase())
    console.log(cidade.populacao >=1000?`População: ${cidade.populacao/1000} milhões de habitantes.`:
        `PopulaçãoPopulação: ${cidade.populacao} mil habitantes.`)
    console.log(`${cidade.ehCapital} é uma capital: ${cidade.ehCapital}`)
    console.log('Apeplidos:', cidade.apelidos.toString().replace(/,/g,', '))
})

for(let cidade of arrayCidades){
    for(let propriedade in cidade) {     
        console.log(`${propriedade}:`, Array.isArray(cidade[propriedade])?
            `${cidade[propriedade].toString().replace(/,/g,', ')}`:`${cidade[propriedade]}`)
    }
}



//---------- Semana 11 --------------

function insertCard (arr){
    for (let obj of arr){
        document.getElementById("lista1").innerHTML += `
        <article class="card-container">
                <figure class="imagem">
                    <img src="${obj.imagem}" alt="img ${obj.nomeCidade}">
                </figure>
                <ul>
                    <li> <a href="${obj.link}" target="_blank" >${obj.nomeCidade}</a> </li>
                    <li>População: ${obj.populacao<1000?obj.populacao+" mil habitantes":(obj.populacao/1000)+" mi habitantes"}</li>
                    <li>É Capital: ${obj.ehCapital?"Sim":"Não"}</li>
                    <li>Apelidos: ${obj.apelidos.join(", ")}</li>
                </ul>
        </article>
        `
    }
}

insertCard(arrayCidades)

//----------- Semana 12 -----------
const inputSearchCity = document.querySelector(".form-search input")
const buttonSearchCity = document.querySelector(".form-search button")
const listCity = document.querySelectorAll(".lista li:first-child")


buttonSearchCity.addEventListener('click', event => {
    event.preventDefault()
    
    if(inputSearchCity.value === ""){
        removeHidden(listCity)
        alert("Nenhum nome digitado!")
    } else {
        addHidden(listCity)
        removeHidden(listCity)
    }
})


function addHidden (list){
    const inputValue = inputSearchCity.value.trim().toLowerCase()
    Array.from(list).filter(cidade => !cidade.textContent.toLowerCase().includes(inputValue))
    .forEach(cidade => {
        cidade.parentElement.parentElement.classList.add('hidden')
    })
}

function removeHidden (list){
    const inputValue = inputSearchCity.value.trim().toLowerCase()
    Array.from(list).filter(cidade => cidade.textContent.toLowerCase().includes(inputValue))
    .forEach(cidade => {
        cidade.parentElement.parentElement.classList.remove('hidden')
    })
}




















