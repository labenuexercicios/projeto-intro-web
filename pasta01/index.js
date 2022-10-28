console.log("Ola mundo!")

const animal02=[
    {nome:"Cachorro",           familia:"Canídeos",      nomeCientifico:"Canis lupus familiaris",    tempoMedioDeVida:15, classe:"Mamifero", imagem:"https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_desktop-1.jpg"},
    {nome:"Gato",               familia:"Felídeos",      nomeCientifico:"Felis catus",               tempoMedioDeVida:15, classe:"Mamifero", imagem:"https://www.petz.com.br/blog/wp-content/uploads/2022/02/gato-e-carnivoro2.jpg"},
    {nome:"Boi",                familia:"Bovídeos",      nomeCientifico:"Bos taurus",                tempoMedioDeVida:20, classe:"Mamifero", imagem:"https://www.petz.com.br/blog/wp-content/uploads/2022/05/diferenca-entre-boi-e-touro-topo.jpg"},
    {nome:"Cavalo",             familia:"Equídeos",      nomeCientifico:"Equus ferus caballus",      tempoMedioDeVida:30, classe:"Mamifero", imagem:"https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia16043/caracteristicas-cavalos-saudaveis-artigos-cursos-cpt.jpg"},
    {nome:"Asno",               familia:"Equídeos",      nomeCientifico:"Equus asinus",              tempoMedioDeVida:34, classe:"Mamifero", imagem:"https://www.mundoecologia.com.br/wp-content/uploads/2019/12/Asno-de-Amiata-Caracter%C3%ADsticas.jpg"},
    {nome:"Ovelha",             familia:"Bovídeos",      nomeCientifico:"Ovis aries",                tempoMedioDeVida:11, classe:"Mamifero", imagem:"https://www.infoescola.com/wp-content/uploads/2008/07/ovelha_112282007.jpg"},
    {nome:"Cabra",              familia:"Bovídeos",      nomeCientifico:"Capra aegagrus hircus",     tempoMedioDeVida:16, classe:"Mamifero", imagem:"https://www.petz.com.br/blog/wp-content/uploads/2022/01/alimentacao-da-cabra3.jpg"},
    {nome:"Lobo",               familia:"Canídeos",      nomeCientifico:"Canis lupus",               tempoMedioDeVida:16, classe:"Mamifero", imagem:"https://s5.static.brasilescola.uol.com.br/be/2021/10/lobo.jpg"},
    {nome:"Onça-pintada",       familia:"Felídeos",      nomeCientifico:"Panthera onca",             tempoMedioDeVida:14, classe:"Mamifero", imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jaguar_%28Panthera_onca_palustris%29_female_Piquiri_River_2.JPG/800px-Jaguar_%28Panthera_onca_palustris%29_female_Piquiri_River_2.JPG"},
    {nome:"Gato-do-mato",       familia:"Felídeos",      nomeCientifico:"Leopardus tigrinus",        tempoMedioDeVida:20, classe:"Mamifero", imagem:"https://s2.glbimg.com/JXUUHu_ze2QPKXq9UCR69at9a3I=/e.glbimg.com/og/ed/f/original/2022/09/05/1-conheca-o-gato-do-mato-pequeno-um-dos-menores-felinos-selvagens-sul-americanos.jpg"},
    {nome:"Zebra",              familia:"Equídeos",      nomeCientifico:"Equus quagga",              tempoMedioDeVida:40, classe:"Mamifero", imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Equus_zebra_-_Disney%27s_Animal_Kingdom_Lodge%2C_Orlando%2C_Florida%2C_USA_-_20100119.jpg/1200px-Equus_zebra_-_Disney%27s_Animal_Kingdom_Lodge%2C_Orlando%2C_Florida%2C_USA_-_20100119.jpg"},
    {nome:"Papagaio-chauá",     familia:"Psittacidae",   nomeCientifico:"Amazona rhodocorytha",      tempoMedioDeVida:60, classe:"Ave",      imagem:"https://conexaoplaneta.com.br/wp-content/uploads/2017/03/papagaio-chau%C3%A1.jpg"},
    {nome:"Arara-canindé",      familia:"Psittacidae",   nomeCientifico:"Ara ararauna",              tempoMedioDeVida:70, classe:"Ave",      imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ara_ararauna_Luc_Viatour.jpg/280px-Ara_ararauna_Luc_Viatour.jpg"},
    {nome:"Arara-azul-grande",  familia:"Psittacidae",   nomeCientifico:"Anodorhynchus hyacinthinus",tempoMedioDeVida:50, classe:"Ave",      imagem:"http://www.fiocruz.br/biosseguranca/Bis/infantil/araraazul.jpg"},
    {nome:"Papagaio-cinzento",  familia:"Psittacidae",   nomeCientifico:"Psittacus erithacus",       tempoMedioDeVida:23, classe:"Ave",      imagem:"https://2.bp.blogspot.com/-33K8YwdrpOY/WoXYTtjBkCI/AAAAAAAALG4/DULgR7cNnBQuOWPpkL3bW51hHddP1JBQgCLcBGAs/s1600/papagaio-cinzento19-02-2016-10-45-41.jpg"},
   ]
//-------------------------------DOM------------------------------------------------------
let foto = document.getElementById("foto")
let familia = document.getElementById("familia")
let nomeCientifico = document.getElementById("nome-cientifico")
let tempoDeVida = document.getElementById("tempo-de-vida")
let classe = document.getElementById("classe")
let bicho = document.getElementById("bicho")
let testeCracha = document.getElementsByClassName("infobicho")
let cracha = document.getElementsByClassName("cracha")
let nome = document.getElementById("nome")
let centro = document.getElementsByClassName("centro")
let novoSecion = document.createElement("section")


//--------------------------------Teste-DOM-----------------------------------------------------

const tituloCracha = ["Familia","Nome Cientifico","Tempo Medio De Vida","Classe",]

let animal01 = [...animal02]


const buscaBicho = ()=>{
    if(bicho.value===""){
        alert("Busca vazia. Os valores foram retornado!")
    }
   animal01=animal02.filter((animal)=>{
    return animal.tempoMedioDeVida == (bicho.value)|| animal.classe.toLowerCase().includes(bicho.value.toLowerCase())|| animal.familia.toLowerCase().includes(bicho.value.toLowerCase())|| animal.nome.toLowerCase().includes(bicho.value.toLowerCase())
   })
   
  let limpa = document.getElementsByClassName("cracha")
  const tamanho = limpa.length
  imprimi(animal01)
 
    
  for(let i =0; i< tamanho; i++){
    console.log(limpa)
    limpa[0].remove()
}  
}

const imprimi = (animal01) =>{

for (let i in animal01){
    let contador = 0
    let novaSection = document.createElement("section")
    let novoUl = document.createElement("ul")
    novaSection.appendChild(novoUl).setAttribute("class","infobicho")
    for(j in animal01[i]){
        if(j!=="nome"){
            if(j!=="imagem"){
                let novoLi = document.createElement("li")
                let conteudoLi = document.createTextNode(`${tituloCracha[contador]}: ${animal01[i][j]}`)
                novoLi.appendChild(conteudoLi)
                novoUl.insertAdjacentElement("beforeend",novoLi).setAttribute("class",j)
                contador++
             }else{//adiciona Imagem
                let novoLi = document.createElement("li")
                let conteudoImg = document.createTextNode(`${animal01[i][j]}`)
                let imagem = document.createElement("img")
                imagem.setAttribute("src",animal01[i][j])
                imagem.appendChild(conteudoImg)
                novoLi.appendChild(imagem).setAttribute("class","imagem")
                novoUl.insertAdjacentElement("beforeend",novoLi).setAttribute("class","foto")
            }
        }else{//adicionar header
            let novoH2 = document.createElement("h2")
            let conteudoH2 = document.createTextNode(`${animal01[i][j]}`)
            novoH2.appendChild(conteudoH2)
            novaSection.insertAdjacentElement("afterbegin",novoH2)
        }
}
centro[0].insertAdjacentElement("beforeend",novaSection).setAttribute("class", "cracha")
}
}
imprimi(animal01)

