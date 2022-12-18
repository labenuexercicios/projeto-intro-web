let todosOsAnimais=[]

const animalZero={
    nomeDoAnimal: 'Cachorro',
    animalPrincipal : ['Madona'],
    mediaVida : 10,
    animalDocil: true,
    img:'/image/cachorro.png'
}

if (animalZero.animalDocil===true){
    todosOsAnimais.push(animalZero)
    console.log(todosOsAnimais);
}else{
    alert('O animal não foi adcionado, tente novamente')
}

const animalUm={
    nomeDoAnimal : 'Gato',
    animalPrincipal: ['Billu'],
    mediaVida : 14,
    animalDocil : true,
    img:'/image/gato.png'
}

if(animalUm.animalDocil===true){
    todosOsAnimais.push(animalUm)
    console.log(todosOsAnimais);
}else{
    alert('O animal não foi adcionado, tente novamente')
}

const animalDois={
    nomeDoAnimal: 'Passaro',
    animalPrincipal: ['Cacatua'],
    mediaVida: 60,
    animalDocil: true,
    img:'/image/passaro.png'
}

if(animalDois.animalDocil===true){
    todosOsAnimais.push(animalDois)
    console.log(todosOsAnimais);
}else{
    alert('O animal não foi adcionado, tente novamente')
}

const animalTres={
    nomeDoAnimal: 'Coelho',
    animalPrincipal : ['Ligerinho'],
    mediaVida : 9,
    animalDocil: true,
    img:'/image/coelho.png'
}

if (animalTres.animalDocil===true){
    todosOsAnimais.push(animalTres)
    console.log(todosOsAnimais);
}else{
    alert('O animal não foi adcionado, tente novamente')
}

const animalQuatro={
    nomeDoAnimal: 'Cabra',
    animalPrincipal : ['Naja'],
    mediaVida : 150,
    animalDocil: false,
    img:'/image/cabra.png'
}

if (animalQuatro.animalDocil===false){
    todosOsAnimais.push(animalQuatro)
    console.log(todosOsAnimais);
}else{
    alert('O animal não foi adcionado, tente novamente')
}

const animalCinco={
    nomeDoAnimal: 'Leao',
    animalPrincipal : ['Rei leao'],
    mediaVida : 30,
    animalDocil: false,
    img:'/image/leao.png'
}

if (animalCinco.animalDocil===true){
    todosOsAnimais.push(animalCinco)
    console.log(todosOsAnimais);
}else{
    alert('O animal não foi adcionado, tente novamente')
}


for (let i = 0; i < todosOsAnimais.length; i++) {
    let animalPrincipal1 = todosOsAnimais[i].animalPrincipal.join();
    todosOsAnimais[i].animalPrincipal=animalPrincipal1
    console.log(`${todosOsAnimais[i].nomeDoAnimal.toUpperCase()},${animalPrincipal1}, ${todosOsAnimais[i].mediaVida}, ${todosOsAnimais[i].animalDocil}`);
}


for(let animal of todosOsAnimais){
    console.log(`${animal.nomeDoAnimal.toUpperCase()},\n ${animal.animalPrincipal}, \n ${animal.mediaVida}, \n ${animal.animalDocil}`);
}

function procura () {
    for(let animal of todosOsAnimais){
        console.log(`${animal.nomeDoAnimal.toUpperCase()},\n ${animal.animalPrincipal}, \n ${animal.mediaVida}, \n ${animal.animalDocil}`);
}}

procura()

function arrayanimals(animals, titulo){
    const resultado = animals.filter(anim => {
        return anim.nomeDoAnimal.toUpperCase().includes(titulo.toUpperCase())
    })
    if (resultado.length >= 1){
        return resultado
    }else{
    alert('nenhum animal encontrado')
    }
}

function pesquisaAnimal() {
    let conteiner;
    const searchBar=document.querySelector('.pesquisaanimais').value;
    if (!searchBar) {
       alert('Digite algo para que a busca aconteça') 
    }else{
        const animalsSelecionados=arrayanimals(todosOsAnimais, searchBar);
        console.log(todosOsAnimais);

        conteiner=`<section class="section-design">
        // <!-- <h2>Animais</h2> -->
        <img class="foto" src="${animalsSelecionados[0].img}"
            alt="Capa do animal. ">
        <ul>
            <li class="description">Nome do animal: ${animalsSelecionados[0].nomeDoAnimal}</li>
            <br>
            <li class="description">Animal Principal: ${animalsSelecionados[0].animalPrincipal} </li>
            <br>
            <li class="description">Media de vida: ${animalsSelecionados[0].mediaVida}</li>
            <br>
            <li class="description">É um animal docil: ${animalsSelecionados[0].animalDocil}</li>
            <br>
            <li class="description">Sobre:Os animais são seres vivos que possuem algumas características em comum: nascem, desenvolvem-se, reproduzem-se e morrem. O conjunto dessas etapas é chamado de ciclo vital. Eles podem ser classificados em vertebrados, invertebrados, selvagens, domésticos, terrestres, aquáticos, aéreos, entre várias outras formas.</li>
        </ul>
    </section>`;
    document.querySelector('.conteiner').innerHTML='';
    document.querySelector('.conteiner').innerHTML=conteiner
    }
    
}


