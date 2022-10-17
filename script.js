/* const salem = {
  nomeGato: "Salem",
  image: "",
  sexo: "Female",
  souTutor: true,
  cores: ["Preto", "Branco"],
};

const bernardo = {
  nomeGato: "Bernardo",
  image: "",
  sexo: "Male",
  souTutor: true,
  cores: ["Branco", "Marrom", "Preto", "Cinza"],
};

const yoda = {
  nomeGato: "Yoda",
  image: "",
  sexo: "Male",
  souTutor: true,
  cores: ["Verde", "Preto", "Cinza"],
};

const dartVader = {
  nomeGato: "Dart Vader",
  image: "",
  sexo: "Male",
  souTutor: true,
  cores: ["Preto", "Verde"],
};

const lola = {
  nomeGato: "Lola",
  image: "",
  sexo: "Female",
  souTutor: true,
  cores: ["Creme", "Cinza", "Branco"],
};

const lukeSkywalker = {
  nomeGato: "Luke Skywalker",
  image: "",
  sexo: "Male",
  souTutor: true,
  cores: ["Preto", "Branco"],
};

const pretinhoDaFelicidade = {
  nomeGato: "Pretinho Da Felicidade",
  image: "",
  sexo: "Male",
  souTutor: true,
  cores: ["Preto", "Verde"],
};

const laurinha = {
  nomeGato: "Laurinha",
  image: "",
  sexo: "Female",
  souTutor: false,
  cores: ["Laranja", "Branco", "Mamba"],
};

const sansao = {
  nomeGato: "Sansão",
  image: "",
  sexo: "Male",
  souTutor: true,
  cores: ["Cinza", "Branco", "Verde"],
};

// const gatos = [];

// laurinha.souTutor === true
//   ? gatos.push(laurinha)
//   : alert(`Gato não incluido: ${laurinha.nomeGato}`);
// salem.souTutor === true
//   ? gatos.push(salem)
//   : alert(`Gato não incluido: ${salem.nomeGato}`);
// bernardo.souTutor === true
//   ? gatos.push(bernardo)
//   : alert(`Gato não incluido: ${bernardo.nomeGato}`);
// yoda.souTutor === true
//   ? gatos.push(yoda)
//   : alert(`Gato não incluido: ${yoda.nomeGato}`);
// dartVader.souTutor === true
//   ? gatos.push(dartVader)
//   : alert(`Gato não incluido: ${dartVader.nomeGato}`);
// lola.souTutor === true
//   ? gatos.push(lola)
//   : alert(`Gato não incluido: ${laurinha.nomeGato}`);
// lukeSkywalker.souTutor === true
//   ? gatos.push(lukeSkywalker)
//   : alert(`Gato não incluido: ${lukeSkywalker.nomeGato}`);
// pretinhoDaFelicidade.souTutor === true
//   ? gatos.push(pretinhoDaFelicidade)
//   : alert(`Gato não incluido: ${pretinhoDaFelicidade.nomeGato}`);
// sansao.souTutor === true
//   ? gatos.push(sansao)
//   : alert(`Gato não incluido: ${sansao.nomeGato}`);

// // console.log(gatos);

// //Semana 05 etapa 01
// for (let i = 0; i < gatos.length; i++) {
//   gatos[i].cores = gatos[i].cores.join(", ");
//   console.log(gatos[i].cores);
// }
// //Semana 05 etapa 02
// for (let i in gatos) {
//   gatos[i].relatorio = `
//   Nome: ${gatos[i].nomeGato}
//   Sexo: ${gatos[i].sexo}
//   SouTutor: ${gatos[i].souTutor}
//   Cores: ${gatos[i].cores}`;
//   console.log(gatos[i].relatorio);
// }

// /* SEMANA 6 */

// const retornarObjeto = (Objeto) => {
//   return Objeto.relatorio;
// };
// console.log(retornarObjeto(sansao));

// const retornarArray = (String, ArrayObj) => {
//   let resposta = [];
//   for (let i in ArrayObj) {
//     if (ArrayObj[i].gatos === String.toUpperCase()) {
//       resposta.push(ArrayObj[i]);
//     }
//   }
//   /* SEMANA 07 #2 */

