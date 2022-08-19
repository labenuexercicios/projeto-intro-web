

const planetas=[
    {

 planeta: "mercurio",
 peridoDeOrbita:88,
 luas:false,
 composicaoQuimica : ["Hélio" ,"Hidrogênio"]

},
  {
    planeta:"venus",
 peridoDeOrbita:225,
 luas:false,
 composicaoQuimica : ["helio" ,"sodio" , "oxigenio"]

  },
  {
 planeta :"terra",
 peridoDeOrbita: 365,
 luas : true,
 composicaoQuimica:["ferro" , "oxigenio" , "silicio"]

},
{
 planeta : "marte",
 peridoDeOrbita: 687,
 luas : true,
composicaoQuimica :["Nitrogênio" ,"Oxigênio", "DióxidoDeCarbo"]
}
]


    for (let z of planetas){
        
        console.log(`"${z.composicaoQuimica}"`)
    }
    


    for (let i = 0; i < planetas.length; i++) {
console.log( "Planetas:" ,planetas[i].planeta ,"Periodo Orbital (dias):",planetas[i].peridoDeOrbita ,"Luas:",planetas[i].luas)
    }

