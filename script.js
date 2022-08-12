const planeta1= "mercurio";
const peridoDeOrbita1=88;
const luas1=false;
const composicaoQuimica1 = ["Hélio" ,"Hidrogênio"]
    


const planeta2="venus";
const peridoDeOrbita2=225;
const luas2=false;
const composicaoQuimica2 =["helio" ,"sodio" , "oxigenio"]

const planeta3 ="terra";
const peridoDeOrbita3= 365;
const luas3 = true;
const composicaoQuimica3 =["ferro" , "oxigenio" , "silicio"]


const planeta4 = "marte";
const peridoDeOrbita4= 687;
const luas4 = true;
const composicaoQuimica4 =["Nitrogênio" ,"Oxigênio", "DióxidoDeCarbo"]


const media = ((peridoDeOrbita1 + peridoDeOrbita2 + peridoDeOrbita3 + peridoDeOrbita4)/2)

console.log(media) //682.5

const todosTemLuas = luas1 && luas2 && luas3 && luas4;
console.log(todosTemLuas) //false