

const planetas =[ {

    planeta: "Mercurio",
    luas:0,
    orbitaLimpa:true,
    atmosfera:["42% de oxigênio"," 29% de gás de sódio"],
    imagem:"./Semana11-12/media/mercurio-gif.gif",
    link:"https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
    curiosidade:"foi nomeado em homenagem ao mensageiro dos deuses romanos por causa da sua rotação rapida"
   
   },
       
   {
    planeta:"Venus",
    luas:0,
   orbitaLimpa:true,
   atmosfera: ["96,5% de dióxido de carbono" ," 3,5% de hidrogênio"],
   imagem:"./Semana11-12/media/venus.gif" ,
   link:"https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)",
   curiosidade:"conhecido como Estrela Dalva"
   
   },
   
   {
    planeta :"Terra",
   luas: 1,
    orbitaLimpa : true,
   atmosfera:[" 78% de nitrogênio" ," 21% de oxigênio"],
   imagem:"./Semana11-12/media/terra_gif.gif" ,
   link:"https://pt.wikipedia.org/wiki/Terra",
   curiosidade:" o único planeta do Sistema Solar com a água em três estados"
   },
   {
   planeta: "Marte",
   luas: 2,
   orbitaLimpa : true,
   atmosfera :["95,3% de dióxido de carbono", "2,7% de nitrogênio", " 1,6% de argônio"],
   imagem:"./Semana11-12/media/marte.gif",
   link:"https://pt.wikipedia.org/wiki/Marte_(planeta)",
   curiosidade:"abriga o maior vulcão do sistema solar, o Olympus Mons"
   },
   {
   planeta : "Jupiter",
   luas: 79,
   orbitaLimpa : true,
   atmosfera:[" 75% de hidrogênio"," 24% de hélio"],
   imagem:"./Semana11-12/media/jupiter.gif",
   link:"https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
   curiosidade:"tem o dia mais curto de todos,levando 10 horas para girar em torno de seu eixo"
   },
   {
   planeta: "Saturno",
   luas: 82,
   orbitaLimpa : true,
   atmosfera:["93,2% de hidrogênio" ," 6,7% de hélio"],
   imagem:"./Semana11-12/media/saturno.gif",
   link:"https://pt.wikipedia.org/wiki/Saturno_(planeta)",
   curiosidade:"se fosse possível colocá-lo dentro de uma piscina gigante, Saturno flutuaria"
   },
   
   {
   planeta:"Urano",
   luas: 27,
   orbitaLimpa:true,
   atmosfera:["83% de hidrogênio", "15% de hélio e 2% metano"],
   imagem:"./Semana11-12/media/urano.gif",
   link:"https://pt.wikipedia.org/wiki/Urano_(planeta)",
   curiosidade:"durante 42 anos,uma parte do planeta permaneçe iluminada pelo Sol enquanto isso, a outra parte fica em completa escuridão"
   
   },
   {
   planeta:"Neturno",
   luas:14,
   orbitaLimpa: true,
   atmosfera:["80% de hidrogênio" ," 19% de hélio"],
   imagem:"./Semana11-12/media/neturno.gif",
   link:"https://pt.wikipedia.org/wiki/Netuno_(planeta)",
   curiosidade:" em 11 de julho de 2011,Netuno completou sua primeira órbita completa desde sua descoberta em 1846"
   
       }]

       function buscarPlaneta(){
        const input=document.getElementById("search")
        console.log(input.value)
        const planetaEscolhido= planetasFiltrados(input)
        console.log(`${planetaEscolhido}`? planetaEscolhido : alert ("não encontrado"))
        criarPlanetas(planetaEscolhido)
        
    
    
    
      }
    
      function planetasFiltrados(input){
        const planetaEscolhido= planetas.filter((item)=>{return item.planeta.toLowerCase()=== input.value.toLowerCase() } )
        console.log(`${planetaEscolhido}`? planetaEscolhido : alert ("não encontrado"))
        if(planetaEscolhido.length>=1){
            return planetaEscolhido
        } else{
            return planetas
        }
    
      }

       function criarPlanetas(array){

        const paragrafo=document.getElementById("lista-de-planetas")
        paragrafo.innerHTML=""

        for(let i=0; i<array.length; i++){
    
            paragrafo.innerHTML+=`<section>
           <ul>
            <img src='${array[i].imagem}'>
            <p> 
            <a href='${array[i].link}' target="_blank" >${array[i].planeta}:</a>
            ${array[i].curiosidade},possui ${array[i].luas} luas,
            a sua atmosfera é composta de ${array[i].atmosfera} entre outros.
            </p>                  
            </ul>   
            </section>`

        }
    }
  criarPlanetas(planetas)

 




 





