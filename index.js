const criatura1 = "Centauro"
const habitat1 = "Floresta Proibida"
const alturaMedia1 = 2.1
const domesticavel1 = false
const habilidades1 = ["Cura", "Arco e flecha", "Adivinhação", "Velocidade", "Força"]

const criatura2 = "Hipogrifo"
const habitat2 = "Campos abertos (Europa)"
const alturaMedia2 = 2.5
const domesticavel2 = true
const habilidades2 = ["Vôo", "Velocidade", "Força"]

const criatura3 = "Testrálio"
const habitat3 = "Florestas"
const alturaMedia3 = 2.4
const domesticavel3 = true
const habilidades3 = ["Vôo", "Invisibilidade"]

let soma = alturaMedia1 + alturaMedia2 + alturaMedia3
let cont = 3
let alturaMediaTotal = soma/cont
console.log("Altura média entre criaturas: "+alturaMediaTotal.toFixed(2))

const verificaDomesticavel = domesticavel1 && domesticavel2 && domesticavel3
console.log("Domesticável: "+verificaDomesticavel+"\n\n\n")

const textConstruct = (criatura, habitat, alturaMedia, domesticavel, habilidades = []) =>{
    let texto = ""
    texto += `${criatura.toUpperCase()}\nHabitat: ${habitat}.\nAltura Média: ${alturaMedia} m.\n`
    if (domesticavel){texto += "Domesticável? Sim.\nHabilidades: "}
    else{texto += "Domesticável? Não.\nHabilidades: "}
    habilidades.forEach(function(value, index){
        if(index !== (habilidades.length - 1)){
            texto += (value + ", ")
        }else{
            texto += value + "."
        }
    })
    return texto
}

console.log(textConstruct(criatura1, habitat1, alturaMedia1, domesticavel1, habilidades1)+"\n\n")
console.log(textConstruct(criatura2, habitat2, alturaMedia2, domesticavel2, habilidades2)+"\n\n")
console.log(textConstruct(criatura3, habitat3, alturaMedia3, domesticavel3, habilidades3)+"\n\n")