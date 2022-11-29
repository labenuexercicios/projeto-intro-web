//DB

const turmas = [
  {
    turma: "Hipátia",
    curso: "Javascript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    nAlunos: 150,
    periodo: "noturno",
    concluida: false,
  },
  {
    turma: "Sibyla",
    curso: "Javascript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    nAlunos: 200,
    periodo: "integral",
    concluida: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    nAlunos: 180,
    periodo: "noturno",
    concluida: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    nAlunos: 80,
    periodo: "integral",
    concluida: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    nAlunos: 200,
    periodo: "noturno",
    concluida: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    nAlunos: 100,
    periodo: "integral",
    concluida: true,
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    nAlunos: 200,
    periodo: "noturno",
    concluida: true,
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    nAlunos: 90,
    periodo: "integral",
    concluida: false,
  },
];

const curso = [
  {
    curso: "HTML e CSS",
    descricao: "Desc temporario HTML e CSS",
    duracao: "1 mês",
    valor: 500,
  },
  {
    curso: "Javascript",
    descricao: "Desc temporario Javascript",
    duracao: "2 meses",
    valor: 900,
  },
  {
    curso: "APIsRest",
    descricao: "Desc temporario APIsRest",
    duracao: "6 meses",
    valor: 2000,
  },
];

const estudantes = [
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "Javascript",
    valor: "R$900,00",
    nParcelas: 9,
    desconto: false,
    parcelas: 100,
  },
  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: "R$2.000,00",
    nParcelas: 4,
    desconto: false,
    parcelas: 500,
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "APIsRest",
    valor: "R$900,00",
    nParcelas: 1,
    desconto: true,
    parcelas: 900,
  },
];

//Calculadora

let carrinhoCursos = [];

function parcelarCurso(parcela) {
  if (parcela == 1) {
    valor = valor * 0.2;
    console.log(
      `O curso ${estudantes[0].curso} ficou no valor total de R$${valor}. Foi concedido desconto de 20%.`
    );
  } else if (parcela == 2) {
    valor = valor * 0.2;
    console.log(
      `O curso ${
        estudantes[0].curso
      } ficou no valor total de R$${valor}. Em 2x de R$${
        valor / 2
      }. Foi concedido desconto de 20%.`
    );
  } else if (parcela > 2) {
    console.log(
      `O curso ${
        estudantes[0].curso
      } ficou no valor total de R$${valor}. Em ${parcela}x de R$${
        valor / parcela
      }.`
    );
  } else {
    console.log(`Favor insira um número válido de parcelas`);
  }
}

//Funções

buscarCurso = function (nomeDoCurso) {
  return curso.find(x => x.curso == nomeDoCurso);
};

buscarTurma = function (nomeTurma) {
  let filtroTurma = turmas.filter(x => x.turma == nomeTurma);
  return (filtroTurma.length > 0 ? filtroTurma : "Turma não encontrada")
};

buscarEstudante = function (nomeAluno) {
  let filtroAluno = estudantes.filter(x => x.estudante.toLowerCase().includes(nomeAluno.toLowerCase()))
  return filtroAluno.length > 0 ? filtroAluno : "Aluno não encontrado"
};

function relatorioEstudante(nomeEstudante) {
  let e = buscarEstudante(nomeEstudante)[0]
  return `Aluno: ${e.estudante}\nTurma: ${e.turma}\nCurso: ${e.curso}\nValor Total: R$${e.valor}\nValor Parcela: R$${e.parcelas}\nNº Parcelas: ${e.nParcelas}`
};

function matricular(estudanteInput, cursoInput, turmaInput, nParcelasInput) {
  estudantes.push({
    estudante: estudanteInput,
    curso: cursoInput,
    turma: turmaInput,
    nParcelas: nParcelasInput,
  });
  return console.log(
    `Aluno Matriculado! \nNome: ${estudanteInput} \nCurso: ${cursoInput} \nTurma: ${turmaInput}`
  );
};

function addCarrinho (nomeDoCurso) {
  carrinhoCursos.push(buscarCurso(nomeDoCurso).valor)
  return carrinhoCursos
};