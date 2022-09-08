- Decidi fazer um relato do projeto nesse arquivo. Para mostrar como foi o andamento do mesmo em cada semana - 

# Semana 1

Decidi fazer meu projeto baseado em uma Historia em Quadrinho que eu amo de paixão. Sandman. Ela foi lançado pelo britanico Neil Gaiman e teve um total de 75 edições. Ela foi dividida em arcos e cada arco tem um total dessas ediçoes.

# semana 2
const nome1 = 'Sandman - Preludios e Noturnos';
const arco1 = 1;
const lista1 = true
const cap1 = ['o sono dos justos', 'anfitriões imperfeitos', 'sonhe um breve sonho comigo', 'uma esperança no inferno', 'passageiros', '24 horas', 'som e furia', 'o som de suas asas']
console.log(`${nome1.toUpperCase()} \nNúmero do arco: #${arco1} \nConsta na lista: ${lista1} \nNome dos capitulos: \n- ${cap1.join(`\n- `)}`)

console.log('--------------------------------------------------------------------------------------------')

const nome2 = 'Sandman - Casa de Bonecas';
const arco2 = 2;
const lista2 = true;
const cap2 = ['contos na areia', 'cada de bonecas', 'mudanças', 'brincando de casinha', 'homens de boa fortuna', 'os colecionadores', 'noite adentro', 'corações perdidos']
console.log(`${nome2.toUpperCase()} \nNúmero do arco: #${arco2} \nConsta na lista: ${lista2} \nNome dos capitulos: \n- ${cap2.join( `\n- `)}`)

console.log('--------------------------------------------------------------------------------------------')

const nome3 = 'Sandman - Terra dos Sonhos';
const arco3 = 0;
const lista3 = true;
const cap3 = ['caliope', 'um sonho de mil gatos', 'sonho de uma noite de verão', 'fachada']
console.log(`${nome3.toUpperCase()} \nNúmero do arco: #${arco3} \nConsta na lista: ${lista3} \nNome dos capitulos: \n- ${cap3.join(`\n- `)}`)


console.log('---------Calculando a média e Verificando a lista--------- ')
//Calculando a media
const media = (arco1+arco2+arco3)/3
console.log(media)

//Verificando a lista
const verificarLista = lista1 && lista2 && lista3
console.log(verificarLista)

# Semana 3

//Criando um array vazio
let arcosSandman = []

//Adicionando os intens criados na semana 2 dentro de um objeto
obj1 = {
    nome: 'Sandman - Preludios e Noturnos',
    arco: 1,
    lista: true,
    cap: ['o sono dos justos', 'anfitriões imperfeitos', 'sonhe um breve sonho comigo', 'uma esperança no inferno', 'passageiros', '24 horas', 'som e furia', 'o som de suas asas']

}

console.log('--------------------------------------------------------------------------------------------')

//Adicionando os intens criados na semana 2 dentro de um objeto
obj2 = {
    nome: 'Sandman - Casa de Bonecas',
    arco: 2,
    lista: true,
    cap2: ['contos na areia', 'casa de bonecas', 'mudanças', 'brincando de casinha', 'homens de boa fortuna', 'os colecionadores', 'noite adentro', 'corações perdidos']

}

console.log('--------------------------------------------------------------------------------------------')

//Adicionando os intens criados na semana 2 dentro de um objeto
obj3 = {
    nome: 'Sandman - Terra dos Sonhos',
    arco: 3,
    lista3: true,
    cap: ['caliope', 'um sonho de mil gatos', 'sonho de uma noite de verão', 'fachada']

}

//Atribuindo os objetos ao Array vazio
arcosSandman.push(obj1, obj2, obj3)


# Semana 4

if(obj1.lista === true){
    arcosSandman.push(obj1)
} else{
    alert(`O arco ${obj1.nome} não foi`)
}

if(obj2.lista === true){
    arcosSandman.push(obj2)
} else{
    alert(`O arco ${obj2.nome} não foi`)
}

if(obj3.lista === true){
    arcosSandman.push(obj3)
} else{
    alert(`O arco ${obj3.nome} não foi`)
}

# semana 5

//Criando um array vazio
let arcosSandman = []

//Adicionando os itens criados na semana 2 dentro de um objeto
obj1 = {
    nome: 'Sandman - Preludios e Noturnos',
    arco: 1,
    lista: true,
    cap: ['o sono dos justos', 'anfitriões imperfeitos', 'sonhe um breve sonho comigo', 'uma esperança no inferno', 'passageiros', '24 horas', 'som e furia', 'o som de suas asas']

}
//Criando uma variavel, percorrendo o obj ate o array e concatenando os elementos do array em uma unica string e armazenando dentro da variavel criada.
let valorObj1

for(i of obj1.cap){
    valorObj1 = obj1.cap.join(', ')  

}  


console.log('--------------------------------------------------------------------------------------------')

//Adicionando os itens criados na semana 2 dentro de um objeto
obj2 = {
    nome: 'Sandman - Casa de Bonecas',
    arco: 2,
    lista: true,
    cap2: ['contos na areia', 'casa de bonecas', 'mudanças', 'brincando de casinha', 'homens de boa fortuna', 'os colecionadores', 'noite adentro', 'corações perdidos']

}
//Criando uma variavel, percorrendo o obj ate o array e concatenando os elementos do array em uma unica string e armazenando dentro da variavel criada.
let valorObj2 

for(i of obj2.cap2){
    valorObj2 = obj2.cap2.join(', ')
};

console.log('--------------------------------------------------------------------------------------------')

//Adicionando os itens criados na semana 2 dentro de um objeto
obj3 = {
    nome: 'Sandman - Terra dos Sonhos',
    arco: 3,
    lista: true,
    cap: ['caliope', 'um sonho de mil gatos', 'sonho de uma noite de verão', 'fachada']

}
//Criando uma variavel, percorrendo o obj ate o array e concatenando os elementos do array em uma unica string e armazenando dentro da variavel criada.
let valorObj3

for(i of obj3.cap){
    valorObj3 = obj3.cap.join(', ') 
};

//Criando uma condição para adicionar o obj no array "arcosSandman"
if(obj1.lista === true ? arcosSandman.push(obj1): alert(`O arco "${obj1.nome}" não foi adicionado`))
 
if(obj2.lista === true ?  arcosSandman.push(obj2) : alert(`O arco "${obj2.nome}" não foi adicionado`) )
  
if(obj3.lista === true ? arcosSandman.push(obj3) : alert(`O arco "${obj3.nome}" não foi adicionado`))
 
console.log(arcosSandman)

//Criando um array e adicionando 3 variaveis com os arrays dos objs concatenados. E mostrando um relatorio desse array usando o laço. 
let valorObjTotal = [valorObj1, valorObj2, valorObj3]

for(i in valorObjTotal){
    console.log(valorObjTotal[i])
};


# Semana 6

let relatorio
const funcaoObjeto = (obj) =>{
    
    for(i in obj){
        
        relatorio = console.log(`${i}: ${obj[i]}`)     
    }
    return relatorio
     
};
 console.log(funcaoObjeto(obj1))

//  const retornoObjeto = arcosSandman.find(elemento => elemento.nome === 'Sandman')

//  console.log(retornoObjeto)

const retornoObjeto2 = arcosSandman.filter((numero, indice, array) => {
        return numero.nome === 'Sandman' || alert('Esse item não foi encontrado !!') 
})

console.log(retornoObjeto2)

# Semana 7

Criadas todas as tags HTML solicitadas no arquivo index.html, A adição de imagem também foi feita.

# Semana 8