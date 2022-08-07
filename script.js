//CARDÁPIO DE VERÃO CONSULADO CAFÉ

const nome1 = "Frozen Café Tradicional";
const preco1 = 16.00;
const gelado1 = true;
const tamanho1 = 350;
const sabor1 = "Tradicional";
const descrição1 = "Frozem artesanal da casa + expresso duplo + leite cremoso";

const nome2 = "Frozen Café Doce de Leite";
const preco2 = 17.00;
const gelado2 = true;
const tamanho2 = 350;
const sabor2 = "Doce de Leite";
const descrição2 = "Frozem artesanal doce de leite + expresso duplo + leite cremoso";

const nome3 = "Frozen Café Limão";
const preco3 = 18.00;
const gelado3 = true;
const tamanho3 = 350;
const sabor3 = "Limão";
const descrição3 = "Frozem de limão siciliano + capuccino tradicional";

const mediaPreco = (preco1 + preco2 + preco3) / 3;
console.log(mediaPreco);

const saoGelados = gelado1 && gelado2 && gelado3;
console.log(saoGelados);