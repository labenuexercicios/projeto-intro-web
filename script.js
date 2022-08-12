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
arrayPersonagens.push(naruto,minato,kakashi);

const mediaIdade = (arrayPersonagens[0].idade + arrayPersonagens[1].idade + arrayPersonagens[2].idade) / 3;
console.log("A média das idades dos personagens é: ", mediaIdade);

const todosVivos = arrayPersonagens[0].aindaVivo && arrayPersonagens[1].aindaVivo && arrayPersonagens[2].aindaVivo;
console.log("Todos personagens ainda estão vivos? ", todosVivos);

console.log(" Nome:",arrayPersonagens[0].nome.toUpperCase(),'\n','Idade:',arrayPersonagens[0].idade,'anos','\n','Ainda está vivo?',arrayPersonagens[0].aindaVivo,'\n','Transformações de Natureza:',arrayPersonagens[0].transformcaoDeNatureza);

console.log(" Nome:",arrayPersonagens[1].nome.toUpperCase(),'\n','Idade:',arrayPersonagens[1].idade,'anos','\n','Ainda está vivo?',arrayPersonagens[1].aindaVivo,'\n','Transformações de Natureza:',arrayPersonagens[1].transformcaoDeNatureza);

console.log(" Nome:",arrayPersonagens[2].nome.toUpperCase(),'\n','Idade:',arrayPersonagens[2].idade,'anos','\n','Ainda está vivo?',arrayPersonagens[2].aindaVivo,'\n','Transformações de Natureza:',arrayPersonagens[2].transformcaoDeNatureza);