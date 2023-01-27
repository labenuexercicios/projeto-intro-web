let filme1 = {
  nome: "Suspiria",
  genero: ["Terror"],
  duracao: 150,
  remake: true,
};

let filme2 = {
  nome: "Jeca tatu",
  genero: ["Comédia"],  //.toString(),
  duracao: 95,
  remake: false,
};

let filme3 = {
  nome: "A Lagoa Azul",
  genero: ["Romance", "Drama"],
  duracao: 105,
  remake: false,
};
let listaDeFilmes = [];

// if (filme1.remake === true) {
//   listaDeFilmes.push(filme1);
// } else {
//   alert("Item não adicionado");
// }

// if (filme2.remake === true) {
//   listaDeFilmes.push(filme2);
// } else {
//   alert("Item não adicionado");
// }

// if (filme3.remake === true) {
//   listaDeFilmes.push(filme3);
// } else {
//   alert("Item não adicionado");
// }
listaDeFilmes.push(filme1,filme2,filme3)
function relatorio(item) {
  let relatorio = '';

  for (const prop in item){
    relatorio += prop + ':' + item[prop]+ '\n';
  }
  return relatorio;
}

let temp = 0;
for (let i = 0; i < listaDeFilmes.length; i++) {
  temp += listaDeFilmes[i].duracao;
}
const media = temp / listaDeFilmes.length;
console.log("Está é  media da duração dos filmes", media);

let todosTrue = true;
for (let i = 0; i < listaDeFilmes.length; i++) {
  if (!listaDeFilmes[i].remake) {
    todosTrue = false;
  }
}
console.log("Todos os campos booleanos são verdadeiros?", todosTrue);

for (let i = 0; i < listaDeFilmes.length; i++) {
  console.log(listaDeFilmes[i].nome.toUpperCase());
  console.log("Gênero:", listaDeFilmes[i].genero);
  console.log("Duração:", listaDeFilmes[i].duracao);
  console.log("Remake:", listaDeFilmes[i].remake);
}
function arrayObj (listaDeFilmes, nome) {
   for (const filme of listaDeFilmes) {
     console.log(filme.nome + ' ' + nome);
   }
 }
 arrayObj(listaDeFilmes, "Itens encontrados") 


  


 



