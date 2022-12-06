const planeta1= "mercurio";
const satelites1=0;
const orbitaLimpa1=true;

const planeta2= "venus";
const satelites2=0;
const orbitaLimpa2=true;

const planeta3 ="terra";
const satelites3= 1;
const orbitaLimpa3 = true;

const planeta4 = "marte";
const satelites4= 2;
const orbitaLimpa4 = true;

const planeta5 = "Jupiter";
const satelites5= 79;
const orbitaLimpa5 = true;

const planeta6= "Saturno";
const satelites6= 82;
const orbitaLimpa6 = true;

const planeta7 = "Urano";
const satelites7= 27;
const orbitaLimpa7 = true;

const planeta8 = "Neturno";
const satelites8= 14;
const orbitaLimpa8 = true;


const media = ((satelites+ satelites2 + satelites3 + satelites4 + satelites5 + satelites6 + satelites7 + satelites8)/8)

const todosTemOrbitaLimpa = orbitaLimpa && orbitaLimpa2 && orbitaLimpa3 && orbitaLimpa4 && orbitaLimpa5 && orbitaLimpa6 && orbitaLimpa7 && orbitaLimpa8;
console.log(todosTemOrbitaLimpa) //true
