//1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

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
    nome: "Tibia",
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

//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
for (jogos of jogosFavoritos){
    console.log(jogos.nome +"\n"+ jogos.tempo +"\n"+ jogos.massiveMultiplayer +"\n"+ retorneString(jogos.estilo))
}

//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
const retorneJogo = (jogoUm) => {
    let relatorioString = "";
    for (dados in jogoUm){
        relatorioString = relatorioString + jogoUm[dados]+"\n"
    } return console.log(relatorioString)
}
retorneJogo(favorito1)

//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

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