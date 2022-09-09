//SEMANA 1

const carta1 = "Saci-Pererê";
const danoCausadoCarta1 = 7
const PersonagemCarta1 = true  
const elementoConjuntoCarta1 = ["Redemoinho", "Velocidade", "Invisibilidade"]

const carta2 = "Lobisomem"
const danoCausadoCarta2 = 9
const personagemCarta2 = true
const elementoConjuntoCarta2 = ["Super-Força", "Velocidade", "Ressucitar", "Mudar de aparencia"]


const carta3 = "Boto-Rosa"
const danoCausadoCarta3 = 4
const PersonagemCarta3 = true
const elementoConjuntoCarta3 = ["Mudar aparencia", "invisilidade", "Ressucitar"]

const carta4 = "Cuca"
const danoCausadoCarta4 = 9
const PersonagemCarta4 = true
const elementoConjuntoCarta4 = ["Super mordida", "Disfarces", "Poderes de feitiço"]

const carta5 = "Caipora"
const danoCausadoCarta5 = 7
const PersonagemCarta5 = true
const elementoConjuntoCarta5 = ["Proteção", "Velocidade", "Super audição"]

const carta6 = "Mula sem Cabeça";
const danoCausadoCarta6 = 7
const PersonagemCarta6 = true
const elementoConjuntoCarta6 = ["Fogo", "Velocidade", "Invisibilidade"]

const carta7 = "Curupira";
const danoCausadoCarta7 = 9
const PersonagemCarta7 = true
const elementoConjuntoCarta7 = ["velocidade", "camuflagem com a floresta", "visão de raio - X"]

const carta8 = "Iara";
const danoCausadoCarta8 = 5
const PersonagemCarta8 = true
const elementoConjuntoCarta8 = ["hipnose pela voz", "super-audição", "camuflagem com o mar"]



const verificarDanos = (danoCausadoCarta1 + danoCausadoCarta2 + danoCausadoCarta3 + danoCausadoCarta4 + danoCausadoCarta5 + danoCausadoCarta6 + danoCausadoCarta7 + danoCausadoCarta8) / 8

console.log(verificarDanos)

 const verificarPersonagens = carta1 && carta2 && carta3 && carta4 && carta5 && carta6 && carta7 && carta8 === false;
 console.log(verificarPersonagens)


 console.log (carta1.toLocaleUpperCase(), danoCausadoCarta1, PersonagemCarta1, elementoConjuntoCarta1)
 console.log(carta2.toLocaleUpperCase(), danoCausadoCarta2, personagemCarta2, elementoConjuntoCarta2)
 console.log(carta3.toLocaleUpperCase(), danoCausadoCarta3, PersonagemCarta3, elementoConjuntoCarta3)
 console.log(carta4.toLocaleUpperCase(), danoCausadoCarta4, PersonagemCarta4, elementoConjuntoCarta4)
 console.log(carta5.toLocaleUpperCase(), danoCausadoCarta5, PersonagemCarta5, elementoConjuntoCarta5)
 console.log(carta6.toLocaleUpperCase(), danoCausadoCarta6, PersonagemCarta6, elementoConjuntoCarta6)
 console.log(carta7.toLocaleUpperCase(), danoCausadoCarta7, PersonagemCarta7, elementoConjuntoCarta7)
 console.log(carta8.toLocaleUpperCase(), danoCausadoCarta8, PersonagemCarta8, elementoConjuntoCarta8)