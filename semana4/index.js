
//VERIFICANDO SE O VALOR
const itemFilme1 = {
    nome: 'clube da luta', 
    sinopse: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído',
    duração: 250,
    anoDeInicioDoFilme: 1999,
    generoDoFilme: ['suspense', 'humor ácido', 'drama', 'crime', 'ação'],
    isRemake: false 
 }  


//VERIFICANDO SE O VALOR É TRUE, COM PROMPT E IF/ELSE IF
 let verificação = prompt('diga se a boleana é: (V)verdadeira ou (F)falsa')
  if(verificação === 'V'){
    adicionandoConteudoAoItem = itemFilme1.generoDoFilme.push('ficção') //ADICIONANDO VALOR A PROPRIEDADE DO ARRAY DENTRO DO OBJETO
    console.log('verdadeiro')
  }else if(verificação === 'F'){
   alert('falso')
  } 
  
 

//   console.log("OBJETO SEM O NOVO VALOR NO  ARRAY", itemFilme1)