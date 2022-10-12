//CRIANDO OS OBJETOS

//OBJETO 01
//ANTES
authorBook1 = {
    author: 'John Ronald Reuel Tolkien',
    numberBooks: 40,
    live: false,
    bestBooks: ['The Silmarillion', 'The Lord Of The Rings', 'The Hobbit']
}

//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks1 = ""
for (i in authorBook1.bestBooks) {
    nBook = authorBook1.bestBooks.length - 1
    bestBooks1 += authorBook1.bestBooks[i];
    if (i < nBook) {
        bestBooks1 += ', '
    }
}

//Imprimindo
authorBook1.bestBooks = bestBooks1;
console.log(authorBook1)

//OBJETO 02

authorBook2 = {
    author: 'Clive Staples Lewis',
    numberBooks: 49,
    live: false,
    bestBooks: ['Till We Have Face', 'The Screwtappers Letters', 'Chronicles Of Narnia: The Last Battle']
}


//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks2 = ""
for (i in authorBook2.bestBooks) {
    nBook = authorBook2.bestBooks.length - 1
    bestBooks2 += authorBook2.bestBooks[i];
    if (i < nBook) {
        bestBooks2 += ', '
    }
}

authorBook2.bestBooks = bestBooks2;
console.log(authorBook2)

//OBJETO 03
authorBook3 = {
    author: 'John Piper',
    numberBooks: 49,
    live: true,
    age: 79,
    bestBooks: ['Desiring God', 'Providence', 'Don´t Waste Your Cancer']
}

//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks3 = ""
for (i in authorBook3.bestBooks) {
    nBook = authorBook3.bestBooks.length - 1
    bestBooks3 += authorBook3.bestBooks[i];
    if (i < nBook) {
        bestBooks3 += ', '
    }
}


authorBook3.bestBooks = bestBooks3;
console.log(authorBook3)


//OBJETO 04
authorBook4 = {
    author: 'Timothy Keller',
    numberBooks: 52,
    live: true,
    age: 72,
    bestBooks: ['Center Church', 'On Birth', 'Counterfeit Gods']
}

//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks4 = ""
for (i in authorBook4.bestBooks) {
    nBook = authorBook4.bestBooks.length - 1
    bestBooks4 += authorBook4.bestBooks[i];
    if (i < nBook) {
        bestBooks4 += ', '
    }
}

authorBook4.bestBooks = bestBooks4;
console.log(authorBook4)

//OBJETO 05
authorBook5 = {
    author: 'Patrick Rothfuss',
    numberBooks: 3,
    live: true,
    age: 49,
    bestBooks: ['In The Name of The Wind', 'On Birth', 'The Wise Man´s Fear', 'The Slow Regard of Silent Things']
}

//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks5 = ""
for (i in authorBook5.bestBooks) {
    nBook = authorBook5.bestBooks.length - 1
    bestBooks5 += authorBook5.bestBooks[i];
    if (i < nBook) {
        bestBooks5 += ', '
    }
}

authorBook5.bestBooks = bestBooks5;
console.log(authorBook5)

//OBJETO 05
authorBook6 = {
    author: 'Neil Gaiman',
    numberBooks: 11,
    live: true,
    age: 61,
    bestBooks: ['American God', 'Coraline', 'Sandman']
}

//TORNANDO ARRAY EM LAÇO - DEPOIS
let bestBooks6 = ""
for (i in authorBook6.bestBooks) {
    nBook = authorBook6.bestBooks.length - 1
    bestBooks6 += authorBook6.bestBooks[i];
    if (i < nBook) {
        bestBooks6 += ', '
    }
}

authorBook6.bestBooks = bestBooks6;
console.log(authorBook6)


//CRIANDO O ARRAY
const authorsLive = []
//CRIANDO AS CONDIÇÕES PARA O PUSH DO ARRAY 2   
if (authorBook1.live) {
    authorsLive.push(authorBook1)
} else {
    alert(authorBook1.author + ' não adicionado')
}

if (authorBook2.live) {
    authorsLive.push(authorBook2)
} else {
    alert(authorBook2.author + ' não adicionado')
}

if (authorBook3.live) {
    authorsLive.push(authorBook3)
} else {
    alert(authorBook3.author + ' não adicionado')
}

