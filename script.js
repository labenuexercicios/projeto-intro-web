const nome1 = 'Sandman - Preludios e Noturnos';
const arco1 = 1;
const lista1 = true
const cap1 = ['o sono dos justos', 'anfitriões imperfeitos', 'sonhe um breve sonho comigo', 'uma esperança no inferno', 'passageiros', '24 horas', 'som e furia', 'o som de suas asas']
console.log(`${nome1.toUpperCase()} \nNúmero do arco: #${arco1} \nConsta na lista: ${lista1} \nNome dos capitulos: ${cap1.join(`\n- `)}`)

console.log('--------------------------------------------------------------------------------------------')

const nome2 = 'Sandman - Casa de Bonecas';
const arco2 = 2;
const lista2 = true;
const cap2 = ['contos na areia', 'cada de bonecas', 'mudanças', 'brincando de casinha', 'homens de boa fortuna', 'os colecionadores', 'noite adentro', 'corações perdidos']
console.log(`${nome2.toUpperCase()} \nNúmero do arco: #${arco2} \nConsta na lista: ${lista2} \nNome dos capitulos: ${cap2.join(`\n- `)}`)

console.log('--------------------------------------------------------------------------------------------')

const nome3 = 'Sandman - Terra dos Sonhos';
const arco3 = 0;
const lista3 = true;
const cap3 = ['caliope', 'um sonho de mil gatos', 'sonho de uma noite de verão', 'fachada']
console.log(`${nome3.toUpperCase()} \nNúmero do arco: #${arco3} \nConsta na lista: ${lista3} \nNome dos capitulos: - ${cap3.join(`\n- `)}`)


console.log('---------Calculando a média e Verificando a lista--------- ')
//Calculando a media
const media = (arco1+arco2+arco3)/3
console.log(media)

//Verificando a lista
const verificarLista = lista1 && lista2 && lista3
console.log(verificarLista)