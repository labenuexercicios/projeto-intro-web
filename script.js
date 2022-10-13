//Criando os itens das listas com o DOM
function carregar(){
    
    
    //---------------------------OBJ1-------------------------------
       {let listArco1 = document.getElementById('lista1') //Capturando a TAG 'ul' e guardando na variavel listArco1
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj1.nome}`)
        itemList1.appendChild(cont1)
        listArco1.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj1.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco1.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj1.arco}`)
        itemList3.appendChild(cont3)
        listArco1.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco1.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco1.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj1.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    //-------------------------OBJ2---------------------------------
       {let listArco2 = document.getElementById('lista2') //Capturando a TAG 'ul' e guardando na variavel listArco2
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj2.nome}`)
        itemList1.appendChild(cont1)
        listArco2.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj2.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco2.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj2.arco}`)
        itemList3.appendChild(cont3)
        listArco2.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco2.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco2.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj2.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    
    //------------------------OBJ3----------------------------------
    {let listArco3 = document.getElementById('lista3') //Capturando a TAG 'ul' e guardando na variavel listArco3
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj3.nome}`)
        itemList1.appendChild(cont1)
        listArco3.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj3.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco3.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj3.arco}`)
        itemList3.appendChild(cont3)
        listArco3.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco3.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco3.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj3.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    
    //------------------------OBJ4----------------------------------
    {let listArco4 = document.getElementById('lista4') //Capturando a TAG 'ul' e guardando na variavel listArco4
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj4.nome}`)
        itemList1.appendChild(cont1)
        listArco4.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj4.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco4.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj4.arco}`)
        itemList3.appendChild(cont3)
        listArco4.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco4.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco4.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj4.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    
    //------------------------OBJ5----------------------------------
    {let listArco5 = document.getElementById('lista5') //Capturando a TAG 'ul' e guardando na variavel listArco5
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj5.nome}`)
        itemList1.appendChild(cont1)
        listArco5.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj5.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco5.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj5.arco}`)
        itemList3.appendChild(cont3)
        listArco5.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco5.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco5.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj5.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    
    //------------------------OBJ6----------------------------------
    {let listArco6 = document.getElementById('lista6') //Capturando a TAG 'ul' e guardando na variavel listArco6
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj6.nome}`)
        itemList1.appendChild(cont1)
        listArco6.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj6.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco6.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj6.arco}`)
        itemList3.appendChild(cont3)
        listArco6.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco6.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco6.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj6.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    
    //------------------------OBJ7----------------------------------
    {let listArco7 = document.getElementById('lista7') //Capturando a TAG 'ul' e guardando na variavel listArco7
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj7.nome}`)
        itemList1.appendChild(cont1)
        listArco7.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj7.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco7.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj7.arco}`)
        itemList3.appendChild(cont3)
        listArco7.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco7.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco7.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj7.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    
    //------------------------OBJ8----------------------------------
    {let listArco8 = document.getElementById('lista8') //Capturando a TAG 'ul' e guardando na variavel listArco8
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj8.nome}`)
        itemList1.appendChild(cont1)
        listArco8.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj8.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco8.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj8.arco}`)
        itemList3.appendChild(cont3)
        listArco8.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco8.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco8.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj8.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    
    //------------------------OBJ9----------------------------------
    {let listArco9 = document.getElementById('lista9') //Capturando a TAG 'ul' e guardando na variavel listArco9
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj9.nome}`)
        itemList1.appendChild(cont1)
        listArco9.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj9.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco9.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj9.arco}`)
        itemList3.appendChild(cont3)
        listArco9.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco9.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco9.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj9.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    
    //------------------------OBJ10---------------------------------
    {let listArco10 = document.getElementById('lista10') //Capturando a TAG 'ul' e guardando na variavel listArco10
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj10.nome}`)
        itemList1.appendChild(cont1)
        listArco10.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj10.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco10.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj10.arco}`)
        itemList3.appendChild(cont3)
        listArco10.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco10.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco10.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj10.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
    
    //------------------------OBJ11---------------------------------
    {let listArco11 = document.getElementById('lista11') //Capturando a TAG 'ul' e guardando na variavel listArco11
        
        let itemList1 = document.createElement('li')
        let cont1 = document.createTextNode(`Nome: ${obj11.nome}`)
        itemList1.appendChild(cont1)
        listArco11.insertAdjacentElement('beforeend', itemList1)
    //--------------------------------------------------------------
        let itemList2 = document.createElement('li')
        let cont2 = document.createTextNode(`Nome do Arco: ${obj11.nomeArco}`)
        itemList2.appendChild(cont2)
        listArco11.insertAdjacentElement('beforeend', itemList2)
    //--------------------------------------------------------------
        let itemList3 = document.createElement('li')
        let cont3 = document.createTextNode(`Nº do arco: #${obj11.arco}`)
        itemList3.appendChild(cont3)
        listArco11.insertAdjacentElement('beforeend', itemList3)
    //--------------------------------------------------------------
        let itemList4 = document.createElement('li')
        let cont4 = document.createTextNode(`Contem na lista: SIM` )
        itemList4.appendChild(cont4)
        listArco11.insertAdjacentElement('beforeend', itemList4)
    //--------------------------------------------------------------
        let itemList5 = document.createElement('li')
        let cont5 = document.createTextNode('Capitulos: ')
        itemList5.appendChild(cont5)
        listArco11.insertAdjacentElement('beforeend', itemList5)
    //--------------------------------------------------------------
        let outraLista = document.createElement('ul')
        let cont6 = document.createTextNode(obj11.cap.join(', '))
        outraLista.appendChild(cont6)
        itemList5.insertAdjacentElement('beforeend', outraLista)
       }
       
    }


