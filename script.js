const planetas = []


const planeta =[ {

    nome: "mercurio".toUpperCase(),
    peridoDeOrbital:88,
    luas:false,
    composicaoQuimica : ["Hélio" ,"Hidrogênio"]
    },
     
    {
    
    nome:"venus".toUpperCase(),
    peridoDeOrbital:225,
    luas:false,
    composicaoQuimica:["helio" ,"sodio" , "oxigenio"]},
    
    
    {
    nome :"terra".toUpperCase(),
    peridoDeOrbita: 365,
    luas : true,
    composicaoQuimica :["ferro" , "oxigenio" , "silicio"]},
    
    {
    nome : "marte".toUpperCase(),
    peridoDeOrbita: 687,
    luas: true,
    composicaoQuimica :["Nitrogênio" ,"Oxigênio", "DióxidoDeCarbo"] },
    ]
  
  planetas.push(planeta)
  console.log(planetas)

let nomeDoPlaneta =confirm ("o planeta é mercurio ou terra?")

 if (nomeDoPlaneta) {
    alert ("planeta adicionado")
 }

  else {
      alert ("planeta não pode ser adicionado")
 }


     
 