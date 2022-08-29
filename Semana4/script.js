
const novoPlaneta={
   nome: "Plutão",
   satelites:5,
   orbitaLimpa:false,
   atmosfera: ["nitrogênio"," metano"," monóxido de carbono"]
  }
  if (novoPlaneta.orbitaLimpa){
   planetas.push(novoPlaneta)
  }else {
   alert ("Planeta não adicionado")
  }