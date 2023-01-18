const marcadopainel2 = "Canadian"
const geracaopormes2 = 560
const possuisistemacontrasurto2 = false
const itensamaisdokit2 = ["painel solar canadian", "inversor fronius", "suporte de apoio"]

// function recebearrayeobjeto(array, string){
//     let array2 = []

//     array.forEach(element => {
//         if(element.nomedoobjeto.toUpperCase().indexOf(string.toUpperCase()) > -1){
//             array2.push(element)
//         }
//     })
//     return array2


//     // console.log(array.nomedoobjeto.indexof(string)
//     // cons
//     // for(let i = 0; i<array.length; i++){
//     //     if(string !== array[i].nomedoobjeto){
//     //         array.splice(i - 1, 1)
//     //         console.log("Posicao do i:", i)
//     //         console.log("Salve!")
//     //     }
//     // }
//     // return array

//     // for(let i = 0; i< array.length; i++){
//     //     for(let x = 0; x < array[i].itensdoobjeto.length; x++){
//     //         if(array[i].nomedoobjeto[x] === string){
//     //             console.log("Opa:", array[i].nomedoobjeto[x])
//     //             return array[i].nomedoobjeto[x]
//     //         }
//     //     }
//     // }
// }

// function recebeobjeto(objeto){//funcao pra salvar tudo em uma string
//     console.log("-------------------")
//     let stringnomedoobjeto = "\nO nome do objeto é: " + objeto.nomedoobjeto
//     let stringgeracaodoobejto = "\nA geração do objeto é: " + objeto.geracaodoobjeto1
//     let stringpossuisistema = ""
//     if(objeto.possuisistemaobjeto1){
//         stringpossuisistema = "\nO obejto possui sistema contra surtos."
//     }
//     else{
//         stringpossuisistema = "\nO obejto não possui sistema contra surtos."
//     }
//     return  stringnomedoobjeto + stringgeracaodoobejto + stringpossuisistema
// }

// //declaracao dos itens


if(adicionar){
    const novoobjeto4 = {
        nomedonovoobjeto4 : prompt("Digite o nome do novo objeto:"),
        geracaodonovoobjeto4 : +(prompt("Digite a geração do novo objeto:")),
        possuisistemanovoobjeto4: confirm("O novo objeto possui sistema contra surto?")
    }
    arraypraguardaosobjeto.push(novoobjeto4)
    alert("Novo objeto foi adicionado.")
}
else{
    alert("Não foi adicionado nada.")
}

const stringaserpassada = "Trina"

let objetocomarray = recebearrayeobjeto(arraypraguardaosobjeto, stringaserpassada)
console.log("Imprimindo o objeto:",objetocomarray)


// function setoradmin(event){
// //    const nomedonovoobjeto4 : prompt("Digite o login");

// }

function adicionaroskits(event){

    event.preventDefault()
    // let numerodokit = 0

    const pegaidcorpo =  document.getElementById("corpo")
    const newelementsection = document.createElement("section")
    newelementsection.classList.add("section")
    newelementsection.setAttribute("id", "section")

    const pegaidimagem = document.querySelector(".section")
    const newelementarticle = document.createElement("article")
    newelementarticle.classList.add("article")
    newelementarticle.setAttribute("id", "article")
    newelementsection.append(newelementarticle)

    const pegaidul = document.querySelector(".article")
    const newelementul = document.createElement("ul")
    newelementul.classList.add("ul")
    newelementul.setAttribute("id", "ul")
    newelementarticle.append(newelementul)

    const pegaidh3 = document.querySelector(".ul")
    const newelementh3 = document.createElement("h3")
    newelementh3.classList.add("h3")
    newelementh3.setAttribute("id", "h3")
    newelementul.append(newelementh3)
    // prumpt()
    const newtextul = document.createTextNode("Kit 4:");
    newelementh3.appendChild(newtextul);

    const img = document.createElement("img")
    img.src = "/imagens/jinko.jpg";
    img.alt = "Jinko";
    newelementul.append(img)

    const p = document.createElement("p")
    newelementul.append(p)
    const newtextp = document.createTextNode("Marca do Painel Solar: ");
    p.appendChild(newtextp);
    const b = document.createElement("b")
    p.append(b)
    const newtextb = document.createTextNode("Jinko");
    b.appendChild(newtextb);

    const p2 = document.createElement("p")
    newelementul.append(p2)
    const newtextp2 = document.createTextNode("Geração do módulo: ");
    p2.appendChild(newtextp2);
    const b2 = document.createElement("b")
    p2.append(b2)
    const newtextb2 = document.createTextNode("450w");
    b2.appendChild(newtextb2);

    const p3 = document.createElement("p")
    newelementul.append(p3)
    const newtextp3 = document.createTextNode("Obs.: ");
    p3.appendChild(newtextp3);
    const b3 = document.createElement("b")
    p3.append(b3)
    const newtextb3 = document.createTextNode("Possuí sistema anti-furto");
    b3.appendChild(newtextb3);
 

    pegaidcorpo.insertAdjacentElement('afterbegin' , newelementsection)
    pegaidimagem.insertAdjacentElement('afterbegin', newelementarticle)
    pegaidul.insertAdjacentElement('afterbegin', newelementul)
    pegaidh3.insertAdjacentElement('afterend', newelementh3)
}



// function consultaitem() {
//     let valordoidpesq = document.getElementById("pesquisador").innerText

//     confereitens(valordoidpesq.innerText, array)

//     console.log(valordoidpesq.innerText)
// }

// function separaitens(x, array){




// }

// const objeto = {
//     nome : "",
//     geracaodoobjeto : "",
//     possuisistemaobjeto2 : "",
//     itensdoobjeto : "",
// }

// console.log(objeto)

// arraypraguardaosobjeto = []
// arraypraguardaosobjeto.push(objeto)

const pegaiddoform = document.querySelector("#form")
const pegaiddocampo = document.querySelector("#campo")

function confereitens(event){
    pegaiddoform.addEventListener("submit", function(event){
        event.preventDefault()
        const input = campo.value
    
        // console.log(input)
        for(let x = 0; x < arraypraguardaosobjeto.length; x++){
            if(arraypraguardaosobjeto[x].nomedoobjeto !== input){
                document.getElementById(arraypraguardaosobjeto[x]["nomedoobjeto"]).remove()
            }
            if(arraypraguardaosobjeto[x].nomedoobjeto === input){
                console.log(arraypraguardaosobjeto[x].nomedoobjeto)
                console.log(input)
            }
        }
    })
}

    // for(let x = 0; x < arraypraguardaosobjeto.length; x++){
    //     if(arraypraguardaosobjeto[x].nomedoobjeto === input){
    //         console.log(arraypraguardaosobjeto[x].nomedoobjeto)
    //         console.log(input)
    //     }
    // }

    // if(input)




// pegaiddoform.addEventListener("submit", function(event){
//     event.preventDefault()
//     const input = campo.value


//console.table(guardainformacoesdoskits)


