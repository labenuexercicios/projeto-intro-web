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

const mediaIdade = (naruto.idade + minato.idade + kakashi.idade) / 3;
console.log("A média das idades dos personagens é: ", mediaIdade);

const todosVivos = naruto.aindaVivo && minato.aindaVivo && kakashi.aindaVivo;
console.log("Todos personagens ainda estão vivos? ", todosVivos);

console.log(" Nome:",naruto.nome.toUpperCase(),'\n','Idade:',naruto.idade,'anos','\n','Ainda está vivo?',naruto.aindaVivo,'\n','Transformações de Natureza:',naruto.transformcaoDeNatureza);

console.log(" Nome:",minato.nome.toUpperCase(),'\n','Idade:',minato.idade,'anos','\n','Ainda está vivo?',minato.aindaVivo,'\n','Transformações de Natureza:',minato.transformcaoDeNatureza);

console.log(" Nome:",kakashi.nome.toUpperCase(),'\n','Idade:',kakashi.idade,'anos','\n','Ainda está vivo?',kakashi.aindaVivo,'\n','Transformações de Natureza:',kakashi.transformcaoDeNatureza);