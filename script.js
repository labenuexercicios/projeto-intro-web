//CRIANDO OS OBJETOS
authorBook1 = {
    author : 'John Ronald Reuel Tolkien',
    numberBooks : 40,
    live : false,
    bestBooks : ['The Silmarillion', ' The Lord Of The Rings', ' The Hobbit'],
}

authorBook2 = {
    author : 'CS Lewis',
    numberBooks: 49,
    live : false,
    bestBooks : ['Till We Have Face','The Screwtappers Letters', 'Chronicles Of Narnia: The Last Battle'],
}

authorBook3 = {
    author : 'John Piper',
    numberBooks: 49,
    live : true,
    bestBooks : ['Desiring God', 'Providence', 'Don´t Waste Your Cancer'],
}

authorBook4 = {
    author : 'Timothy Keller',
    numberBooks: 52,
    live : true,
    bestBooks : ['Center Church', 'On Birth', 'Counterfeit Gods'],
}

//CRIANDO O ARRAY
const authorsLive = []

//CRIANDO AS CONDIÇÕES
if(authorBook1.live){
    authorsLive.push(authorBook1)
} else{
    alert(authorBook1.author + ' não adicionado')
} 

if(authorBook2.live){
    authorsLive.push(authorBook2)
} else{
   alert(authorBook2.author + ' não adicionado')
} 


if(authorBook3.live){
    authorsLive.push(authorBook3)
} else{
    alert(authorBook3.author + ' não adicionado')
} 

if(authorBook4.live){
    authorsLive.push(authorBook4)
} else{
    alert(authorBook4.author + ' não adicionado')
} 

console.log(authorsLive)
