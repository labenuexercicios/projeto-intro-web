const filme1 = 'The Lord of the Rings';
const sinopse = 'esse filme e de terror psicologico'
const oscar= true;
const duracao= 467;
const genero= 'terror'

const filme2= 'A Bruxa de Blair';
const sinopse2 = 'esse filme ganhou o oscar em 1999'
const duracao2= 118;
const oscar2= true;
const genero2= 'ficção'

const filme3 = 'O Hobbit';
const sinopse3 = 'Numa Terra distante de pequenos homens'
const duracao3= 249;
const oscar3= true;
const genero3= 'ficção'

const mediaDuracao = (duracao + duracao2 + duracao3) /3;
console.log(mediaDuracao)

const verficarOsacr = oscar && oscar2 && oscar3;
console.log (verficarOsacr);

//Array proxima etapa
const Aneis=[
    'lancamento: 2003',
    'legend: portugês',
    'produtora: Wingnut films',
    'formato: MKV/MP4',
    'qualidade: BlueRay/Full HD'

]

const Blair = [
    'lancamento:2017',
    'legend:portugês',
    'produtora:Wingnut films',
    'formato:MP4',
    'qualidade:BlueRay/Full HD'

];

const hobbit = [
    
    'lancamento:2014',
    'legend:portugês',
    'produtora:Wingnut films',
    'formato:mkv',
    'qualidade:BlueRay/Full HD'
]

console.log(
    `Filme: ${filme1.toUpperCase()} \nDuração: ${duracao} min \nVencedor de oscar?: ${oscar}\ Aneis: ${Aneis}`
    );

    console.log(
    `Filme: ${filme2.toUpperCase()} \nDuração: ${duracao2} min \nVencedor de oscar?: ${oscar2}\ Blair: ${Blair}`
    );
    console.log(
    `Filme: ${filme3.toUpperCase()} \nDuração: ${duracao3} min \nVencedor de oscar?: ${oscar3}\ hobbit: ${hobbit}`
    );
    
    

