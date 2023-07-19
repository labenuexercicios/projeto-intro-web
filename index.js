//PROJETO LABENU WEB - SEMANA 1


//CRIANDO VARIARES

const id="001";
const name="Garrafa Térmica";
const price=30.00;
const descripition="conserva por até 10h quente ou frio."
const image="https://example.image.png";
const isNew=true;


const id1="002";
const name1="Taça de vinho";
const price1=42.00;
const descripition1="Cristal diamantino"
const image1="https://example.taca.png";
const isNew1=true;

const id2="003";
const name2="Tabua de mesa";
const price2=8.00;
const descr2ipition="Resistente e douradoura."
const image2="https://example.tabua.png";
const isNew2=true;


console.log('projeto web labenu');
console.log('======================================================================');


const mdPrice= price1+price+price2 /3;

console.log(`O Valor médio dos itens vendidos é ${mdPrice.toFixed(2)}.` );

let isTrue= isNew && isNew1 && isNew2
console.log(`O itens são todos novos?`,isTrue=true?'Sim' : 'Não');


