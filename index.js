/*
const titulo = String
const pagina = Number
const ebook = Boolean 
const genero = array de string
*/

const titulo1 = "\"A Guerra dos Tronos: Crônicas de Gelo e Fogo\" - Georg R. R. Martin "
const pagina1 = 600 
const ebook1 = true
const genero1 = ["Romance" , " Alta Fantasia" , " Ficção Política"]
console.log("Título: " + titulo1.toUpperCase() + "\nNº de Páginas: " + pagina1 + "\nTem e-book?: " + ebook1 + "\nGêneros: " + genero1 )

const titulo2 = "\"E Não Sobrou Nenhum\" - Agatha Christie"
const pagina2 = 400 
const ebook2 = true
const genero2 = ["Mistério" , " Drama" , " Suspense"]
console.log("Título: " + titulo2.toUpperCase() + "\nNº de Páginas: " + pagina2 + "\nTem e-book?: " + ebook2 + "\nGêneros: " + genero2 )

const titulo3 = "\"Daisy Jones and The Six: Uma História de Amor e Música\" - Taylor Jenkins Reid"
const pagina3 = 360 
const ebook3 = true 
const genero3 = ["Romance" , " Ficção Histórica"]
console.log("Título: " + titulo3.toUpperCase() + "\nNº de Páginas: " + pagina3 + "\nTem e-book?: " + ebook3 + "\nGêneros: " + genero3 )

const mediaPaginas = pagina1 + pagina2 + pagina3 
console.log("Média das páginas: " , mediaPaginas)

const verificaEbook = ebook1 && ebook2 && ebook3 
console.log("Verificação de E-books: " , verificaEbook)
