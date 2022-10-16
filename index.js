
//SEMANA 01
let goleiro = {
        nome: "marcelo grohe",
        idade: 30,
        imagem: "./jogadores/goleiro.jpg",
        titular: true,
        //SEMANA 02
        golsPorPartida: [0,1,2,2,3,1,0],
        link: "https://pt.wikipedia.org/wiki/Marcelo_Grohe"
}

let zagueiro = {
        nome: "pedro geromel",
        idade: 32,
        imagem: "./jogadores/geromel.jpg",
        titular: true,
        //SEMANA 02
        golsPorPartida: [0,2,4,8,9,12,0],
        link: "https://pt.wikipedia.org/wiki/Pedro_Geromel"
        
}

let meioCampo = {
        nome: "luan",
        idade: 24,
        imagem:"./jogadores/luan.png",
        titular: true,
        //SEMANA 02
        golsPorPartida: [0,3,4,9,15,16,0],
        link: "https://pt.wikipedia.org/wiki/Luan_Guilherme_de_Jesus_Vieira"
}

/*SEMANA 01
let mediaIdade = (idade+idade1+idade2)/3
console.log(mediaIdade)

let verificaTitular = titular&&titular1&&titular2 === true;
console.log(verificaTitular)

SEMANA 02
console.log(`${nome.toUpperCase()} \n${idade} \n${titular} \n${golsPorPartida}`)
console.log(`${nome1.toUpperCase()} \n${idade1} \n${titular1} \n${golsPorPartida1}`)
console.log(`${nome2.toUpperCase()} \n${idade2} \n${titular2} \n${golsPorPartida2}`)
*/


//Semana 03 - Criação dos objetos
//semana 03.2 - criação do array vazio:

let jogadores = []

//semana 04
if (goleiro.titular===true){
        jogadores.push(goleiro)
}
else{
        alert("O jogador "+goleiro.nome+" não foi adicionado!")
}


if (zagueiro.titular===true){
        jogadores.push(zagueiro)
}
else{
        alert("O jogador "+zagueiro.nome+" não foi adicionado!")
}

if (meioCampo.titular===true){
        jogadores.push(meioCampo)
}
else{
        alert("O jogador "+meioCampo.nome+" não foi adicionado!")
}

// jogadores.push(goleiro, zagueiro, meioCampo)
// console.log(jogadores)

//semana 05

let string= ""
for(i in goleiro.golsPorPartida){
        string += `${goleiro.golsPorPartida[i]}, `
}


let string1=""
for(let i in zagueiro.golsPorPartida){
        string1 += `${zagueiro.golsPorPartida[i]}, `
}


let string2=""
for(let i in meioCampo.golsPorPartida){
        string2+= `${meioCampo.golsPorPartida[i]}, `
}


//semana 02 e alteração na semana 05
// console.log(`${goleiro.nome.toUpperCase()} \n${goleiro.idade} \n${goleiro.titular} \n${string}`)
// console.log(`${zagueiro.nome.toUpperCase()} \n${zagueiro.idade} \n${zagueiro.titular} \n${string1}`)
// console.log(`${meioCampo.nome.toUpperCase()} \n${meioCampo.idade} \n${meioCampo.titular} \n${string2}`)

//semana 05 parte 02


for(let i in jogadores){
        console.log(jogadores[i])
}

//semana 06

function objString(objeto){
        let stringObj = ""
        console.log(stringObj = objeto)
}
objString(goleiro)

function retornaobjeto(arraydeobjetos,string){
        let retornaobjeto = {}
        for(let i in arraydeobjetos){
                for(let j in arraydeobjetos[i]){
                        if(arraydeobjetos[i][j]===string){
                                let main = document.getElementById("main")
                                let container = document.createElement('div')
                                let section = document.createElement('section')
                                let imagem = document.createElement('img')
                                let ul = document.createElement("ul")
                                let li = document.createElement("li")
                                let li1 = document.createElement("li")
                                let li2 = document.createElement("li")   
                                let a = document.createElement("a")  

                                container.setAttribute("id", "corpo")
                                section.setAttribute("id", "secao1")
                                imagem.src = jogadores[i].imagem
                                a.setAttribute("href", jogadores[i].link)
                                a.setAttribute("target", "_blank")
                                a.innerHTML = jogadores[i].nome.toUpperCase()
                                li.innerHTML = `Nome: `
                                li1.innerHTML = `Idade:${jogadores[i].idade} `
                                li2.innerHTML = `Gols por partida: ${jogadores[i].golsPorPartida}`
                                
                                main.appendChild(container)
                                container.appendChild(section)
                                section.appendChild(imagem)
                                section.appendChild(ul)
                                ul.appendChild(li)
                                ul.appendChild(li1)
                                ul.appendChild(li2)
                                li.appendChild(a)
      


                        }
                }
        }
}

for(i in jogadores){ // lapagar no html
        let container = document.getElementById('corpo')
        let section = document.createElement('section')
        let imagem = document.createElement('img')
        let ul = document.createElement("ul")
        let li = document.createElement("li")
        let li1 = document.createElement("li")
        let li2 = document.createElement("li")   
        let a = document.createElement("a")      

        section.setAttribute("id", "secao1")
        imagem.src = jogadores[i].imagem
        a.setAttribute("href", jogadores[i].link)
        a.setAttribute("target", "_blank")
        a.innerHTML = jogadores[i].nome.toUpperCase()
        li.innerHTML = "Nome: "
        li1.innerHTML = `Idade: ${jogadores[i].idade}`
        li2.innerHTML = `Gols por partida: ${jogadores[i].golsPorPartida}`
        
        container.appendChild(section)
        section.appendChild(imagem)
        section.appendChild(ul)
        ul.appendChild(li)
        ul.appendChild(li1)
        ul.appendChild(li2)
        li.appendChild(a)
      
}

function busca(event){
        event.preventDefault()
        let input = document.getElementById("input").value.toLowerCase()
        if(input ===""){
                alert("jogador não encontrado :(")
        }

        else{
                document.getElementById("corpo").remove()
                retornaobjeto(jogadores, input)
                
        }
        
}



