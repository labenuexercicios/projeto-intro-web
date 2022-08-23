const naruto = {
    nome: "Naruto",
    idade: 32,
    aindaVivo: true,
    transformcaoDeNatureza: ["Água","Fogo","Raio","Terra","Vento(afinidade)","Yang","Yin","Yin-Yang"]
}

const minato = {
    nome: "Minato",
    idade: 24,
    aindaVivo: false,
    transformcaoDeNatureza: ["Fogo","Raio","Vento","Yang","Yin"]
}

const kakashi = {
    nome: "Kakashi",
    idade: 47,
    aindaVivo: true,
    transformcaoDeNatureza: ["Água","Fogo","Raio(afinidade)","Terra","Vento","Yang","Yin","Gelo"]
}
const itachi = {
    nome: "Itachi",
    idade: 21,
    aindaVivo: false,
    transformcaoDeNatureza: ["Água","Fogo","Vento","Yang","Yin"]
}
let strNaruto = ""
let strMinato = ""
let strKakashi = ""
let strItachi = ""
for(str of naruto.transformcaoDeNatureza) {
    strNaruto += str+", "
}
for(str of minato.transformcaoDeNatureza) {
    strMinato += str+", "
}
for(str of kakashi.transformcaoDeNatureza) {
    strKakashi += str+", "
}
for(str of itachi.transformcaoDeNatureza) {
    strItachi += str+", "
}

const arrayPersonagens = [];

if(naruto.aindaVivo){
    arrayPersonagens.push(naruto);
}else{
    alert("O Objeto Naruto não foi adicionado ao array")
}
if(minato.aindaVivo){
    arrayPersonagens.push(minato);
}else{
    alert("O Objeto Minato não foi adicionado ao array")
}
if(kakashi.aindaVivo){
    arrayPersonagens.push(kakashi);
}else{
    alert("O Objeto Kakashi não foi adicionado ao array")
}
if(itachi.aindaVivo){
    arrayPersonagens.push(itachi);
}else{
    alert("O Objeto Itachi não foi adicionado ao array")
}

const mediaIdade = (naruto.idade + minato.idade + kakashi.idade + itachi.idade) / 4;
console.log("A média das idades dos personagens é: ", mediaIdade);

const todosVivos = naruto.aindaVivo && minato.aindaVivo && kakashi.aindaVivo && itachi.aindaVivo;
console.log("Todos personagens ainda estão vivos? ", todosVivos);

for(let i in arrayPersonagens){
    let str = `Nome: ${arrayPersonagens[i].nome.toUpperCase()} \nIdade: ${arrayPersonagens[i].idade}\nAinda está vivo? ${arrayPersonagens[i].aindaVivo}\nTransformação da natureza: `
    for(j of arrayPersonagens[i].transformcaoDeNatureza){
        str += `${j},`
    }
    console.log(str);
}

// console.log(" Nome:",naruto.nome.toUpperCase(),'\n','Idade:',naruto.idade,'anos','\n','Ainda está vivo?',naruto.aindaVivo,'\n','Transformações de Natureza:',strNaruto);

// console.log(" Nome:",minato.nome.toUpperCase(),'\n','Idade:',minato.idade,'anos','\n','Ainda está vivo?',minato.aindaVivo,'\n','Transformações de Natureza:',strMinato);

// console.log(" Nome:",kakashi.nome.toUpperCase(),'\n','Idade:',kakashi.idade,'anos','\n','Ainda está vivo?',kakashi.aindaVivo,'\n','Transformações de Natureza:',strKakashi);