if (authorBook4.live) {
    authorsLive.push(authorBook4)
} else {
    alert(authorBook4.author + ' não adicionado')
}

if (authorBook5.live) {
    authorsLive.push(authorBook5)
} else {
    alert(authorBook4.author + ' não adicionado')
}

if (authorBook6.live) {
    authorsLive.push(authorBook6)
} else {
    alert(authorBook4.author + ' não adicionado')
}

//ANTES
/*
console.log('Author: ', authorsLive[0].author);
console.log('Number of books:', authorsLive[0].numberBooks);
console.log('He is living?: ', authorsLive[0].live);
console.log('Age: ', authorsLive[0].age);
console.log('Best books: ', authorsLive[0].bestBooks);
*/

//DEPOIS
for (author of authorsLive) {
    for (props in author) {
        console.log(props, ':', author[props]);
    }
}

//CARDS
let keller = document.getElementById('author-1')
keller.innerHTML = ` <img src="assets/keller.png"
height="200px">
<ul>
<li>
    <h2><a href="https://en.wikipedia.org/wiki/Tim_Keller_(pastor)" target="_blank">${authorsLive[1].author}</a></h2>
</li>
<li>Age: ${authorsLive[1].age}</li>
<li>Number of Books: ${authorsLive[1].numberBooks}</li>
<li>Is living: ${authorsLive[1].live}</li>
</ul>
`

/////////////////////////////////////////////////

let piper = document.getElementById('author-2')
piper.innerHTML = ` <img src="assets/piper.png"
height="200px">
<ul>
<li>
    <h2><a href="https://en.wikipedia.org/wiki/John_Piper_(theologian)" target="_blank">${authorsLive[0].author}</a></h2>
</li>
<li>Age: ${authorsLive[0].age}</li>
<li>Number of Books: ${authorsLive[0].numberBooks}</li>
<li>Is living: ${authorsLive[0].live}</li>
</ul>
`

////////////////////////////////////////////////////////

let rothfuss = document.getElementById('author-3')
rothfuss.innerHTML = ` <img src="assets/rothfuss.png"
height="200px">
<ul>
<li>
    <h2><a href="https://en.wikipedia.org/wiki/Patrick_Rothfuss" target="_blank">${authorsLive[2].author}</a></h2>
</li>
<li>Age: ${authorsLive[2].age}</li>
<li>Number of Books: ${authorsLive[2].numberBooks}</li>
<li>Is living: ${authorsLive[2].live}</li>
</ul>
`

//////////////////////////////////////////////////

let gaiman = document.getElementById('author-4')
gaiman.innerHTML = ` <img src="assets/gaiman.png"
height="200px">
<ul>
<li>
    <h2><a href="https://en.wikipedia.org/wiki/Neil_Gaiman" target="_blank">${authorsLive[3].author}</a></h2>
</li>
<li>Age: ${authorsLive[3].age}</li>
<li>Number of Books: ${authorsLive[3].numberBooks}</li>
<li>Is living: ${authorsLive[3].live}</li>
</ul>
`


//PESQUISA DE FILTRO
function filtrar(obj) {
    let keller = document.getElementById('author-1');
    let piper = document.getElementById('author-2');
    let rothfuss = document.getElementById('author-3');
    let gaiman = document.getElementById('author-4')

    const busca = document.getElementById('busca');
    let str = busca.value;

    if (str === obj[0].author || str === obj[1].author || str === obj[2].author || str === obj[3].author) {
        const search = obj.filter((ind) => {
            return ind.author === str;
        })
        return search[0]
    }
    if (str !== obj[0].author && str !== obj[1].author && str !== obj[2].author && str !== obj[3].author) {
        const notFound = alert('Autor não encontrado')
        return notFound;
    }


    // if (str === obj[0].author) {
    //     keller.remove();
    //     rothfuss.remove();
    //     gaiman.remove();

    //     let piper1 = document.createElement('article');
    //     piper1.innerHTML = `scsdcsdc`
    // } else if (str === obj[1].author) {
    //     piper.remove();
    //     rothfuss.remove();
    //     gaiman.remove()
    // }

    // if (str !== obj[0].author && str !== obj[1].author && str !== obj[2].author && str !== obj[3].author) {
    //     const notFound = alert('Autor não encontrado')
    //     return notFound;
    // }


}


