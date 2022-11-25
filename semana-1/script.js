
/* Nome: 
Slogan: 
História:
Data de lançamento: 
Função: 
Dificuldade: 
Habilidades: 
Rota sugerida:
Feitiço de Invocador:
Está em rotação gratuita? */



const nome = "Annie";
const dificuldade = 2;
const rotacaoGratuita = false;
const habilidades = ["Piromania", " Desintegrar", " Incinerar", " Escudo Fundido", " Invocar: Tibbers"];


const nome2 = "Viego";
const dificuldade2 = 2;
const rotacaoGratuita2 = true;
const habilidades2 = ["Dominação Monárquica", " Espada do Rei Destruído", " Posse Espectral", " Domínio Atormentado", " Destruidor de corações"];


const nome3 = "Yummi";
const dificuldade3 = 1;
const rotacaoGratuita3 = true;
const habilidades3 = ["Bater e Bloquear", " Projétil Errante", " Você e eu!", " Frenética", " Capítulo Final"];


const mediaAnos = (dificuldade + dificuldade2 + dificuldade3)/3;
console.log("Essa é média de dificuldade dos campeões:", Number(mediaAnos.toFixed(1)));


const verificaRotacaoGratuita = rotacaoGratuita&&rotacaoGratuita2&&rotacaoGratuita3;
console.log("Todos os campeões estão em rotação gratuita?", verificaRotacaoGratuita);



// FULANO
// idade: 33
// verificou email?: false
// projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"]

function relatorio (nome, dificuldade, rotacao, habilidades)
{
    console.log(`${nome.toUpperCase()}
Dificuldade: ${dificuldade}
EStá na rotação gratuita? ${rotacao}
Habilidades: ${habilidades}
    `)
}

relatorio(nome, dificuldade, rotacaoGratuita, habilidades);
relatorio(nome2, dificuldade2, rotacaoGratuita2, habilidades2);
relatorio(nome3, dificuldade3, rotacaoGratuita3, habilidades3);