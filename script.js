
/* // Item 1
const modelo1 = 'Ford K'
const anoDeFabricacao1 = 2015
const tipoCombustivel1 = true
const acessorios1 = ['Ar-condicionado', 'Desembaçador trazeiro', 'Direção elétrica']

// Item 2
const modelo2 = 'Vectra'
const anoDeFabricacao2 = 2014
const tipoCombustivel2 = true
const acessorios2 = ['Aerofolios', 'Trava eletrica', 'Kit GNV']

// Item 3
const modelo3 = 'S10'
const anoDeFabricacao3 = 2020
const tipoCombustivel3 = false
const acessorios3 = ['Reboque', 'Alarme', 'Teto solar']

const mediaAnoFabricaca = (anoDeFabricacao1 + anoDeFabricacao2 + anoDeFabricacao3) / 3
console.log('A média anual dos veículos é: ' + mediaAnoFabricaca)

const verificaFlex = tipoCombustivel1 && tipoCombustivel2 && tipoCombustivel3
console.log('Todos os veículos são flex?', verificaFlex)

console.log(modelo1.toUpperCase(), '\nAno de fabricação:', anoDeFabricacao1, '\nFlex:', tipoCombustivel1, '\nAcessórios:', acessorios1)
console.log(modelo2.toUpperCase(), '\nAno de fabricação:', anoDeFabricacao2, '\nFlex:', tipoCombustivel2, '\nAcessórios:', acessorios2)
console.log(modelo3.toUpperCase(), '\nAno de fabricação:', anoDeFabricacao3, '\nFlex:', tipoCombustivel3, '\nAcessórios:', acessorios3)*/

const veiculo1 = {
    modelo: 'Ford K',
    anoDeFabricacao: 2015,
    tipoCombustivel: true,
    acessorios: ['Ar-condicionado', 'Desembaçador trazeiro', 'Direção elétrica']
}
const veiculo2 = {
    modelo: 'Vectra',
    anoDeFabricacao: 2014,
    tipoCombustivel: true,
    acessorios: ['Aerofolios', 'Trava eletrica', 'Kit GNV']
}

const veiculo3 = {
    modelo: 'S10',
    anoDeFabricacao: 2020,
    tipoCombustivel: false,
    acessorios: ['Reboque', 'Alarme', 'Teto solar']
}

const veiculos = []
veiculos.push(veiculo1, veiculo2, veiculo3)
console.log(veiculos)