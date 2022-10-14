/* Item = Carro
Nome = nome
velMax = velocidade máxima, 
marca = marca
preco = preço
temCvt = possui cambio CVT
fonte: https:carrosnaweb.com.br 
const nome | const preço | const marca | const velMax
Para os dados, foram considerados a última versão fabricada do carro*/

const carro1 = {
    nome: "Corolla Cross",
    preco: 190.590,
    marca: "Toyota",
    velMax: "195km/h",
    temCvt: true,
    img: "https://carros2022.com.br/wp-content/uploads/2021/07/car1-768x388.png",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=17698",

}
const carro2 = {
    nome: "Creta Platinum 1.0",
    preco: 165.290,
    marca: "Hyundai",
    velMax: "190km/h",
    temCvt: false,
    img: "https://carros2022.com.br/wp-content/uploads/2021/02/z1-3-768x576.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=18624",

}
const carro3 = {
    nome: "Duster Iconic 1.6",
    preco: 133.990,
    marca: "Renault",
    velMax: "190km/h",
    temCvt: true,
    img: "https://carros2022.com.br/wp-content/uploads/2021/04/duster10-768x511.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=17665",
}
const carro4 = {
    nome: "Honda HR-V Touring 1.5 Turbo 1.2",
    preco: 184.500,
    marca: "Honda",
    velMax: "198km/h",
    temCvt: true,
    img: "https://cdn.euroncap.com/media/68585/honda-hr-v.png?mode=crop&width=359&height=235",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=20098" ,
}
const carro5 = {
    nome: "Tracker Premier 1.2",
    preco: 152.790,
    marca: "Chevrolet",
    velMax: "185km/h",
    temCvt: false,
    img: "https://carros2022.com.br/wp-content/uploads/2021/02/z6-1-768x460.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=17999",
}


const mediaPreco = (carro1.preco+carro2.preco+carro3.preco+carro4.preco)/4; 
console.log("Média de preço dos carros: R$" + mediaPreco);

// const verificaCvt = carro1.temCvt && carro2.temCvt && carro3.temCvt && carro4.temCvt;
// console.log(verificaCvt); 

// //semana 2

// console.log(carro1.nome.toUpperCase(),"\n",carro1.preco,"\n"
// , carro1.marca,"\n", carro1.velMax,"\n", carro1.temCvt);
// console.log(carro2.nome.toUpperCase(),"\n",carro2.preco,
// "\n", carro2.marca,"\n", carro2.velMax,"\n", carro2.temCvt);
// console.log(carro3.nome.toUpperCase(),"\n",carro3.preco,
// "\n", carro3.marca,"\n", carro3.velMax,"\n", carro3.temCvt);
// console.log(carro4.nome.toUpperCase(),"\n",carro4.preco,
// "\n", carro4.marca,"\n", carro4.velMax,"\n", carro4.temCvt);

// // Verificar o resultado exposto na semana 3 do projeto, pois ficou diferente 
// // dos modelos apresentados no assíncrono.

// //semana 3
let arrayCarros = [];
arrayCarros.push(carro1)
arrayCarros.push(carro2);
arrayCarros.push(carro3);
arrayCarros.push(carro4);
arrayCarros.push(carro5);
console.log(arrayCarros);

// //semana 4

if (carro1.temCvt){
   console.log(carro1.nome + " possui câmbio CVT;")
}else{
   console.log(carro1.nome + " não possui câmbio CVT;")
}
if (carro2.temCvt){
   console.log(carro2.nome + " possui câmbio CVT;")
}else{
   console.log(carro2.nome +  " não possui câmbio CVT;")
}
if (carro3.temCvt){
   console.log(carro3.nome + " possui câmbio CVT;")
}else{
   console.log(carro3.nome +  " não possui câmbio CVT;")
}
if (carro4.temCvt){
   console.log(carro4.nome + " possui câmbio CVT;")
}else{
   console.log(carro4.nome +  " não possui câmbio CVT;")
}
if (carro5.temCvt){
   console.log(carro5.nome + " possui câmbio CVT;")
}else{
   console.log(carro5.nome +  " não possui câmbio CVT;")
}


// semana 5 
// const carro = [{
//     nome : "Duster",
//     preco : 133.990,
//     marca : "Renault",
//     velMax : "190km/h",
//     temCvt : true,
// },
//  {
//     nome : "Tracker",
//     preco : 152.790,
//     marca : "Chevrolet",
//     velMax : "185km/h",
//     temCvt : false,
// },
// {
//     nome : "Creta",
//     preco : 165.290,
//     marca : "Hyundai",
//     velMax : "190km/h",
//     temCvt : false,
// },
// {
//     nome : "Corolla Cross",
//     preco : 190.590,
//     marca : "Toyota",
//     velMax : "195km/h", 
//     temCvt : true,
// }
// ]


// for(const carros of arrayCarros){
//  console.log(`O carro ${carros.nome.toUpperCase()}, de marca ${carros.marca}, tem como velocidade máxima ${carros.velMax}, vale ${carros.preco + " mil"} e possui CVT?${carros.temCvt}`);
// }

// for(let i = 0; i < arrayCarros.length; i++){
//     console.log(`O carro ${arrayCarros[i].nome.toUpperCase()} tem como velocidade máxima ${arrayCarros[i].velMax}`);
//   }

// semana 6

function imprimirObj(carro) {
    let veiculo = `O carro ${carro.nome.toUpperCase()}, de marca ${carro.marca}, tem como velocidade máxima ${carro.velMax}, vale ${carro.preco + " mil"} e     
    possui CVT? ${carro.temCvt}`
    return veiculo
}

// function carObj(carros) {
//     for (const carro of carros) {
//         // console.log(imprimirObj(carro));
//         // console.log("=".repeat(30))
//     }
// }

// carObj(arrayCarros)

function buscaCar(carros, pesquisa) {
    let carroFiltrado = carros.filter(carro => {
        return carro.nome.toUpperCase().includes(pesquisa.toUpperCase());
    })
    if (carroFiltrado.length === 0) {
    } else {
        return carroFiltrado;
    }
    let carroFiltrado2 = carros.filter(carro => {
        return carro.marca.toUpperCase().includes(pesquisa.toUpperCase());
    })
    if (carroFiltrado2.length === 0) {
    } else {
        return carroFiltrado2;
    }

};

function buscaCarro() {
    let container;
    const search = document.querySelector("#search-input").value;
    if (!search) {
        alert("Digite algo para que a busca aconteça");
    } else {
        const cars = buscaCar(arrayCarros, search);
        console.log(cars);
        container = `
        <main>
        <section class="carro" >
        <img src=${cars[0].img}>
        <ul>
            <li><a href= ${cars[0].link}
                    target="_blank"><b>${cars[0].nome}</b></a></li>
            </br>
            <li>Preço: R$ ${cars[0].preco}</li>
            <li>Marca: ${cars[0].marca}</li>
            <li>Velocidade Máxima: ${cars[0].velMax}</li>
            <li>Possui câmbio CVT?: ${cars[0].temCvt}</li>
        </ul>

    </section>`;
        document.querySelector("#itemContainer").innerHTML = "";
        document.querySelector("#itemContainer").innerHTML = container;
    }
}

