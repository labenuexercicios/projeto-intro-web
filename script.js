const nome1 = "Lenine"
const idade1 = 63
const ePernambucano1 = true
const musicas1 = ["Paciência","Simples Assim", "A Ponte", "A Rede"]
console.log (nome1.toUpperCase() + "\nIdade: " + idade1 + "\nÉ Pernambucano(a): " + ePernambucano1 + "\nMúsicas: " + musicas1)

const nome2 = "Maria Bethânia"
const idade2 = 76
const ePernambucano2 = false
const musicas2 = ["Reconvexo","Foguete", "Pantanal", "Carcará"]
console.log (nome2.toUpperCase() + "\nIdade: " + idade2 + "\nÉ Pernambucano(a): " + ePernambucano2 + "\nMúsicas: " + musicas2)

const nome3 = "Geraldo Azevedo"
const idade3 = 77
const ePernambucano3 = true
const musicas3 = ["Caravana","Talismã", "Veja", "Coqueiros"]
console.log (nome3.toUpperCase() + "\nIdade: " + idade3 + "\nÉ Pernambucano(a): " + ePernambucano3 + "\nMúsicas: " + musicas3)



for (let i = 0; i<musicas1.length; i++){ 
     console.log(musicas1.toString([i]))
 }; 

for (let i = 0; i<musicas2.length; i++){ 
    console.log(musicas2.toString([i]))
}; 

for (let i = 0; i<musicas3.length; i++){ 
    console.log(musicas3.toString([i]))
}; 

console.log(musicas3)

const mediaIdades = (idade1+idade2+idade3)/3
console.log(mediaIdades)
const verificaPernambucano = ePernambucano1 && ePernambucano2 && ePernambucano3
console.log( verificaPernambucano)
console.log (ePernambucano1 && ePernambucano2 && ePernambucano3)




const objetoLenine = {
    nome: "Lenine",
    idade: 63,
    ePernambucano: true,
    musicas: [" Paciência"," Simples Assim", " A Ponte", " A Rede"],
    image: "./media/lenine.jpg", /*semana 7 criar caminho para img */
    link: "http://www.lenine.com.br/"
}

const objetoBethania = {
    nome: "Maria Bethânia",
    idade: 76,
    ePernambucano: false,
    musicas: [" Reconvexo"," Foguete", " Pantanal", " Carcará"],
    image: "./media/bethania.jpg", /*semana 7 criar caminho para img */
    link: "https://www.biscoitofino.com.br/artista/maria-bethania"
}

const objetoGeraldo = {
    nome: "Geraldo Azevedo",
    idade: 77,
    ePernambucano: true,
    musicas: [" Caravana"," Talismã", " Veja", " Coqueiros"],
    image: "./media/geraldo.jpg", /*semana 7 criar caminho para img */
    link: "https://geraldoazevedo.com.br/"
}

const arrayCompleto = [];
arrayCompleto.push(objetoLenine, objetoBethania, objetoGeraldo);
console.log(arrayCompleto);




const arrayCantor = [];
arrayCantor.push (objetoLenine, objetoBethania, objetoGeraldo);
if (objetoLenine.ePernambucano===true){
    arrayCantor.push(objetoLenine)
}else{
    alert("Alerta! " + "\n" + objetoLenine.nome + " não adicionado, pois não é pernambucano" )}
// if (objetoBethania.ePernambucano===true){
//     arrayCantor.push(objetoBethania)
// }else{
//     alert("Alerta! " + "\n" + objetoBethania.nome + " não adicionada, pois não é pernambucana")} 
if (objetoGeraldo.ePernambucano===true){
    arrayCantor.push(objetoGeraldo)
}else{
     alert("Alerta! " + "\n" + objetoGeraldo.nome + " não adicionado, pois não é pernambucano")}     

// console.log(arrayCantor)



var novoItemArrayLenine = objetoLenine.musicas.push(" Leão do Norte")
var novoItemArrayBethania = objetoBethania.musicas.push(" Carta de Amor")
var novoItemArrayGeraldo = objetoGeraldo.musicas.push(" Chorando e Cantando")


for (let i = 0; i<arrayCompleto.length; i++){ 
   const cancoes = arrayCompleto[i].musicas.toString()
   console.log(cancoes)
}; 

 
function relatorio(objeto){
    for(let i =0; i < arrayCantor.length; i++)
    // console.log(objeto.nome.toUpperCase() + "\nIdade: " + objeto.idade + "\nÉ Pernambucano(a): " + objeto.ePernambucano + "\nMúsicas: " + objeto.musicas);
    console.log(objeto.nome.toUpperCase() + " " + objeto.idade + " " +  objeto.ePernambucano + " " + objeto.musicas);
}

relatorio(objetoLenine)

 

function funcaoDeBusca(arrayObjetos, valorString){
   
    let objetoDevolver = {};

    for (let i=0; i<arrayObjetos.length; i++){
       if (arrayObjetos[i].nome.toUpperCase()=== valorString.toUpperCase()) {
            objetoDevolver.nome = arrayObjetos[i].nome;
            objetoDevolver.idade = arrayObjetos[i].idade;
            objetoDevolver.ePernambucano = arrayObjetos[i].ePernambucano;
            objetoDevolver.musicas = arrayObjetos[i].musicas;
            objetoDevolver.image = arrayObjetos[i].image;
            objetoDevolver.link = arrayObjetos[i].link;
            
       }
    }

    const preenchido = document.getElementById("nome");

    if(objetoDevolver.nome && objetoDevolver.nome.toUpperCase() === valorString.toUpperCase()){
        return objetoDevolver;
    }else if(preenchido.value == ""){
        alert("CAMPO VAZIO! \nDigite o nome do cantor!");
    }else{
        alert("Cantor não encontrado!");
    }    
}

// const objetoPuxado = funcaoDeBusca(arrayCompleto, "Lenine");
// console.log(objetoPuxado)
   
// Semana 11


const listaCantores = document.createElement("ul");
const container = document.getElementById("container");
container.insertAdjacentElement("beforeend", listaCantores);
listaCantores.setAttribute("id", "lista-cantores");
const elementoDeLista = document.getElementById("lista-cantores");

for (let i=0; i<arrayCompleto.length; i++){
elementoDeLista.innerHTML+= `<section><table><tr><td> <img src="${arrayCompleto[i].image}"></td> <td><li><a href="${arrayCompleto[i].link}">${arrayCompleto[i].nome} </a></li> <li>${arrayCompleto[i].idade} anos</li><li>${arrayCompleto[i].musicas}</li></td></tr></table> <section>`;


}

// semana 12

function exibeValorDoCampo(){
    const input = document.getElementById("nome");
   
}

function buscaCantor(){
    const cantorBuscar = document.getElementById("nome")
    const textoDigitado = cantorBuscar.value  
    const cantorRetornado = funcaoDeBusca(arrayCompleto, textoDigitado)
   if(cantorRetornado.nome){
   }
   const elementoDeLista = document.getElementById("lista-cantores");
   elementoDeLista.innerHTML = `<br><section><li><img src="${cantorRetornado.image}"></li> <li><a href="${cantorRetornado.link}">${cantorRetornado.nome} </a></li>  <li>${cantorRetornado.idade} anos</li> <li>Músicas:<br>${cantorRetornado.musicas}</li></section>`
}


function voltaListaCompleta(){
    window.location.reload();
} 