//Criando um array vazio
let arcosSandman = [];

//Adicionando os itens criados na semana 2 dentro de um objeto
obj1 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'preludios e noturnos',
    sobreArco: "https://poltronanerd.com.br/livros/sandman-preludios-e-noturnos-88335",
    arco: 1,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-1.jpg',
    cap: ['o sono dos justos', 'anfitriões imperfeitos', 'sonhe um breve sonho comigo', 'uma esperança no inferno', 'passageiros', '24 horas', 'som e furia', 'o som de suas asas']
};
//Criando uma variavel, percorrendo o obj ate o array e concatenando os elementos do array em uma unica string e armazenando dentro da variavel criada.
let valorObj1
for(i of obj1.cap){
    valorObj1 = obj1.cap.join(', ')  
    
}; 

obj2 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'casa de bonecas',
    sobreArco: "https://poltronanerd.com.br/livros/sandman-casa-de-bonecas-por-neil-gaiman-89767",
    arco: 2,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-2.jpg',
    cap: ['contos na areia', 'casa de bonecas', 'mudanças', 'brincando de casinha', 'homens de boa fortuna', 'os colecionadores', 'noite adentro', 'corações perdidos']
};
let valorObj2 
for(i of obj2.cap){
    valorObj2 = obj2.cap.join(', ')
};

obj3 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'terra dos sonhos',
    sobreArco: "https://poltronanerd.com.br/livros/sandman-terra-dos-sonhos-neil-gaiman-90354",
    arco: 3,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-3.jpg',
    cap: ['caliope', 'um sonho de mil gatos', 'sonho de uma noite de verão', 'fachada']
};
let valorObj3
for(i of obj3.cap){
    valorObj3 = obj3.cap.join(', ') 
};

obj4 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'estação das brumas',
    sobreArco: "https://poltronanerd.com.br/livros/sandman-estacao-das-brumas-neil-gaiman-91723",
    arco: 4,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-4.jpg',
    cap: ['Estação das brumas: Um Prólogo','Estação das Brumas: Capítulo 1', 'Estação das Brumas: Capítulo 2', 'Estação das Brumas: Capítulo 3', 'Estação das Brumas: Capítulo 4', 'Estação das Brumas: Capítulo 5', 'Estação das Brumas: Capítulo 6', 'Estação das Brumas: Epílogo']
};
let valorObj4
for(i of obj4.cap){
    valorObj4 = obj4.cap.join(', ')
};

