import { Logger } from './logger';

describe('Logger class tests', () => {
  let logger: Logger;
  const mockLog = jest.fn();
  const mockError = jest.fn();

  beforeEach(() => {
    console.log = mockLog;
    console.error = mockError;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Log with location', () => {
    const location = 'My test suite';

    beforeEach(() => {
      logger = new Logger(location);
    });

    test('Log message with location', () => {
      const msg = 'Cool log';
      const expectedLog = `${location} ---> ${msg}`;

      logger.log(msg);

      expect(mockLog).toHaveBeenCalledTimes(1);
      expect(mockLog).toHaveBeenCalledWith(expectedLog);
    });

    test('Log error message with location', () => {
      const msg = 'Cool error';
      const expectedError = `${location} ---> ${msg}`;

      logger.error(msg);

      expect(mockError).toHaveBeenCalledTimes(1);
      expect(mockError).toHaveBeenCalledWith(expectedError);
    });
  });

  describe('Log without location', () => {
    beforeEach(() => {
      logger = new Logger();
    });

    test('Log message', () => {
      const msg = 'Cool log';

      logger.log(msg);

      expect(mockLog).toHaveBeenCalledTimes(1);
      expect(mockLog).toHaveBeenCalledWith(msg);
    });

    test('Log error', () => {
      const error = 'Cool error';

      logger.error(error);

      expect(mockError).toHaveBeenCalledTimes(1);
      expect(mockError).toHaveBeenCalledWith(error);
    });
  });

  describe('Test setLocation method', () => {
    test('Location is set', () => {
      const msg = 'Setting';
      logger = new Logger();

      logger.log(msg);

      expect(mockLog).toHaveBeenCalledTimes(1);
      expect(mockLog).toHaveBeenCalledWith(msg);

      const location = 'my tets';
      logger.setLocation(location);

      const expectedLog = `${location} ---> ${msg}`;
      logger.log(msg);

      expect(mockLog).toHaveBeenCalledTimes(2);
      expect(mockLog).toHaveBeenCalledWith(expectedLog);
    });
  });
});
