
    const nomeT = 'Tiranossauro'
    const tempoMedioVidaT = 30
    const estaExtintoT = true
    let ondeHabitavamT = [`Canadá`, `Estados Unidos`, `Alasca`]

    const nomeP = 'Pterodáctilo'
    const tempoMedioVidaP = 20
    const estaExtintoP = true
    let ondeHabitavamP = [`África`, `Europa`]

    const nomeC = 'Crocodilo'   
    const tempoMedioVidaC = 70
    const estaExtintoC = false
    let ondeHabitavamC = [`África`,`Austrália`, `Ásia`]

console.log(
`${nomeT.toUpperCase()}
    Tempo médio de vida é de ${tempoMedioVidaT}
    Está extinto? ${estaExtintoT}
    onde habitavam: ${ondeHabitavamT}
    
 ${nomeP.toUpperCase()}
    Tempo médio de vida é de ${tempoMedioVidaP}
    Está extinto? ${estaExtintoP}
    onde habitavam: ${ondeHabitavamP}

 ${nomeC.toUpperCase()}
    Tempo médio de vida é de ${tempoMedioVidaC}
    Está extinto? ${estaExtintoC}
    onde habitavam: ${ondeHabitavamC}
   
    `
)
const mediaDeVidaRepteis = ((tempoMedioVidaC+tempoMedioVidaP+tempoMedioVidaT)/3)
console.log (`O tempo médio de vida desses reptéis é de ${mediaDeVidaRepteis}`)

const verificaExtincao = estaExtintoC === estaExtintoP && estaExtintoP === estaExtintoT
console.log(`A maioria desses animais está extinto? ${!verificaExtincao}`)
