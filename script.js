//SEMANA 2

// 1. Transforme os itens que criamos nas últimas semanas em objetos.
  const carta1 = {
 Personagem: "Saci-Pererê",
personagemProtetor : false,  
localidade : "mata",
anoDaLenda : 1918
}

const carta2 = {
 Personagem : "Lobisomem",
 PersonagemDoFolclore : true,
 localidade : "cidade do interior",
 anoDaLenda : 1400
}

const carta3 ={
Personagem : "Boto-Rosa",
personagemProtetor : false,
localidade : "lago",
anoDaLenda : 1800
}

const carta4 ={
Personagem : "Cuca",
personagemProtetor : false,
 localidade : "cidade grande",
 anoDaLenda: 1921
}

const carta5 = {
Personagem : "Caipora",
personagemProtetor : true,
localidade : "mata fechada",
anoDaLenda: 1870
}
 const carta6 ={
 Personagem : "Mula sem Cabeça",
 personagemProtetor : false,
 localidade : "cidade",
 anoDaLenda: 1972
 }

 const carta7 = {
 Persoanagem : "Curupira",
 personagemProtetor : true,
localidade : "mata",
anoDaLenda : 1560
 }

 const carta8 = {
Personagem : "Iara",
personagemProtetor : true,
 localidade : "mar",
 anoDaLenda: 1600
 }
//  2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
 const array = []
 // 3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

//  array.push(carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8)
//  console.log(array)


// 4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

if (carta1.personagemProtetor === true){
    array.push(carta1)
} else {
    alert("Carta 1 não adicionada pois é false!")
}
if (carta2.personagemProtetor === true){
    array.push(carta2)
} else {
    alert("Carta 2 não adicionada pois é false!")
} 
if (carta3.personagemProtetor === true){
     array.push(carta3)
} else {
    alert("Carta 3 não adicionada pois é false !")
} 
 if (carta4.personagemProtetor === true){
     array.push(carta4)
 } else{
    alert ("Carta 4 não adicionada pois é false")
 }
 if (carta5.personagemProtetor === true){
     array.push(carta5)
 } else{
    alert("Carta 5 não adicionada pois é false")
 }
 if (carta6.personagemProtetor === true){
    array.push(carta6)
 } else {
    alert("Carta 6 não adicionada pois é false")
 } 
 if (carta7.personagemProtetor === true){
    array.push(carta7)
 } else {
    alert("Carta 7 não adicionada pois é false")
 }
 if (carta8.personagemProtetor === true){
    array.push(carta8)
 } else {
    alert ("Carta 8 não adicionada pois é false")
 }
  console.log("Cartas adicionadas", array)

  console.log(array)

//   5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

const mediaTodos = (carta1.anoDaLenda + carta2.anoDaLenda + carta3.anoDaLenda + carta4.anoDaLenda + carta5.anoDaLenda + carta6.anoDaLenda + carta7.anoDaLenda + carta8.anoDaLenda) / 8 
console.log("Média de anos das Lendas é ", mediaTodos )