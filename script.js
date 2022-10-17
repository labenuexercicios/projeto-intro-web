
const carro1 = {
nome: 'MERCEDES C63',
cavalosPotencia: 510,
preco: 'R$ 720.000',
turbo: true,
anoFab: 2020,
infoAdicional: 'Tração Traseira, 5 lugares, Sedã'
}

const carro2 = {
nome: 'AUDI RS7',
cavalosPotencia: 600,
preco: 'R$ 1.100.000',
turbo: true,
anoFab: 2021,
infoAdicional: 'Tração Integral, 4 lugares, Sedã'
}

const carro3 = {
nome: 'BMW M4',
cavalosPotencia: 431,
preco: 'R$ 700.000',
turbo: true,
anoFab: 2020,
infoAdicional: 'Tração Traseira, 4 lugares, Cupê'
}
const potenciaMedia = parseInt((510+600+431)/3)
console.log(`A potência média é: ${potenciaMedia}.`)

const listaCarros = []

if(carro1.turbo === true){
    listaCarros.push(carro1)
}
if (carro2.turbo === true){
    listaCarros.push(carro2)
}
if (carro3.turbo === true){
    listaCarros.push(carro3)
} else {
}
            
console.log({listaCarros})



// RELATÓRIO

const verifTurbo = carro1.turbo && carro2.turbo && carro3.turbo

verifTurbo? console.log(verifTurbo): console.log()
console.log(`Os três veículos possuem turbo? ${verifTurbo}`)

for(carro of listaCarros){
    for(prop in carro){
        console.log(`${prop}: ${carro[prop]}`)
    }
    console.log('_____________________')
}

function relatorio (obj,obj2,obj3){
    for(propiedade in obj){
        let resultado = `${propiedade}: ${obj[propiedade]}`
        console.log(resultado)
}
}
relatorio(carro1)

//BUSCADOR

function buscador(event){
    const busca1 = document.getElementById("busca2").value

    for(obj of listaCarros){
        for(prop in obj){
            if(busca1 == obj[prop]){
                alert('Não consegui exibir o item como resultado da pesquisa')
            }
            }
        }
    if(busca1 != obj[prop] && busca1 != false){
        alert('Objeto não encontrado')
    } else if(busca1 == false){
        alert('Digite algo para continuar')
    }
}