obj5 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'um jogo de você',
    sobreArco: "https://poltronanerd.com.br/livros/vai-sandman-um-jogo-de-voce-neil-gaiman-92196",
    arco: 5,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-5.jpg',
    cap: ['Chacina na Quinta Avenida', 'Cantigas de Ninar da Broadway', 'O Nascer da Lua Má', 'Começando a Ver a Luz', 'Sobre o Mar, Rumo ao Céu', 'Eu acordei e Um de Nós Estava Chorando']
};
let valorObj5
for(i of obj5.cap){
    valorObj5 = obj5.cap.join(', ')
};

obj6 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'fabulas e reflexões',
    sobreArco: "https://poltronanerd.com.br/livros/sandman-fabulas-reflexoes-neil-gaiman-95099",
    arco: 6,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-6.jpg',
    cap: ['Espelhos Distantes: Termidor', 'Espelhos Distantes: Augustus', 'Espelhos Distantes: Três Setembros e Um Janeiro', 'Convergência: Caçada', 'Convergência: Lugares Maleáveis', 'Convergência: O Parlamento das Gralhas', 'Espelhos Distantes: Ramadã', 'A Canção de Orpheus', 'Medo de Cair']
};
let valorObj6
for(i of obj6.cap){
    valorObj6 = obj6.cap.join(', ')
};

obj7 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'vidas breves',
    sobreArco: "https://universohq.com/reviews/sandman-vidas-breves/",
    arco: 7,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-7.jpg',
    cap: ['Vidas Breves: Capítulo 1', 'Vidas Breves: Capítulo 2', 'Vidas Breves: Capítulo 3', 'Vidas Breves: Capítulo 4', 'Vidas Breves: Capítulo 5', 'Vidas Breves: Capítulo 6', 'Vidas Breves: Capítulo 7', 'Vidas Breves: Capítulo 8', 'Vidas Breves: Capítulo 9']
};
let valorObj7
for(i of obj7.cap){
    valorObj7 = obj7.cap.join(', ')
};

obj8 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'fim dos mundos',
    sobreArco: "https://universohq.com/reviews/sandman-fim-dos-mundos/",
    arco: 8,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-8.jpg',
    cap: ['Um Conto de Duas Cidades', 'O Conto de Cluracan', 'o Leviatã de Hob', 'O Menino de Ouro', 'Mortalha', 'Fim dos Mundos']
};
let valorObj8
for(i of obj8.cap){
    valorObj8 = obj8.cap.join(', ')
};

obj9 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'entes queridos',
    sobreArco: "https://universohq.com/reviews/sandman-entes-queridos/",
    arco: 9,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-9.jpg',
    cap: ['As Bondosas: Capítulo 1', 'As Bondosas: Capítulo 2', 'As Bondosas: Capítulo 3', 'As Bondosas: Capítulo 4', 'As Bondosas: Capítulo 5', 'As Bondosas: Capítulo 6', 'As Bondosas: Capítulo 7', 'As Bondosas: Capítulo 8', 'As Bondosas: Capítulo 9', 'As Bondosas: Capítulo 10', 'As Bondosas: Capítulo 11', 'As Bondosas: Capítulo 12', 'As Bondosas: Capítulo 13']
};
let valorObj9
for(i of obj9.cap){
    valorObj9 = obj9.cap.join(', ')
};

obj10 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'o despertar',
    sobreArco: "https://universohq.com/reviews/sandman-despertar/",
    arco: 10,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-10.jpg',
    cap: ['O Qual Ocorre no Rastro do Que Se Passou', 'No Qual um Vélorio se Realiza', 'No Qual o Velorio se Encerra e Nós Despertamos', 'Um Epilogo - Luto Dominical', 'Exilados', 'A Tempestade']
};
let valorObj10
for(i of obj10.cap){
    valorObj10 = obj10.cap.join(', ')
};

obj11 = {
    nome: 'Sandman'.toUpperCase(),
    nomeArco: 'Preludio',
    sobreArco: "https://blogsemserifa.com/2017/02/21/resenha-sandman-preludio-volumes-i-iii/",
    arco: 11,
    estaNaLista: true,
    caminhoImagem: 'imagens/capa-arco-14.jpg',
    cap: ['Capitulo 1', 'Capitulo 2', 'Capitulo 3']
};
let valorObj11
for(i of obj11.cap){
    valorObj11 = obj11.cap.join(', ')
};


