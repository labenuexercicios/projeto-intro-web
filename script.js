const naruto = {
    nome: "Naruto",
    idade: 32,
    aindaVivo: true,
    principaisJutsus: ["Sexy","Multiplos Clones das Sombras","Invocação","Rasengan","Rasen-Shuriken"],
    localImg: "./midia/naruto.jpg"
}

const minato = {
    nome: "Minato",
    idade: 24,
    aindaVivo: false,
    principaisJutsus: ['Rasengan','Invocação','Clones das sombras','Tecnica de Selamento','Hiraishin'],
    localImg: "./midia/minato.jpg"
}

const kakashi = {
    nome: "Kakashi",
    idade: 47,
    aindaVivo: true,
    principaisJutsus: ['Dedo secreto da aldeia da folha: Mil anos de morte','multiplos clones das sombras','Rasengan', 'Chidori','Raikiri','Sharingan'],
    localImg: "./midia/kakashi.jpg"
}
const itachi = {
    nome: "Itachi",
    idade: 21,
    aindaVivo: false,
    principaisJutsus: ['Izanami','Kotoamatsukami','Tsukiyomi','Susanoo','Amaterasu'],
    localImg: "./midia/itachi.jpg"
}

const arrayPersonagens = [];

let verificaVivo = (obj) => {
    
    if(obj.aindaVivo){
        arrayPersonagens.push(obj);
    }else{
        alert("O Objeto Naruto não foi adicionado ao array")
    }
}

verificaVivo(naruto)
verificaVivo(kakashi)
verificaVivo(minato)
verificaVivo(itachi)

const mediaIdade = (naruto.idade + minato.idade + kakashi.idade + itachi.idade) / 4;
console.log("A média das idades dos personagens é: ", mediaIdade);

const todosVivos = naruto.aindaVivo && minato.aindaVivo && kakashi.aindaVivo && itachi.aindaVivo;
console.log("Todos personagens ainda estão vivos? ", todosVivos);

for(let i in arrayPersonagens){
    let str = ``
    for(j of arrayPersonagens[i].principaisJutsus){
        str += `${j},`
    }
    console.log(`Nome: ${arrayPersonagens[i].nome.toUpperCase()} \nIdade: ${arrayPersonagens[i].idade}\nAinda está vivo? ${arrayPersonagens[i].aindaVivo}\nPrincipais Jutsus: ${str}`);
}

const relatorio = (obj) => {
    let str = `Nome: ${obj.nome.toUpperCase()}\nIdade: ${obj.idade}\nAinda está vivo? ${obj.aindaVivo}\nPrincipais Jutsus: ${obj.principaisJutsus}`
    console.log(str)
}
relatorio(naruto)
relatorio(minato)
relatorio(kakashi)
relatorio(itachi)

const funcaoFiltro = (array, string) => {       
    let novoArray = []
    for(i in array){
        for(j in array[i]){
            if(array[i][j]===string){
                novoArray.push(array[i])
                return array[i]
            }
        }
    }
    if(novoArray.length===0){
        alert("Nenhum item foi encontrado!")     
    }   
}
funcaoFiltro(arrayPersonagens,"Kakashi")
funcaoFiltro(arrayPersonagens,"Naruto")
funcaoFiltro(arrayPersonagens,"Itachi")

