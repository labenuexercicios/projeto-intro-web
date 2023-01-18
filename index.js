//1 e 2

const receita1 = "arroz básico"
const tempo1 = 30
const forno1 = false
const ingredientes1 = ["1 colher(sopa) de óleo","meia cebola picada","1 dente de alho picado","1 chícara(chá) de arroz","2 chícaras(chá) água fervente"]

const receita2 = "batata assada"
const tempo2 = 25
const forno2 = true
const ingredientes2 = ["4 batatas médias", "3 Colheres de sopa de azeite", "Sal e pimenta a gosto", "Orégano", "1 dente de alho"]

const receita3 = "frango grelhado"
const tempo3 = 30
const forno3 = false
const ingredientes3 = ["1 filé de peito de frango","1 colher(sopa) de sal","1 colher(chá) de açúcar","meia colher(sopa) de coentro em pó","meia colher(sopa) de páprica picante","1 dente de alho amassado","água","1 colher(chá) de azeite","Pimenta-do-reino a gosto"]

//3

mediaTempo = (tempo1+tempo2+tempo3)/3
console.log(mediaTempo)

//4

console.log(forno1 && forno2 && forno3)

//5

const preparo1 =["Em uma panela, aqueça o óleo e refogue a cebola e o alho até que estejam transparentes","Junte o arroz e refogue bem até ficar brilhante","Abaixe o fogo, tampe parcialmente a panela e deixe cozinhar até o arroz secar","Desligue o fogo, tampe a panela por mais 5 minutos para que o arroz termine o cozimento em seu próprio vapor"]

const preparo2 = ["Descasque as batatas e corte em pedaços","Coloque as batatas em uma panela com água fervente e deixe cozinhar por 10 minutos","Escorra a água e coloque as batatas em uma travessa", "Tempere com o sal, orégano e a pimenta, regue com azeite e jogue o alho picado", "Leve ao forno pré-aquecido a 180°C por 30 minutos"]

const preparo3 = ["Em um recipiente, tempere o frango com açúcar, o sal, o coentro, a páprica, o alho e misture bem para o tempero pegar em toda a carne","Adicione água até cobrir o filé, cubra o recipiente e deixe marinar por 20 minutos na geladeira.","Retire o frango da salmoura e lave a carne para retirar o excesso do tempero","Esquente uma frigideira de fundo triplo (ou a bistequeira) em fogo médio","Coloque o azeite, adicione o frango com a parte lisa para baixo e deixe por 2 minutos sem mexer","Salpique um pouco de pimenta, sal, vire e deixe selar o outro lado por mais 2 minutos","Vire de novo, tempere apenas com pimenta e deixe mais 3 minutos. Mais uma vez, vire a carne, salpique pimenta e deixe mais 3 minutos"]

//6

console.log(`\n${receita1.toUpperCase()}
\nTempo de preparo: ${tempo1} min
\nVai ao forno: ${forno1}
\nIngredientes: ${ingredientes1}
\nModo de preparo: ${preparo1}`)

console.log(`\n${receita2.toUpperCase()}
\nTempo de preparo: ${tempo2} min
\nVai ao forno: ${forno2}
\nIngredientes: ${ingredientes2}
\nModo de preparo: ${preparo2}`)

console.log(`\n${receita3.toUpperCase()}
\nTempo de preparo: ${tempo3} min
\nVai ao forno: ${forno3}
\nIngredientes: ${ingredientes3}
\nModo de preparo: ${preparo3}`)