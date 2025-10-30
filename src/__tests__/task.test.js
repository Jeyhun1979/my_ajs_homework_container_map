import ErrorRepository from '../js/task';

describe('ErrorRepository', () => {
  const repo = new ErrorRepository();

  test.each([
    [404, 'Not Found'],
    [500, 'Internal Server Error'],
    [403, 'Forbidden'],
    [401, 'Unauthorized'],
  ])('should return correct message for code %i', (code, message) => {
    expect(repo.translate(code)).toBe(message);
  });

  test.each([
    [999],
    [123],
    [0],
  ])('should return "Unknown error" for unknown code %i', (code) => {
    expect(repo.translate(code)).toBe('Unknown error');
  });
});
