//presidentes

lula = {
    nome:"lula",
    partido:"pt",
    esquerda : true,
    tempopoder: 8,
    projetos: [ "bolsa família", "fome zero", "primeiro emprego"]
}
FHC = {
    nome:"FHC",
    partido: "PSDB",
    esquerda: false,
    tempopoder: 8,
    projetos :["Programa Auxílio-Gás", "Programa Nacional de Renda Mínima vinculada à Saúde","Cadastramento Único do Governo Federal"]    
}
dilma = {
    nome:"dilma",
    partido:"pt",
    esquerda: true,
    tempopoder: 6,
    projetos:["Mais Médicos","PAC2" ,"Programa Nacional de Acesso ao Ensino Técnico e Emprego"]
}
var presidentes = [lula, FHC, dilma]

var presidentesdeesquerda = []
if (lula.esquerda == true){
    presidentesdeesquerda.push(lula)
} else {
    alert(`${lula} não foi adicionado`)
} 

if (FHC.esquerda == true){
    presidentesdeesquerda.push(FHC)
} else {
    alert(`${FHC.nome} não foi adicionado`)
} 

if (dilma.esquerda == true){
    presidentesdeesquerda.push(dilma)
} else {
    alert(`${dilma} não foi adicionado`)
} 

//semana 3
//1
var projetostring = ""
for ( let i = 0; i <= (lula.projetos.length-1); i++){
    projetostring += lula.projetos[i] + ","
 }
 lula.projetos = projetostring
 projetostring = ""

 for ( let i = 0; i <= (FHC.projetos.length-1); i++){
    projetostring += FHC.projetos[i] + ","
 }
 FHC.projetos = projetostring
 projetostring = ""

 for ( let i = 0; i <= (dilma.projetos.length-1); i++){
    projetostring += dilma.projetos[i] + ","
 }
 dilma.projetos = projetostring


//2 - adicionar um objeto ao array de objetos

var collor = [{
    nome: "collor",
    partido:"PTB",
    esquerda: false,
    tempopoder: 2,
 }]
 
 presidentes.push(collor[0])

for (i = 0; i <= (presidentes.length-1); i++){
    console.log(presidentes[i])
}

//função

function batata(nome) {
    for(i = 0; i <= (presidentes.length-1); i++){
    if (nome == presidentes[i].nome){
        console.log("nome: "+presidentes[i].nome)
        console.log("partido:"+ presidentes[i].partido)
        console.log("de esquerda?:" + presidentes[i].esquerda)
        console.log("tempo no pode:"+presidentes[i].tempopoder)
        console.log("projetos: "+presidentes[i].projetos)
    }
}
}

function edopt(obj, string){
    for(i = 0; i <= (presidentes.length-1); i++){
        if (string == obj[i].partido){
            console.log(`Presidente de esquerda ${obj[i].nome}`)
        }
}
}
console.log(edopt(presidentes, "pt"))
console.log(batata(prompt("qual é o presidentee???")))
