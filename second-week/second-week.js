//1. Transforme os itens que criamos nas últimas semanas em objetos.

// "Nome"; Qual nome do jogo eletronico?
// "Tempo";  Horas jogadas?
// "Massive Multiplayer Online"; Ele e um Massively Multiplayer Online? True=Sim/False=Nao
// "Estilo"; Quais os 3 principais estilos de jogos presente nele?

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

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

jogosFavoritos = []

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()
// jogosFavoritos.push(favorito1,favorito2,favorito3) => Esta e a array padrao com push para o exercicio 3.
//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if(favorito1.massiveMultiplayer){
    jogosFavotiros.push(favorito1)
    alert("O jogo e um MMO, ele foi adicionado a lista.")
}else{
    alert("O jogo nao e um MMO, ele nao foi adicionado a lista.")
}

if(favorito2.massiveMultiplayer){
    jogosFavoritos.push(favorito2)
    alert("O jogo e um MMO, ele foi adicionado a lista.")
}else{
    alert("O jogo nao e um MMO, ele nao foi adicionado a lista.")
}

if(favorito3.massiveMultiplayer){
    jogosFavoritos.push(favorito3)
    alert("O jogo e um MMO, ele foi adicionado a lista.")
}else{
    alert("O jogo nao e um MMO, ele nao foi adicionado a lista.")
}

console.log(jogosFavoritos)