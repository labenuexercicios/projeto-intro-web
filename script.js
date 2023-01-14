/* const nome = "Leão";
const nomeCientifico = "Panthera Leo";
const tempoVida = 10;
const classe = "Mamífero";
const habitat = "Savana";
const extinto = false;
const reino = ["Animalia"]
console.log(nome.toUpperCase(), "\n", nomeCientifico, "\n", tempoVida, "\n", classe, "\n", habitat, "\n", extinto, "\n", reino) 
 

const nome2 = "Baleia Azul";
const nomeCientifico2 = "Balaenoptera musculus";
const tempoVida2 = 85;
const classe2 = "Mamífero";
const habitat2 = "Oceano";
const extinto2 = false; 
const reino2 = ["Animalia"]
console.log(nome2.toUpperCase(), "\n", nomeCientifico2, "\n", tempoVida2, "\n", classe2, "\n", habitat2, "\n", extinto2, "\n", reino2)

const nome3 = "Rinoceronte negro do oeste africano";
const nomeCientifico3 = "Diceros bicornis";
const tempoVida3 = 40;
const classe3 = "Mamífero";
const habitat3 = "Savana";
const extinto3 = true; 
const reino3 = ["Animalia"]
console.log(nome3.toUpperCase(), "\n", nomeCientifico3, "\n", tempoVida3, "\n", classe3, "\n", habitat3, "\n", extinto3, "\n", reino3) 

const mediaVida = (tempoVida + tempoVida2 + tempoVida3) / 3
console.log(mediaVida); */

/* const extintos = extinto && extinto2 && extinto3;
console.log(extintos); */


  const animal1 = {
  nome: "Leão",
  nomeCientifico: "Panthera Leo",
  tempoVida: 10,
  classe: "Mamífero",
  habitat: "Savana",
  extinto: false,
  reino: "Animalia" }


let array1 = [{}]

console.log(array1);



const animal2 = {
nome: "Baleia Azul",
nomeCientifico: "Balaenoptera musculus",
tempoVida: 85,
classe: "Mamífero",
habitat: "Oceano",
extinto: false,
reino: "Animalia",
}


 const animal3 = {
 nome: "Rinoceronte negro do oeste africano",
 nomeCientifico: "Diceros bicornis",
 tempoVida: 40,
 classe: "Mamífero",
 habitat: "Savana",
 extinto: true,
 reino: "Animalia"
 }




const acessarArray = animal3.extinto
console.log(acessarArray);


// array1.push(animal1, animal2, animal3)

if (animal3.extinto == true) {
  array1.push(animal1, animal2, animal3)
} else {
  console.log (alert("é falso"))
} 

let reino = [];

if (animal1.reino === "Animalia") {
    reino.push(animal1)
} else {
    alert("Reino incorreto")
}

if (animal2.reino === "Animalia") {
    reino.push(animal2)
} else {
    alert("Reino incorreto")
}

if (animal3.reino === "Animalia") {
    reino.push(animal3)
} else {
    alert("Reino incorreto")
}

console.log(reino)

for (reinoAnimal of reino){
  console.log((`Título:${reinoAnimal.nome}`).toUpperCase(), `\nHabitat: ${reinoAnimal.habitat} \nExtinto: ${reinoAnimal.extinto ? "sim" : "não"}`) }

  
  for(i of reino){

    for (propriedade in i){

      console.log(`${propriedade}: ${i[propriedade]}`)

    } }



    const animalString = {
      nome: "Leão Marinho",
      nomeCientifico: "Otariinae",
      tempoVida: 25,
      classe: "Mamíferos",
      habitat: "Região costeira",
      extinto: false,
      reino: "Animalia"
    }

  function imprimeString(obj) {

    console.log("Este é mais um animal:", obj.nome, obj.nomeCientifico, obj.tempoVida, obj.classe, obj.habitat, obj.extinto, obj.reino);

  }

  imprimeString(animalString)


  const animais = [{
    nome: "Leão",
    nomeCientifico: "Panthera Leo",
    tempoVida: 10,
    classe: "Mamífero",
    habitat: "Savana",
    extinto: false,
    reino: "Animalia",
    img: "./img/leao.jpg"
   },

   {
    nome: "Baleia Azul",
   nomeCientifico: "Balaenoptera musculus",
   tempoVida: 85,
   classe: "Mamífero",
   habitat: "Oceano",
   extinto: false,
   reino: "Animalia",
   img: "./img/baleiazul.jpg"
  },

  {
    nome: "Rinoceronte negro do oeste africano",
    nomeCientifico: "Diceros bicornis",
    tempoVida: 40,
    classe: "Mamífero",
    habitat: "Savana",
    extinto: true,
    reino: "Animalia",
    img: "./img/rinocerontenegro.jpg"
  },

  {
    nome: "Leão Marinho",
      nomeCientifico: "Otariinae",
      tempoVida: 25,
      classe: "Mamífero",
      habitat: "Região costeira",
      extinto: false,
      reino: "Animalia",
      img: "./img/leaomarinho.jpg"
  }

  ]


  function imprimeStringObjeto(objs) { //IMPRIME A LISTA DE OBJETOS DO ARRAY
    for (let string of objs) {
        imprimeString(string)
    }
}
imprimeStringObjeto(animais)


/*function arrayAnimais(arrobj, string) {
  const resultado = arrobj.filter(item => {
      return item.nome.toUpperCase().includes(string.toUpperCase())
  })
  if (resultado.length === 0) {
      alert("Animal não encontrado!")
  } else {
      return resultado
  }
  

}*/

function arrayAnimais(arrobj, string) {
  const resultado = arrobj.filter(item => {
      return item.nome.toUpperCase().includes(string.toUpperCase())
  })
  if (resultado.length === 0) {
      alert("Animal não encontrado!")
  } else {
      return resultado
  }
  

}

function buscarAnimais() {

  let container;

  const search = document.querySelector("#pesquisaAnimais").value;
  if (!search) {
      alert("Digite algo para que a busca aconteça");
  } else {
      const animalSelecionado = arrayAnimais(animais, search);
      criaCard(animalSelecionado) 
  }
}
    
  function criaCard(bichos) {
    const itens = document.getElementById("itensContainer");
    itens.innerHTML = "" 


    for (const bicho of bichos) {
     itens.innerHTML+= `<section class="itens">
        <img src= ${bicho.img}> 
      <ul>
          <li>Nome: ${bicho.nome}</li>
          <li>Nome Científico: ${bicho.nomeCientifico}</li>
          <li>Tempo de Vida: ${bicho.tempoVida}</li>
          <li>Classe: ${bicho.classe}</li>
          <li>Habitat: ${bicho.habitat}</li>
          <li>Extinto: ${bicho.extinto}</li>
          <li>Reino: ${bicho.reino}</li>
      </ul>
  </section>`;

  itens.innerHTML += container;
    }

    criaCard(animais)

}



