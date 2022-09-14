const BandaZimbra = {
    Artista1: "Banda Zimbra",
    isArtista1 : true,
    QuantosAlbuns: 04,
    TemMaisDe5anos: 12 > 5, 
    AlgunsAlbuns1: ["Azul", "Sala Dois", "Verniz", "O tudo, o Nada e o Mundo"]}

const Miley = {
    Artista2: "Miley Cyrus", 
    isArtista2 : true,
    QuantosAlbuns2: 09, 
    TemMaisDe5anos2: 21 > 5, 
    AlgunsAlbuns2: ["Bangerz", "Can't Be Tamed", "Plastic Hearts" ]
    }

const PedroSampaio = {
    Artista3 : "Pedro Sampaio",
    isArtista3: true,
    QuantosAlbuns3: 02,
    TemMaisDe5anos3: 3 > 5,
    AlgunsAlbuns3: ["Chama meu Nome", "REMIXES"]

}

const MediaAlbuns = 22 / 3
console.log(MediaAlbuns)
const ArmarioArtistas = []



if (BandaZimbra.isArtista1 === true){
    ArmarioArtistas.push(BandaZimbra)
}else{
    alert(`O artista ${BandaZimbra.Artista1} não foi adicionado`)
}

if(Miley.isArtista2 === true){
    ArmarioArtistas.push(Miley)

}else{
    alert(`O artista ${Miley.Artista2} não foi adicionado `)
}

if(PedroSampaio.isArtista3 === true){
    ArmarioArtistas.push(PedroSampaio)

}else{
    alert(`O artista ${PedroSampaio.Artista3} não foi adicionado`)
}
console.log(ArmarioArtistas)