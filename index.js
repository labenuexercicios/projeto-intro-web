// Lista de elementos químico
const elemento1 = "Hidrogênio"
const numeroAtomico1 =  1
const massaAtomica1 =  1.008 
const simbolo1 =  "H"
const isSintetico1 =  false
const exemplosEmMoleculas1 = ["H2,H2SO4"]

const elemento2 = "Lítio"
const numeroAtomico2 =  3
const massaAtomica2 =  6.941
const simbolo2 =  "Li"
const isSintetico2 =  false
const exemplosEmMoleculas2 = ["LiAl(Si2O5)2"]

const elemento3 = "Sódio"
const numeroAtomico3 =  11
const massaAtomica3 =  22.990
const simbolo3 =  "Na"
const isSintetico3 =  false
const exemplosEmMoleculas3 = ["NaCl", "NaBr"]

//Média doe número atômico
const mediaNumeroAtomico = (numeroAtomico1+numeroAtomico2+numeroAtomico3)/3

//Média de massa atômica
const mediaMassa = (massaAtomica1+massaAtomica2+massaAtomica3)/3

//Checando se todos os valores boolenaos são verdadeiras

const verificaIsSintetico = isSintetico1&&isSintetico2&&isSintetico3

console.log(`Algum elemento é sintético? ${verificaIsSintetico}`)


//Impressão dessas médias
console.log(`Média de números atômicos: ${mediaNumeroAtomico}`,`\n Média de massas atômicas: ${massaAtomica1}`)

//Relatório do elemento 1
console.log(elemento1.toUpperCase(),`\nNúmero atômico: ${numeroAtomico1}`,`\nMassa atômica: ${massaAtomica1}`,`\nSímbolo: ${simbolo1}`,`\nÉ sintético: ${isSintetico1}`,`\nPresente nas moléculas: ${exemplosEmMoleculas1}`)

//Relatório do elemento 2
console.log(elemento2.toUpperCase(),`\nNúmero atômico: ${numeroAtomico2}`,`\nMassa atômica: ${massaAtomica2}`,`\nSímbolo: ${simbolo2}`,`\nÉ sintético: ${isSintetico2}`,`\nPresente nas moléculas: ${exemplosEmMoleculas2}`)

//Relatório do elemento 3
console.log(elemento3.toUpperCase(),`\nNúmero atômico: ${numeroAtomico3}`,`\nMassa atômica: ${massaAtomica3}`,`\nSímbolo: ${simbolo3}`,`\nÉ sintético: ${isSintetico3}`,`\nPresente nas moléculas: ${exemplosEmMoleculas3}`)

