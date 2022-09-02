//Declarando os Itens
const desenho1 = "Hora de Aventura";
const temporadas1 = 10;
const lgbt1 = true;
const principais1 = ["Finn", "Jake"]

const desenho2 = "Sailor Moon";
const temporadas2 = 5;
const lgbt2 = true;
const principais2 = ["Usagi", "Mamoru", "Chibiusa", "Hotaru", "Rei Hino", "Minako Aino", "Makoto Kino"]

const desenho3 = "Flapjack";
const temporadas3 = 3;
const lgbt3 = false;
const principais3 = ["Flapjack", "Capitão Falange", "Bolha"]

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média.
const mediaNum = (temporadas1 + temporadas2 + temporadas3) / 3;
console.log(mediaNum)

//4. Conferir se todos os booleans são verdadeiros e imprimir
const lgbt = lgbt1 && lgbt2 && lgbt3;
console.log(lgbt)

//5. Exiba um relatório. O log deve exibir o dado de nome sempre em LETRAS MAIÚSCULAS
console.log(desenho1.toUpperCase(), "\nTemporadas:", temporadas1, "\nTem LGBT?", lgbt1, "\nPersonagens Principais:", principais1)
console.log(desenho2.toUpperCase(), "\nTemporadas:", temporadas2, "\nTem LGBT?", lgbt2, "\nPersonagens Principais:", principais2)
console.log(desenho3.toUpperCase(), "\nTemporadas:", temporadas3, "\nTem LGBT?", lgbt3, "\nPersonagens Principais:", principais3)


