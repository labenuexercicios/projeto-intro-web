const clube = "São Paulo";
const mundiais = 3;
const rebaixado = false;
const spM = clube.toUpperCase();
const craques = ["Calleri", "Luciano", "Arboleda"]


const clube2 = "Palmeiras";
const mundiais2 = 0;
const rebaixado2 = true;
const pM = clube2.toUpperCase();
const craquesPalmeiras = ["Rony","Raphael Veiga","Gustavo Gómez"]


const clube3 = "Corinthians";
const mundiais3 = 2;
const rebaixado3 = true;
const cM = clube3.toUpperCase();
const craquesCorinthians = ["Yuri Alberto","Roger Guedes","Cássio"]

console.log(`${spM}
Mundiais:${mundiais}
Já foi rabaixado? ${rebaixado}
Craques do clube:${craques}

${pM}
Mundiais:${mundiais2}
Já foi rabaixado? ${rebaixado2}
Craques do clube:${craquesPalmeiras}

${cM}
Mundiais:${mundiais3}
Já foi rabaixado? ${rebaixado3}
Craques do clube: ${craquesCorinthians}  
`)

mediamundias = mundiais + mundiais2 + mundiais3/3
const timepequeno = rebaixado && rebaixado2 && rebaixado3

console.log(`Média de Mundiais:${mediamundias}`)
console.log(`Todos os clubes foram rebaixados ?${timepequeno}`)