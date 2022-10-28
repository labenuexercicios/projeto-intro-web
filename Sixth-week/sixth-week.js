favorito1 = {
    nome: "Frostpunk",
    tempo: 135,
    massiveMultiplayer: false,
    estilo: ["Psicologico","RTS","Offline"]}

favorito2 ={ 
    nome: "Hunt: Showdown",
    tempo: 213,
    massiveMultiplayer: false,
    estilo: ["Terror","FPS","Online"]}

favorito3 ={
    nome: "World of Warcraft",
    tempo: 500,
    massiveMultiplayer: true,
    estilo: ["Aventura","RPG","Online"]}

jogosFavoritos = [favorito1,favorito2,favorito3]

const retorneString = (favoritos) => {
let jogoString = "";
for (genero in favoritos){
    favoritos[genero] == favoritos.length-1? jogoString = jogoString + favoritos[genero]: jogoString = jogoString + favoritos[genero] + ", "
}return jogoString
}

for (jogos of jogosFavoritos){
    console.log(jogos.nome +"\n"+ jogos.tempo +"\n"+ jogos.massiveMultiplayer +"\n"+ retorneString(jogos.estilo))
}

const retorneJogo = (jogoUm) => {
    let relatorioString = "";
    for (dados in jogoUm){
        relatorioString = relatorioString + jogoUm[dados]+"\n"
    } return console.log(relatorioString)
}
retorneJogo(favorito1)

const filtreJogosRts = (jogosFavoritos,string) =>{
    for (jogos of jogosFavoritos){
        for (rts in jogos){
            if(jogos[rts] === string){
                return jogos
            }else{
                alert("Nenhum item foi encontrado.")
            }
        }
    }
}

let rts = "Frostpunk"
console.log(filtreJogosRts(jogosFavoritos,rts))

const aviseUsuario = () =>{
    alert("Digite alguma coisa para que a busca aconteca.")
}