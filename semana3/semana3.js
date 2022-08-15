  paciente1 = {
  nome : "M.B.S",
  prontuario : 1001,
  emDesintox : true,
  pts : ["auriculoterapia", "grupo de meditação", "psicologia"],
};

  paciente2 = {
  nome : "F.R.T",
  prontuario : 1002,
  emDesintox : true,
  pts : ["avaliação psiquiátrica", "terapia ocupacional", "grupo criarte"],
};

  paciente3 = {
  nome : "J.R.C",
  prontuario : 1003,
  emDesintox : false,
  pts : ["avaliação clínica", "auriculoterapia", "grupo cabeça feita"],
};

let arrayCAPS =[]
const arrayCAPSnovo = [arrayCAPS.push(paciente1), arrayCAPS.push(paciente2), arrayCAPS.push(paciente3)]

   console.log(paciente1.nome.toUpperCase())
   console.log(paciente2.nome.toUpperCase())
   console.log(paciente3.nome.toUpperCase())
   
   console.log(arrayCAPS)
   console.log(arrayCAPSnovo)