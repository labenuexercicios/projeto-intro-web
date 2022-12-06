const planetas =[ {

    nome: "mercurio",
    satelites:0,
    orbitaLimpa:true,
    atmosfera:["42% de oxigênio"," 29% de gás de sódio"," 22% de hidrogênio", "6% de hélio" ," 0,5% de potássio"]
   
   },
       
   {
   nome:"venus",
    satelites:0,
   orbitaLimpa:true,
   atmosfera: ["96,5% de dióxido de carbono" ," 3,5% de hidrogênio"]
   
   },
   
   {
    nome :"terra",
   satelites: 1,
    orbitaLimpa : true,
   atmosfera:[" 78% de nitrogênio" ," 21% de oxigênio"]
   },
   {
   nome: "marte",
   satelites: 2,
   orbitaLimpa : true,
   atmosfera :["95,3% de dióxido de carbono", "2,7% de nitrogênio", " 1,6% de argônio"]
   },
   {
   nome : "Jupiter",
   satelites: 79,
   orbitaLimpa : true,
   atmosfera:[" 75% de hidrogênio"," 24% de hélio"]
   },
   {
   nome: "Saturno",
   satelites: 82,
   orbitaLimpa : true,
   atmosfera:["93,2% de hidrogênio" ," 6,7% de hélio"]
   },
   
   {
   nome:"Urano",
   satelites: 27,
   orbitaLimpa:true,
   atmosfera:["83% de hidrogênio", "15% de hélio e 2% metano"]
   },
   {
   nome:"Neturno",
   satelites:14,
   orbitaLimpa: true,
   atmosfera:["80% de hidrogênio" ," 19% de hélio"]
       }]

    

    const nomePlaneta= planetas.map((planeta,indice,array)=>{
        return planeta.nome
    })
    console.log(nomePlaneta)



    const planetaTerra= planetas.filter((item)=>{return item.nome==="terra" } )
    console.log(`${planetaTerra}`? planetaTerra : alert ("não encontrado"))

 


   
    
   

