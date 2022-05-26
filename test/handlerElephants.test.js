const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Vai testar aquantidade de elefantes quando passado o parâmetro count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('retornar um array com a relação dos nomes de todos os elefantes', () => {
    const expectedResult = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toStrictEqual(expectedResult);
  });
  it('Vai retornar a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Vai retornar a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toStrictEqual('NW');
  });
  it('Vai retornar a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('VaI retornaR um array com os dias di visita aos elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Testa se a quando afunção não receber argumentos retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa o retorno da função quando nenhum parâmetro é passado', () => {
    const expectedResult = undefined;
    expect(handlerElephants()).toStrictEqual(expectedResult);
  });
  it('Testa o retorno da função quando o parâmetro não é uma string', () => {
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
