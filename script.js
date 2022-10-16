const jogo1nome = "God of War"
const lancamento1 = 2018
const classificaoid181 = true
const Plataformasjogo1 = "Ação e aventura, RPG, Luta"

const jogo2nome = "The last of us II"
const lancamento2 = 2020
const classificaoid182 = true
const Plataformasjogo2 = "Survival Horror, Terror, Tiro"


const jogo3nome = "Shadow of the colossus"
const lancamento3 = 2005
const classificaoid183 = false
const Plataformasjogo3 = "Ação e aventura, Puzzle, Terror"


const classificacaoIDMaior = classificaoid181 && classificaoid182 && classificaoid183
const medialancamento = lancamento1 + lancamento2 + lancamento3 / 3


console.log("media dos valores number : " + medialancamento.toFixed(2))
console.log("verificação dos valores booleanos  : " + classificacaoIDMaior)
console.log("nome letra maiuscula "+jogo1nome.toUpperCase(), lancamento1, classificaoid181, Plataformasjogo1)


jogo1 = {
    nome : "GOD OF WAR",
    lancamento : 2018,
    classificaoid : true,
    imagemjogo: "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/946e3ece1fc8b24bd656449d88eca941.ico",
    linkjogo: "https://pt.wikipedia.org/wiki/God_of_War"
}

jogo2 = {
    nome : "THE LAST OF US II",
    lancamento : 2020,
    classificaoid : true,
    imagemjogo: "https://m.media-amazon.com/images/I/61KcDlZIP3L._CR0,412,1060,1060_UX256.jpg",
    linkjogo: "https://pt.wikipedia.org/wiki/The_Last_of_Us_Part_II"


}

jogo3 = {
    nome : "SHADOW OF THE COLOSSUS",
    lancamento : 2005,
    classificaoid: false,
    imagemjogo: "https://avatarfiles.alphacoders.com/112/thumb-350-112656.jpg",
    linkjogo: "https://pt.wikipedia.org/wiki/Shadow_of_the_Colossus"

}

arrayjogos = []

arrayjogos.push(jogo1, jogo2, jogo3)
console.log(arrayjogos)

arrayjogos.push
/*
if (jogo1.classificaoid == true){
    arrayjogos.push(jogo1)
    console.log("")
}else{
    alert("Jogo nao foi adicionado pois nao e para maior de idade")
}
*/

for(jogo of arrayjogos)
{
    for (propriedade in jogo)
    {
        console.log(`${propriedade}: ${jogo[propriedade]}`)
    }
    console.log("    ---------   ")
}



function transformaEmString(jogo) 
{
    return `O jogo ${jogo.nome} foi lancado em ${jogo.lancamento} Verifique se e para maior de idade  : ${jogo.classificaoid}`;
}

console.log(transformaEmString(jogo1))




function jogoFiltrar(jogoarray, stringv) 
{
    
    let objreturn = {};
    
        for (let i = 0; i < jogoarray.length; i++) {
            if (jogoarray[i].nome.toLowerCase() === stringv.toLowerCase()) {

                objreturn.nome = jogoarray[i].nome;
                objreturn.lancamento = jogoarray[i].lancamento;
                objreturn.classificacaoid = jogoarray[i].classificaoid;
                objreturn.imagemjogo = jogoarray[i].imagemjogo;
                objreturn.linkjogo = jogoarray[i].linkjogo;
                
            }
        }

        if (objreturn.nome && objreturn.nome.toLowerCase() !== stringv.toLowerCase()) 
        {
            alert("Jogo nao encontrado");
        } 
        else 
        {
            return objreturn;
        }
    
}


console.log(jogoFiltrar(arrayjogos, "god of war"))




function listaJogos(jogoarray){
    var campo = document.getElementById("listaJogos")
    
    campo.innerHTML=""

    for(let i=0; i < jogoarray.length; i++)
    {
        campo.innerHTML+=
            `
            <ul>
                <section>
                    <img src="  ${jogoarray[i].imagemjogo}  ">
                        <div>
                            <p class="nome"><a href=" ${jogoarray[i].linkjogo} ">  ${jogoarray[i].nome}   </a>   </p>
                            <p class="data">Data de lancamento :  ${jogoarray[i].lancamento}  </p>
                            <p class="clasid">Para maior de idade ? :  ${jogoarray[i].classificaoid}  </p>
                        </div>
                </section>
            </ul>
            `
    }
}


  
listaJogos(arrayjogos)


function displayJogo (input)
{   
 var displayJogoE = arrayjogos.filter( (obj)   =>  { return  obj.nome.toLowerCase() ===  input.value.toLowerCase() } )
            
            if(displayJogoE.length>=1)
            {
                return displayJogoE
            } 
            else
            {
                alert("jogo não foi encontrado")
                return arrayjogos
            }
}







function buscaJogo()
{
    
    var input = document.getElementById("src")
    var displayJogoV = displayJogo (input)
   
    listaJogos(displayJogoV)
}

  
  
  
  