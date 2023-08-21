const agencias = [
    {
        nome: 'Agência Volta ao Parque',
        telefone: '(75)3334-1410',
        celular: '7599963-1269',
        endereco: 'Avenida 7 de setembro, 7, centro, lençóis, Bahia',
        email: 'voltaaoparque@hotmail.com',
    },
    {
        nome: 'Atração Turismo',
        telefone: '(75)3334-2298',
        celular: '(71)99951-5420',
        endereco: 'Rua da baderna, 29, centro, lençóis, Bahia',
        email: 'contato@atracaoturismo.com.br',
    },
    {
        nome: 'Diamantina Trip',
        telefone: '(75)3334-1410',
        celular: '(75)99963-1269',
        endereco: 'Avenida 7 de setembro, 7, centro, lençóis, Bahia',
        email: 'contato@diamantinatrip.com.br',
    },
    {
        nome: 'Discover Chapada',
        telefone: '(75)3334-1200',
        celular: '(75)99972-7411',
        endereco: 'Rua boa vista, 48, centro, lençóis, Bahia',
        email: 'info@discoverchapada.com.br',
    }
];

// console.log(agencias);



function buscarAgencia(input) {
    if (!input) {
        return 'Por favor, digite o nome da agência.';
    }

    let resultado = agencias.find(agencia => agencia.nome.trim().toLowerCase() === input.trim().toLowerCase());

    if (resultado) {
        return `\nAgência: ${resultado.nome}\nTelefone: ${resultado.telefone}\nCelular: ${resultado.celular}\nEndereço: ${resultado.endereco}\nEmail: ${resultado.email}\n`;
    } else {
        return 'Agência não localizada';
    }
}

console.log(buscarAgencia('discover chapada'));


function listarAgencias() {
    let resultado = agencias.map(agencia => `Agência: ${agencia.nome}\nTelefone: ${agencia.telefone}\nCelular: ${agencia.celular}\nEndereço: ${agencia.endereco}\nEmail: ${agencia.email}\n`);
    return resultado;
}

console.log(listarAgencias().join('\n'));
