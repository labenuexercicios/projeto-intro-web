let item = '<article id="Jogador">\n<img src="NOME.png" alt="Jogador NOME" id="imgJogador">\n\n<div>\n<h1 id="nome">NOME</h1>\n<span id="descrição">DESCRIÇÃO</span>\n</div>\n\n</article>'

let jogadores = [
    {
        nome: "Messi",
        descrição: "Lionel Andrés Messi Cuccittini é um futebolista argentino que atua como atacante. Atualmente joga pelo Paris Saint-Germain e pela Seleção Argentina, onde é capitão."
    },
    {
        nome: "CR7",
        descrição: "Cristiano Ronaldo dos Santos Aveiro é um futebolista português que atua como extremo-esquerdo ou ponta de lança. Atualmente joga pelo Manchester United e pela Seleção Portuguesa, onde é capitão."
    },
    {
        nome: "Neymar",
        descrição: "Neymar da Silva Santos Júnior, mais conhecido apenas como Neymar, é um futebolista brasileiro que atua como atacante. Atualmente joga pelo Paris Saint-Germain e pela Seleção Brasileira. É considerado o principal futebolista brasileiro da atualidade e um dos melhores futebolistas do mundo."
    },

    {
        nome: "Mbappé",
        descrição: "Kylian Sanmi Mbappé Lottin, mais conhecido como Kylian Mbappé ou apenas Mbappé, é um futebolista francês que atua como atacante. Atualmente joga pelo Paris Saint-Germain e pela Seleção Francesa. Considerado um dos melhores jogadores do mundo, ele é conhecido pelo seus dribles e sua velocidade explosiva."

    },
    {
        nome: "Ronaldinho",
        descrição: "Ronaldo de Assis Moreira, mais conhecido como Ronaldinho Gaúcho ou simplesmente Ronaldinho, é um ex-futebolista brasileiro que atuava como meia-atacante. Atualmente é embaixador do Barcelona, clube em que fez história."
    }
]

let primeira = true

function Busca() {
    let busca = document.getElementById("Q").value
    let Relatório = "Relatório do console conforme solicitado: \n"
    let Média = 0

    Relatório += `Busca: ${busca}\n`

    Relatório += `Primeira é a booleana que vamos comparar, ela representa se é a primeira pesquisa enquanto a pagina carrega. ela é falsa? ${primeira === false}\n\n`

    if (busca.trim() == "" && primeira === false) {
        alert("A barra de pesquisa está vazia!\nTodos os itens serão exibidos.")
        Relatório += "Alertado que a busca é vazia\n"
    }

    let Sessão = document.getElementById("Jogadores")
    Sessão.innerHTML = ""

    Relatório += "Elemento coletádo através do DOM\n\nJogadores encontrados:\n\n"

    for (const jogador of jogadores) {
        if (jogador.nome.toLowerCase().includes(busca.toLowerCase()) || jogador.descrição.toLowerCase().includes(busca.toLowerCase())) {
            Sessão.innerHTML += item.replaceAll("NOME", jogador.nome).replaceAll("DESCRIÇÃO", jogador.descrição)

            Média += jogador.nome.length

            Relatório += "Nome: " + jogador.nome.toUpperCase() + "\n\n"
            Relatório += "Descrição: " + jogador.descrição + "\n\nAdicionado ao elemento\n\n-------------------------\n\n"
        }
    }

    Relatório += new Date(Date.now()).toTimeString() + "\n\n"

    Relatório += "Média de letras nos nomes dos jogadores: " + Média / jogadores.length

    console.log(Relatório)

} Busca()

primeira = false