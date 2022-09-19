const objeto1 = [{
    nome: "leão".toUpperCase(),
    tempoMedioDeVida: 15, 
    classe: true,
    array:["rei da selva","dono da mordida que tem uma potencia de 600 a 650 PSI","sempre é o primeiro a comer"],
},
{
    nome: "urso-pardo".toUpperCase(),
    tempoMedioDeVida: 26,
    classe: true,
    array:["têm pelagens grossas e em camadas"," são grandes, fortes e rápidos","podem andar apenas com as patas traseiras"]
},
{
    nome: "cachorro".toUpperCase(),
    tempoMedioDeVida: 13,
    classe: true,
    array:["O olfato de um cachorro é 1 milhão de vezes melhor do que o dos humanos","se não for castrada, uma pode ter 66 filhotes em 6 anos","são onívoros, eles precisam comer mais do que apenas carne"]
}
]
// const media = ((leao.tempoMedioDeVida + urso.tempoMedioDeVida + cachorro.tempoMedioDeVida) / 3)

// const verifica = (leao.classe && urso.classe && cachorro.classe)

// const nomealto = (`
//     ${leao.nome}\n${leao.tempoMedioDeVida} anos em média que eles vivem\nÉ um mamifero "${leao.classe}"\nE é ${leao.array[1]};

//     ${urso.nome}\n${urso.tempoMedioDeVida} anos em média que eles vivem\nÉ um carnívoro "${urso.classe}"\nOs Ursos-Pardos${urso.array[1]};

//     ${cachorro.nome}\n${cachorro.tempoMedioDeVida} anos em média que eles vivem\nÉ um mamifero "${cachorro.classe}"\n${cachorro.array[0]}
// `)
const arraydeobj = [objeto1]

console.log = (objeto1[0].nome)