//Criando um array e adicionando as variaveis com os arrays dos objs concatenados. E mostrando um relatorio desse array usando o laço. 
let valorObjTotal = [valorObj1, valorObj2, valorObj3, valorObj4, valorObj5, valorObj6, valorObj7, valorObj8, valorObj9, valorObj10, valorObj11]



//Criando uma condição para adicionar o obj no array "arcosSandman"
if(obj1.estaNaLista === true ? arcosSandman.push(obj1) : alert(`O arco "${obj1.nomeArco}" não foi adicionado`))
if(obj2.estaNaLista === true ? arcosSandman.push(obj2) : alert(`O arco "${obj2.nomeArco}" não foi adicionado`))
if(obj3.estaNaLista === true ? arcosSandman.push(obj3) : alert(`O arco "${obj3.nomeArco}" não foi adicionado`))
if(obj4.estaNaLista === true ? arcosSandman.push(obj4) : alert(`O arco "${obj4.nomeArco}" não foi adicionado`))
if(obj5.estaNaLista === true ? arcosSandman.push(obj5) : alert(`O arco "${obj5.nomeArco}" não foi adicionado`))
if(obj6.estaNaLista === true ? arcosSandman.push(obj6) : alert(`O arco "${obj6.nomeArco}" não foi adicionado`))
if(obj7.estaNaLista === true ? arcosSandman.push(obj7) : alert(`O arco "${obj7.nomeArco}" não foi adicionado`))
if(obj8.estaNaLista === true ? arcosSandman.push(obj8) : alert(`O arco "${obj8.nomeArco}" não foi adicionado`))
if(obj9.estaNaLista === true ? arcosSandman.push(obj9) : alert(`O arco "${obj9.nomeArco}" não foi adicionado`))
if(obj10.estaNaLista === true ? arcosSandman.push(obj10) : alert(`O arco "${obj10.nomeArco}" não foi adicionado`))
if(obj11.estaNaLista === true ? arcosSandman.push(obj11) : alert(`O arco "${obj11.nomeArco}" não foi adicionado`))

console.log(arcosSandman)

//Devolvendo array de objetos em string

const relatorioObjetos = arcosSandman.map((x) => {
    return{
        nome: x.nome,
        nomeArco: x.nomeArco,
        arco: x.arco,
        estaNaLista: x.estaNaLista,
        cap: x.cap.toString()
    }
}); 
console.log(relatorioObjetos)

//--------------------------Semana 6-------------------------------------
let relatorio
const funcaoObjeto = (obj) =>{
    for(i in obj){
        relatorio = console.log(`${i}: ${obj[i]}`)     
    }
    return relatorio
};
 (funcaoObjeto(obj1))

//Buscador
function procurar(event){
    event.preventDefault()
    let res = document.getElementById('arcos')
    res.classList.add('newStyle')
    let input = document.getElementById('search')
   

    
    let filtrados = arcosSandman.filter((i) => i.nomeArco.toUpperCase() === input.value.toUpperCase().trim());
        if(filtrados.length >= 1){
            return res.innerHTML = `<img src=${filtrados[0].caminhoImagem} class='imagemSolo' width="20%" alt="capa do primeiro arco de sandman"> 
            <ul class='listNoOrdem'>
                <li>Nome: ${filtrados[0].nome}</li></br>
                <li>Arco: <a href=${filtrados[0].sobreArco} target="_blank">${filtrados[0].nomeArco.toUpperCase()}</a></li></br>
                <li>Nº do arco: #${filtrados[0].arco}</li></br>
                <li>Esta na lista: ${filtrados[0].estaNaLista = 'SIM'}</li></br>
                <ol style="list-style: none;">Capitulos: </br><li>${filtrados[0].cap.join('</br>')}</li></ol>
            </ul>`,
            
            input.value = ''
        } 
        else {
            alert('Item não encontrado')
        };
        
        res.appendChild(res)
        res.insertAdjacentElement('afterend', res) 
        
};





