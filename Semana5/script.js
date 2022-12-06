const planeta =[ {

    planeta: "mercurio",
    satelites:0,
    orbitaLimpa:true,
    atmosfera:["42% de oxigênio"," 29% de gás de sódio"," 22% de hidrogênio", "6% de hélio" ," 0,5% de potássio"]
   
   },
       
   {
    planeta:"venus",
    satelites:0,
   orbitaLimpa:true,
   atmosfera: ["96,5% de dióxido de carbono" ," 3,5% de hidrogênio"]
   
   },
   
   {
    planeta :"terra",
   satelites: 1,
    orbitaLimpa : true,
   atmosfera:[" 78% de nitrogênio" ," 21% de oxigênio"]
   },
   {
   planeta: "marte",
   satelites: 2,
   orbitaLimpa : true,
   atmosfera :["95,3% de dióxido de carbono", "2,7% de nitrogênio", " 1,6% de argônio"]
   },
   {
   planeta : "Jupiter",
   satelites: 79,
   orbitaLimpa : true,
   atmosfera:[" 75% de hidrogênio"," 24% de hélio"]
   },
   {
   planeta: "Saturno",
   satelites: 82,
   orbitaLimpa : true,
   atmosfera:["93,2% de hidrogênio" ," 6,7% de hélio"]
   },
   
   {
   planeta:"Urano",
   satelites: 27,
   orbitaLimpa:true,
   atmosfera:["83% de hidrogênio", "15% de hélio e 2% metano"]
   },
   {
   planeta:"Neturno",
   satelites:14,
   orbitaLimpa: true,
   atmosfera:["80% de hidrogênio" ," 19% de hélio"]
       }]


    for (let z of planeta){
        
        console.log(`"${z.atmosfera}"`)
    }
    


    for (let i = 0; i < planeta.length; i++) {
console.log( "Planetas:" ,planeta[i].planeta ,"Satelites:",planeta[i].satelites ,"Orbita Limpa:",planeta[i].orbitaLimpa,"Atmosfera:",planeta[i].atmosfera)
    }

