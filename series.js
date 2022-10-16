const series = [
    {
        titulo: "Aniquilação",
        sinopse: "Depois que seu marido desaparece em uma missão secreta, a bióloga Lena embarca numa expedição a uma misteriosa região interditada pelo governo dos EUA.",
        anoLancamento: "2018",
        img_path:"./imgs/aniquilacao.jpg"
    },
    {
        titulo : "Lucifer",
        sinopse : "Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.",
        anoLancamento : "2016",
        img_path :"./imgs/serie-lucifer.webp"
    },
    {
        titulo : "Dahmer: Um Canibal Americano",
        sinopse : "Por mais de uma década, Jeffrey Dahmer conseguiu matar 17 jovens rapazes sem levantar suspeitas da polícia. Como ele conseguiu evitar a prisão por tanto tempo?",
        anoLancamento : "2022",
        img_path :"./imgs/dahmer.jpg"
    },
    {
        titulo: "Cidade Invisível",
        sinopse: "Após uma tragédia familiar, um homem descobre criaturas folclóricas vivendo entre os humanos e logo se dá conta de que elas são a resposta para seu passado misterioso.",
        anoLancamento: "2021",
        img_path:"./imgs/cidade-invisivel.webp"
    },
    {
        titulo : "Insatiable",
        sinopse : "Uma garota encontra nos concursos de beleza sua chance de se vingar do bullying. Ela conta com a ajuda de um advogado, que logo vê a situação sair de controle.",
        anoLancamento : "2018",
        img_path :"./imgs/insatiable.webp"
    },
    {
        titulo : "Stranger Things",
        sinopse : "Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.",
        anoLancamento : "2016",
        img_path : "./imgs/Stranger-Things.jpg"
    }
];

const container = document.getElementById('container');

series.forEach(obj => {
    gerarCard(obj);
});
container.innerHTML+=`<br/><br/><br/>`

function gerarCard(obj) {
    container.
    innerHTML +=
        ` <li class="serie">
            <div class="serie-preview">
                <img src='${obj.img_path}'/>
            </div>
            <div class="serie-info">
                <h6>${obj.titulo} - ${obj.anoLancamento}</h6>
                <h4>${obj.sinopse}</h4>
            </div>
        </li>`
}


const form = document.getElementById('formulario');
const title = document.getElementById('input-pesquisar')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const value_title = title.value.trim();

    if(!value_title){
        alert('Digite alguma informação para que seja realizado a busca.');
    } else {
        const naoEncontrouNada =  false;
        series.forEach(obj => {
            if(obj.titulo.toLocaleLowerCase() === value_title.toLocaleLowerCase()){
                container.innerHTML = "";
                gerarCard(obj);
                naoEncontrouNada = true;
            } 
        });
        if(!naoEncontrouNada){
            container.innerHTML = "";
            container.innerHTML = `<p>Não foi encontrado nenhuma serie com o titulo "${value_title}" </p>`;
        }
    }
    
})


