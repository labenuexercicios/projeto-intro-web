listaDeArtistas = [
objeto1 = {
    nomeArtista: "Justin Bieber",
    nomeAlbum: "Justice",
    anoLançamentoAlbum: 2021,
    artistaNacional: false,
    musicasPreferidasAlbum: ["2 Much", "Hold On", "Somebody"]
    },
    
objeto2 = {
    nomeArtista: "Henrique e Juliano",
    nomeAlbum: "Manifesto Musical(Ao Vivo)",
    anoLançamentoAlbum: 2022,
    artistaNacional: true,
    musicasPreferidasAlbum: ["Arranhão", "A Maior Saudade", "Evento Cancelado"]
    },
    
objeto3  = {
    nomeArtista: "Linkin Park",
    nomeAlbum: "Minutes to Midnight",
    anoLançamentoAlbum: 2017,
    artistaNacional: false,
    musicasPreferidasAlbum: ["Leave Out All The Rest", "Bleed It Out", "Shadow Of The Day"]
    }
]
 console.log ("Exercícios 1 e 2")

 for (objetos of listaDeArtistas){
    for (propriedades in objetos){
        console.log (`${propriedades}: ${objetos[propriedades]}`)
    }
    objetos.stringDoObjeto = objetos.musicasPreferidasAlbum.join(", ")
}

console.log ("Exercício 3")
const relatorio = (listaDeArtistas)=> {
    for (i in listaDeArtistas){
        console.log (`Artista: ${listaDeArtistas[i].nomeArtista}; \nÉ um artista nacional: ${listaDeArtistas[i].artistaNacional};\n\nEscolhi o álbum "${listaDeArtistas[i].nomeAlbum}" como sugestão para que conheçam. Este album foi lançado em ${listaDeArtistas[i].anoLançamentoAlbum} e minhas músicas favoritas do álbum são: "${listaDeArtistas[i].musicasPreferidasAlbum}".`)
    }
}
relatorio(listaDeArtistas)

console.log ("Exercício 4")
const busca = (listaDeArtistas, string) =>{
const resultado = listaDeArtistas.filter((objeto) => {
return objeto.nomeArtista === string || objeto.nomeAlbum === string || objeto.anoLançamentoAlbum === string || objeto.artistaNacional === string || objeto.musicasPreferidasAlbum === string
})
if (resultado.length > 0){
console.log(resultado)
}else{
alert ("Nenhum item encontrado.")
}
}

busca(listaDeArtistas, "Minutes to Midnight")