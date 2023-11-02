const { calculaDV, validaNumeroXpto } = require('./numeroXpto');

const numeroXPTO = 4638; // Exemplo de número XPTO de 4 dígitos
const numeroComDV = 46387; // Exemplo de número XPTO de 5 dígitos

const dv = calculaDV(numeroXPTO);
console.log(`${dv}`);

const isValid = validaNumeroXpto(numeroComDV);
console.log(`${isValid}`);

console.log(
  '------------------------------------------------------------------------------------------------'
);

const { Grupos } = require('./busca');

const gruposInstance = new Grupos();

gruposInstance
  .carrega()
  .then(() => {
    console.log('Dados carregados com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao carregar dados:', error);
  });

// Chame o método 'busca' para encontrar grupos com um usuário cujo nome contenha a string buscada
gruposInstance.busca('nomeDoUsuario', (gruposEncontrados) => {
  console.log('Grupos encontrados:', gruposEncontrados);
});
