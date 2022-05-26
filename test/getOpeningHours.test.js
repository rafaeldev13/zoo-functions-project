const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se não houver nenhum parametro retorna a lista de horas', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Ao passar um dia em que o zoo não abre ira aparecer "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toBe('The zoo is closed');
  });
  it('Ao passar um horario em que o zoo não abre ira aparecer "The zoo is closed"', () => {
    expect(getOpeningHours('Tuesday', '07:00-PM')).toBe('The zoo is closed');
  });
  it('Receber "The zoo is open" ao passar um dia e horário em que o zoológico abre', () => {
    expect(getOpeningHours('Friday', '02:00-PM')).toBe('The zoo is open');
  });
  it('Receber "The zoo is open" ao passar um dia e horário em que o zoológico abre', () => {
    expect(getOpeningHours('Sunday', '10:00-AM')).toBe('The zoo is open');
  });
  it('Ao passar um horário com a hora inválida do que a funcao pede vai receber um erro ', () => {
    expect(() => (getOpeningHours('Tuesday', '22:00-PM'))).toThrow('The hour must be between 0 and 12');
  });
  it('Ao passar um horário com os minutos inválidos do que a funcao pede vai receber um erro', () => {
    expect(() => (getOpeningHours('Monday', '12:76-PM'))).toThrow('The minutes must be between 0 and 59');
  });
  it('Ao passar um horário com abreviação inválida , exemplo: zM, irá receber um erro', () => {
    expect(() => (getOpeningHours('Monday', '12:00-42'))).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
