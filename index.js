/*const titulo1 = "\"A Guerra dos Tronos: Crônicas de Gelo e Fogo\" - Georg R. R. Martin "
const pagina1 = 600 
const ebook1 = true
const genero1 = ["Romance" , " Alta Fantasia" , " Ficção Política"]
//console.log("Título: " + titulo1.toUpperCase() + "\nNº de Páginas: " + pagina1 + "\nTem e-book?: " + ebook1 + "\nGêneros: " + genero1 )

const titulo2 = "\"E Não Sobrou Nenhum\" - Agatha Christie"
const pagina2 = 400 
const ebook2 = true
const genero2 = ["Mistério" , " Drama" , " Suspense"]
//console.log("Título: " + titulo2.toUpperCase() + "\nNº de Páginas: " + pagina2 + "\nTem e-book?: " + ebook2 + "\nGêneros: " + genero2 )

const titulo3 = "\"Daisy Jones and The Six: Uma História de Amor e Música\" - Taylor Jenkins Reid"
const pagina3 = 360 
const ebook3 = true 
const genero3 = ["Romance" , " Ficção Histórica"]
//console.log("Título: " + titulo3.toUpperCase() + "\nNº de Páginas: " + pagina3 + "\nTem e-book?: " + ebook3 + "\nGêneros: " + genero3 )
*/



const novotitulo1 = {
    titulo: "'A Guerra dos Tronos: Crônicas de Gelo e Fogo' - Georg R. R. Martin " ,
    paginas: 600 , 
    ebook: true , 
    genero: ["Romance" , " Alta Fantasia" , " Ficção Política"] , 

}
//console.log("Livro 1:" , novotitulo1)

const novotitulo2 = {
    titulo: "'E Não Sobrou Nenhum' - Agatha Christie" , 
    paginas: 400 , 
    ebook: true , 
    genero: ["Mistério" , " Drama" , " Suspense"] , 

}
//console.log("Livro 2:" , novotitulo2)

const novotitulo3 = {
    titulo: "'Daisy Jones and The Six: Uma História de Amor e Música' - Taylor Jenkins Reid" , 
    paginas: 360 , 
    ebook: true , 
    genero: ["Romance" , " Ficção Histórica"]
}
//console.log("Livro 3:" , novotitulo3)

const objetos = []
objetos.push(novotitulo1 , novotitulo2 , novotitulo3)
console.log("Livros com ebook:" , objetos)

const novotitulo4 = {
    titulo: "'1984' - George Orwell" ,
    paginas: 336 ,
    ebook: false , 
    genero: ["Ficção científica" , "Ficção distópica" , "Ficção política"] , 

}
//console.log("Livro 4:" , novotitulo4)

if(novotitulo4.ebook == true){
    objetos.push(novotitulo4)
    console.log(objetos)
} else{
    alert("O Livro 4 não foi adicionado a pasta de Livros com ebook.")
    console.log("Livro sem ebook:" , novotitulo4)
}

const mediaPaginas = {
    quantidade: novotitulo1.paginas + novotitulo2.paginas + novotitulo3.paginas + novotitulo4 , 
}
console.log("Média de páginas de todos os livros: " , mediaPaginas)


const verificaEbook = {
    verificacao : novotitulo1.ebook && novotitulo2.ebook && novotitulo3.ebook && novotitulo4.ebook ,
}
console.log("Verificação de E-books de todos os livros: " , verificaEbook)