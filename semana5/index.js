// const item1 = {
//     nome: 'The last kingdon'.toUpperCase(),
//     sinopse: 'um jovem garota perde seu pai e seu castelo, mais tarde depois de anos ele retoma o que lhe foi tirado, que é dele por direito', 
//     duração: 2700,
//     anoDeInicioDaSerie: 2015, 
//     generoDaSerie: ['tema medieval', 'histórico', 'drama', 'ação'], 
//     isRemake: false,
//     produtorExecutivo: ['Stephen Butchard Nigel Marchant Gareth Neame']

// }
// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//     assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//     assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
//     })
//   })


if(itemFilme1.isRemake === false){
    console.log('aceito, itemFilme1 foi alocado no arraVazio')
    arrayVazio.push(itemFilme1)
}else{
    alert('não é possivel adiciona-lo ao arrayVazio')
}

if(itemSerie1.isRemake === false){
    console.log('aceito, itemSerie1 foi alocado no arraVazio')
    arrayVazio.push(itemSerie1)
    
}else{
    alert('não é possivel adiciona-lo ao arrayVazio')
}

if(itemSerie2.isRemake === false){
    console.log('aceito, itemSerie2 foi alocado no arraVazio')
    arrayVazio.push(itemSerie2)
}
console.log("ARRAY VAZIO", arrayVazio)