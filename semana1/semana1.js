const paciente1 = D.K.L
const idade1 = 33
const emDesintox1 = true

const paciente2 = "F.M.C.J"
const idade2 = 36
const emDesintox2 = false

const paciente3 = "L.A.F.C"
const idade3 = 27
const emDesintox3 = false

const idadeMedia = (33+36+27) / 3
console.log(idadeMedia)

if(emDesintox1){
    console.log("Paciente em internação para desintoxicação")
} else{
    console.log("Paciente ambulatorial do territorio")
}

if(emDesintox2){
    console.log("Paciente em internação para desintoxicação")
} else{
    console.log("Paciente ambulatorial do territorio")
}

if(emDesintox3){
    console.log("Paciente em internação para desintoxicação")
} else{
    console.log("Paciente ambulatorial do territorio")
}

const DesintoxicaçaoTotal = emDesintox1 && emDesintox2 && emDesintox3;
console.log(DesintoxicaçaoTotal);



