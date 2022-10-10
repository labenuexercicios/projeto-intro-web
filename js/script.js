


const dog1 = {
    raca: 'Golden retriever',
    origem: 'Escócia',
    pesoKg: 25 + ' a ' + 34 + ' kg',
    alturaCm: 56 + ' a ' + 60 + ' cm',
    expectativaDeVidaAno: 10 + ' a ' + 12 + ' anos',
    racaParaApartamento: false,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
};

const dog2 = {
    raca: 'Buldogue inglês',
    origem: 'Inglaterra',
    pesoKg: 18 + ' a ' + 22 + ' kg',
    alturaCm: 35 + ' a ' + 38 + ' cm',
    expectativaDeVidaAno: 8 + ' a ' + 10 + ' anos',
    racaParaApartamento: true,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
};

const dog3 = {
    raca: 'Basset hound',
    origem: 'Escócia',
    pesoKg: 25 + ' a ' + 34 + ' kg',
    alturaCm: 56 + ' a ' + 60 + ' cm',
    expectativaDeVidaAno: 10 + ' a ' + 12 + ' anos',
    racaParaApartamento: true,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
};

const dog4 = {
    raca: 'Pug',
    origem: 'China',
    pesoKg: 6 + ' a ' + 8 + ' kg',
    alturaCm: 25 + ' a ' + 30 + ' cm',
    expectativaDeVidaAno: 13 + ' a ' + 15 + ' anos',
    racaParaApartamento: true,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
}

const dog5 = {
    raca: 'Beagle',
    origem: 'Inglaterra e Estados Unidos',
    pesoKg: 9 + ' a ' + 13.5 + ' kg',
    alturaCm: 33 + ' a ' + 38 + ' cm',
    expectativaDeVidaAno: 10 + ' a ' + 15 + ' anos',
    racaParaApartamento: true,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
}

const listaDeDogs = [];

const arrayDeDogs = (objeto, array) => {

    if (objeto.racaParaApartamento) {
        return array.push(objeto)
    } else {
        // alert("Essa raça não é apropriada para apartamento.");
    };

}
arrayDeDogs(dog1, listaDeDogs)
arrayDeDogs(dog2, listaDeDogs)
arrayDeDogs(dog3, listaDeDogs)
arrayDeDogs(dog4, listaDeDogs)
arrayDeDogs(dog5, listaDeDogs)

// console.log(listaDeDogs);


for (let i in listaDeDogs) {
    listaDeDogs[i].raca = listaDeDogs[i].raca
}
console.log(listaDeDogs);

//  TRANSFORMAR A ARRAY DO OBJETO EM STRING

// for (let string in listaDeDogs) {
//     listaDeDogs[string].porteDaRaca = listaDeDogs[string].porteDaRaca.toString()
// }
// console.log(listaDeDogs)

// ---------------------------------------------------

const arrayDog = listaDeDogs;

const dogMapeados = arrayDog.map((dog, index, array) => {
    return `O cão da raça ${dog.raca}, tem origem da ${dog.origem}, podendo pesar de ${dog.pesoKg}, com uma altura de ${dog.alturaCm}, com uma expectativa de vida de ${dog.expectativaDeVidaAno}`;
})
console.log(dogMapeados)

//------------------------------------------------------





//---------------------------------------------------

function buscaPorDog(arrayDeObj, valorString) {

    let dogARetrornar = {};
    for (let i = 0; i < arrayDeObj.length; i++) {
        if (arrayDeObj[i].raca === valorString) {
            dogARetrornar.raca = arrayDeObj[i].raca;
            dogARetrornar.origem = arrayDeObj[i].origem;
            dogARetrornar.pesoKg = arrayDeObj[i].pesoKg;
            dogARetrornar.alturaCm = arrayDeObj[i].alturaCm;
            dogARetrornar.expectativaDeVidaAno = arrayDeObj[i].expectativaDeVidaAno
            dogARetrornar.racaParaApartamento = arrayDeObj[i].racaParaApartamento

            // ou usar dogARetornar = {...areyDeObjeto[i]};
        }
    }

    // if(dogARetrornar.raca !== valorString) {
    //     alert('Raça não cadastrada!')
    // }else {
    //     return dogARetrornar;
    // }

}
const objDoDog = buscaPorDog(listaDeDogs, "PUG")

console.log(objDoDog)


//-----------------------------------------------

function verificaDog() {
     let input = document.getElementById('listaDog').value
     document.getElementById('listaDog').value = "";
    input = input.toLowerCase();
    let x = document.getElementsByClassName('imagem');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        

        }else {
            x[i].style.display = "list-item";
    }
        }
       

        if(input === ""){
            document.getElementById('list').innerHTML = 'Digite o nome da raça desejada!'
             }  else {
              list.remove()
           }
           return alert("raça não encontrada")
    }

//    if(x.length !== input){
//         lista.innerHTML = 'Raça não cadastrada!'}


 
// 


    // buttonPesquisa.addEventListener('click', () => {
    // const inputValue = "";
    // if()
    // alert("Raça não cadastrada");});
 
     

//   const searchButton = document.getElementById('btn');
//   const searchInput = document.getElementById('listaDog');
  

  


       