//   if (resposta.length > 0) {
//     return resposta;
//   } else {
//     alert("Item não encontrado");
//   }
// };
// const retorna = retornarArray("salem", gatos);
// console.log(retorna);

// /* SEMANA 7 */

// /* "HTML" */
// */

/* DOM */
gatos = [
  {
    nomeGato: "Salem".toUpperCase(),
    image: "./imagens/yoda.jpg",
    link: "https://www.youtube.com/watch?v=NH92TumbARU",
    sexo: "Female",
    souTutor: true,
    cores: ["Preto", "Branco"],
  },

  {
    nomeGato: "Bernardo".toUpperCase(),
    image: "./imagens/yoda.jpg",
    link: "https://www.youtube.com/watch?v=NH92TumbARU",
    sexo: "Male",
    souTutor: true,
    cores: ["Branco", "Marrom", "Preto", "Cinza"],
  },

  {
    nomeGato: "Yoda".toUpperCase(),
    image: "./imagens/yoda.jpg",
    link: "https://www.youtube.com/watch?v=NH92TumbARU",
    sexo: "Male",
    souTutor: true,
    cores: ["Verde", "Preto", "Cinza"],
  },

  {
    nomeGato: "Dart Vader".toUpperCase(),
    image: "./imagens/yoda.jpg",
    link: "https://www.youtube.com/watch?v=NH92TumbARU",
    sexo: "Male",
    souTutor: true,
    cores: ["Preto", "Verde"],
  },

  {
    nomeGato: "Lola".toUpperCase(),
    image: "./imagens/yoda.jpg",
    link: "https://www.youtube.com/watch?v=NH92TumbARU",
    sexo: "Female",
    souTutor: true,
    cores: ["Creme", "Cinza", "Branco"],
  },

  {
    nomeGato: "Luke Skywalker".toUpperCase(),
    image: "./imagens/yoda.jpg",
    link: "https://www.youtube.com/watch?v=NH92TumbARU",
    sexo: "Male",
    souTutor: true,
    cores: ["Preto", "Branco"],
  },

  {
    nomeGato: "Pretinho Da Felicidade".toUpperCase(),
    image: "./imagens/yoda.jpg",
    link: "https://www.youtube.com/watch?v=NH92TumbARU",
    sexo: "Male",
    souTutor: true,
    cores: ["Preto", "Verde"],
  },

  {
    nomeGato: "Laurinha".toUpperCase(),
    image: "./imagens/yoda.jpg",
    link: "https://www.youtube.com/watch?v=NH92TumbARU",
    sexo: "Female",
    souTutor: false,
    cores: ["Laranja", "Branco", "Mamba"],
  },

  {
    nomeGato: "Sansão".toUpperCase(),
    image: "./imagens/yoda.jpg",
    link: "https://www.youtube.com/watch?v=NH92TumbARU",
    sexo: "Male",
    souTutor: true,
    cores: ["Cinza", "Branco", "Verde"],
  },
];

function gatosLI(array) {
  const itens = document.getElementById("cats");
  itens.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    itens.innerHTML += `
  <ul class='flex'>
  <img src="${array[i].image}"alt="" id="catsImge">
  <div>
     <a href='${array[i].link}' target="_blank" >${array[i].nomeGato}</a>    
      <li>Sexo:${array[i].sexo}</li>
      <li>Tutoria: ${array[i].souTutor}</li>
      <li>Cores: ${array[i].cores}  </li>
      <li>Venha fazer sua sessão de Miauterapia</li>
  </div>
  </ul>
`;
  }
}
gatosLI(gatos);

function buscarGatos() {
  const input = document.getElementById("search-txt");
  console.log(input.value);
  const gatodigitado = gatoEscolhido(input);
  gatosLI(gatodigitado);
}
function gatoEscolhido(input) {
  const gatoEscolhido = gatos.filter((item) => {
    return item.nomeGato === input.value.toUpperCase();
  });
  console.log(`${gatoEscolhido}` ? gatoEscolhido : alert("Gato não Miou"));
  if (gatoEscolhido.length >= 1) {
    return gatoEscolhido;
  } else {
    return gatos;
  }
}