function buscar(event) {
    event.preventDefault();
    let filtro = filtrar(authorsLive);

    const pesquisa = document.getElementById('authorsrc')
    pesquisa.style.visibility = 'visible';

    const valor = document.getElementById('busca').value;

    document.getElementById('author-1').style.visibility = 'hidden';
    document.getElementById('author-1').style.width = '0';
    document.getElementById('author-1').style.width = '0';

    document.getElementById('author-2').style.visibility = 'hidden';
    document.getElementById('author-2').style.width = '0';
    document.getElementById('author-2').style.width = '0';

    document.getElementById('author-3').style.visibility = 'hidden';
    document.getElementById('author-3').style.width = '0';
    document.getElementById('author-3').style.width = '0';

    document.getElementById('author-4').style.visibility = 'hidden';
    document.getElementById('author-4').style.width = '0';
    document.getElementById('author-4').style.width = '0';

    pesquisa.style.width = '40%';
    pesquisa.style.height = '300px';
    pesquisa.style.background = '#154cf2';


    pesquisa.addEventListener('mouseenter', function hover() {
        return pesquisa.style.background = '#ffd42b'
    })

    pesquisa.addEventListener('mouseleave', function hover() {
        return pesquisa.style.background = '#154cf2'
    })

    if (valor === 'John Piper') {
        pesquisa.innerHTML = ` <img src="assets/piper.png"
        height="200px">
        <ul>
        <li>
            <h2><a href="https://en.wikipedia.org/wiki/John_Piper_(theologian)" target="_blank">${filtro.author}</a></h2>
        </li>
        <li>Age: ${filtro.age}</li>
        <li>Number of Books: ${filtro.numberBooks}</li>
        <li>Is living: ${filtro.live}</li>
        </ul>
        `
    } else if (valor === 'Timothy Keller') {
        pesquisa.innerHTML = ` <img src="assets/keller.png"
        height="200px">
        <ul>
        <li>
            <h2><a href="https://en.wikipedia.org/wiki/John_Piper_(theologian)" target="_blank">${filtro.author}</a></h2>
        </li>
        <li>Age: ${filtro.age}</li>
        <li>Number of Books: ${filtro.numberBooks}</li>
        <li>Is living: ${filtro.live}</li>
        </ul>
        `
    } else if(valor === 'Patrick Rothfuss'){
        pesquisa.innerHTML = ` <img src="assets/rothfuss.png"
        height="200px">
        <ul>
        <li>
            <h2><a href="https://en.wikipedia.org/wiki/John_Piper_(theologian)" target="_blank">${filtro.author}</a></h2>
        </li>
        <li>Age: ${filtro.age}</li>
        <li>Number of Books: ${filtro.numberBooks}</li>
        <li>Is living: ${filtro.live}</li>
        </ul>
        ` 
    } else if(valor === 'Neil Gaiman'){
        pesquisa.innerHTML = ` <img src="assets/gaiman.png"
        height="200px">
        <ul>
        <li>
            <h2><a href="https://en.wikipedia.org/wiki/John_Piper_(theologian)" target="_blank">${filtro.author}</a></h2>
        </li>
        <li>Age: ${filtro.age}</li>
        <li>Number of Books: ${filtro.numberBooks}</li>
        <li>Is living: ${filtro.live}</li>
        </ul>
        `
    } else{
        const pesquisa = document.getElementById('authorsrc')
        pesquisa.style.visibility = 'hidden';
    
        //const valor = document.getElementById('busca').value;
    
        document.getElementById('author-1').style.visibility = 'visible';
        document.getElementById('author-1').style.width = '39.06vw';
        document.getElementById('author-1').style.width = '46.58vh';
    
        document.getElementById('author-2').style.visibility = 'visible';
        document.getElementById('author-2').style.width = '39.06vw';
        document.getElementById('author-2').style.width = '46.58vh';
    
        document.getElementById('author-3').style.visibility = 'visible';
        document.getElementById('author-3').style.width = '39.06vw';
        document.getElementById('author-3').style.width = '46.58vh';
    
        document.getElementById('author-4').style.visibility = 'visible';
        document.getElementById('author-4').style.width = '39.06vw';
        document.getElementById('author-4').style.width = '46.58vh';
    
        pesquisa.style.width = '0';
        pesquisa.style.height = '0';

    }
}

buscar()