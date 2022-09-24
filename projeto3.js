let filme1 ={
    titulo1 : 'The Lord of the Rings',
    sinopse : 'esse filme e de terror psicologico',
    oscar: true,
    duracao: 467,
    genero: 'terror'
   }
   let filme2 = {
    titulo2: 'A Bruxa de Blair',
    sinopse2 : 'esse filme ganhou o oscar em 1999',
    duracao2 : 118,
    oscar2: false,
    genero2: 'ficção'
   }
   let filme3 = {
    titulo3: 'O Hobbit',
    sinopse3:'Numa Terra distante de pequenos homens',
    duracao3:249,
    oscar3: true,
    genero3:'ficção'
   };
   
   let guardarfilme=[];
   guardarfilme.push(filme1,filme2,filme3)
   
       if(filme1.oscar){
           guardarfilme.push(filme1)
       } else{
           alert('Esse filme e ganhador do oscar!')
       };
       
   
       if(filme2.oscar2){
           guardarfilme.push(filme2)
      } else{
       alert('Esse filme e ganhador do oscar!')
      }
   
      if(filme3.oscar3){
       guardarfilme.push(filme3)
      }else(
       alert('Esse filme e ganhador do oscar!',)
      )
      console.log(guardarfilme)

        
let filme = guardarfilme = Number(0)
function recebeObjetoStrings(guardarfilme, stringFunction)
{
    pesquisa = +0
    for(i=0; i<guardarfilme.lenght; i++)
    {
        if(guardarfilme[i]. filme === stringFunction)
        {
            pesquisa = number (1)
            console.log('O Resultado foi:', guardarfilme[i])
            }

        }
        if(pesquisa !== 1)
        {
            return alert("Alert item não encontrado")
        }
    }
        let frase = prompt('Digite')
        guardarfilmeStrings(recebi, frase)

        