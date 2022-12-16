//Semana 1:


const titulo1 = 'Stark';
const regiao1 = 'Norte';
const brasao1= 'Lobo';   
const num1 = 5;
const lorde1 = false;
const principais1 = ['Jon Snow', 'Sansa Stark', 'Arya Stark', 'Bran Stark'];
    
const titulo2 = 'Targaryan';
const regiao2 = 'Valyria';
const brasao2 = 'Dragão';
const num2 = 3;
const lorde2 = false;
const principais2 = ['Daenerys Targaryen', 'Viserys Targaryen'];

const titulo3 = 'Baratheon';
const regiao3 = 'Terras da Tempestade';
const brasao3 = 'Veado';
const num3 = 1;
const lorde3 = true;
const principais3 = ['Gendry', 'Robert'];


const calculoMedia = Number(num1 + num2 + num3) / 3
console.log (`A média igual a:${calculoMedia}`)

const lordes = lorde1 && lorde2 && lorde3;
console.log(lordes)


//Semana 2:

/*
console.log (`${titulo1}`.toUpperCase(), `\n Região: ${regiao1} \n Brasão: ${brasao1} \n Animais: ${num1} \n Lorde: ${lorde1} \n Personagens principais: ${principais1} `) 
console.log (`${titulo2}`.toUpperCase(), `\n Região: ${regiao2} \n Brasão: ${brasao2} \n Animais: ${num2} \n Lorde: ${lorde2} \n Personagens principais: ${principais2} `) 
console.log (`${titulo3}`.toUpperCase(), `\n Região: ${regiao3} \n Brasão: ${brasao3} \n Animais: ${num3} \n Lorde: ${lorde3} \n Personagens principais: ${principais2} `) 
*/


//Semana 3:
  const casa0 =  {
        titulo: 'Stark',
        regiao: 'Norte',
        simbolo: 'Lobo',
        animais: 5,
        lorde: true,
        principais: ['Jon Snow', 'Sansa Stark', 'Arya Stark', 'Bran Stark']
    }

 const casa1 = {
        titulo: 'Targaryan',
        regiao: 'Valyria ',
        simbolo: 'Dragão',
        animais: 3,
        lorde: false,
        principais: ['Daenerys Targaryen', 'Viserys Targaryen']
    }

const casa2 = {
        titulo: 'Baratheon',
        regiao: 'Terras da Tempestade',
        simbolo: 'Veado',
        animais: 1,
        lorde: true,
        principais: ['Gendry', 'Robert']
    }

const casa3 = {
        titulo: 'Lannister',
        regiao: 'Westerlands',
        simbolo: 'Leão',
        animais: 1,
        lorde: true,
        principais: ['Tyrion Lannister', 'Cersei Lannister', 'Jaime Lannister']
}

const gameOfThrones = [];

 //Item 3 semana 3 
gameOfThrones.push(casa0)
gameOfThrones.push(casa1)
gameOfThrones.push(casa2)


console.log (gameOfThrones) 

//Semana 4: 

/*
function validarPush (valorBoolean , casa){
    if (valorBoolean === true) {
        gameOfThrones.push(casa)
    }
    else {
        alert ('**Alerta não será adicionado, pois o valor é falso')
    }
}

validarPush (casa1.lorde, casa1)
validarPush (casa2.lorde, casa2)
validarPush (casa3.lorde, casa3)
console.log(gameOfThrones)

*/

//Semana 5:

gameOfThrones.push(casa3)
/*
 for (let i= 0; i < gameOfThrones.length; i++) {
    const element = gameOfThrones[i].principais.toString();
    console.log(element);
 }

//Semana 6:

//6.1:

/*
function imprimeString(objeto) {

    console.log(objeto.titulo, objeto.regiao, objeto.animais)

}
imprimeString(casa0)

*/


//semana 6.1
/*
function buscarArray (arrayObj, valorString) {
    let objRetorno = {}
        for (let i = 0; i < arrayObj.legth; i++){
            if (arrayObj[i].titulo === valorString){
                objRetorno[i].titulo = arrayObj[i].titulo;
                objRetorno[i].regiao = arrayObj[i].regiao;
                
            }
        }
    if (objRetorno.legth === 0 ) {
        alert('não encontrado')
    }
    else {
        return objRetorno
    }

}


const obj = buscarArray(gameOfThrones, "Baratheon");
console.log(obj);


*/


function filtro (array, titulo) {
    if (titulo != undefined) {
       const casas = array.filter((objeto) => objeto.titulo.toUpperCase() == titulo.toUpperCase());
       if (casas.length >= 1) {
          return casas;
       } else {
          alert('nenhuma casa foi encontrada')
       }
    }
 }


function buscar(){
    let container;
    const procurar = document.querySelector(".barra-pesquisa").value
    if (!procurar) {
        alert ("Digite o nome de uma casa") }
    else {
        const casasfiltro = filtro(gameOfThrones, procurar);
        console.log(casasfiltro);
        container= `<section id= "${casasfiltro[0].casas}">
        <figure id="imagens-casas">
        <img class= "foto" src="imagens/${casasfiltro[0].titulo}.jpg" alt="${casasfiltro[0].titulo}">
        </figure>
                    <ul>
                        <li>Título: ${casasfiltro[0].titulo}</li>
                        <li>Região: ${casasfiltro[0].regiao}</li>
                        <li>Símbolo: ${casasfiltro[0].simbolo}</li>
                        <li>Animais: ${casasfiltro[0].animais}</li>
                        <li>Lorde: ${casasfiltro[0].lorde}</li>
                        <li>Personagens principais:${casasfiltro[0].principais}</li>
                    </ul>
                  </section>`;
            document.querySelector(".container").innerHTML = "";
            document.querySelector(".container").innerHTML = container;
         }
      }


 