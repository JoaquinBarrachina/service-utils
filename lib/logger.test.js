"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./logger");
describe('Logger class tests', function () {
    var logger;
    var mockLog = jest.fn();
    var mockError = jest.fn();
    beforeEach(function () {
        console.log = mockLog;
        console.error = mockError;
    });
    afterEach(function () {
        jest.resetAllMocks();
    });
    describe('Log with location', function () {
        var location = 'My test suite';
        beforeEach(function () {
            logger = new logger_1.Logger(location);
        });
        test('Log message with location', function () {
            var msg = 'Cool log';
            var expectedLog = "".concat(location, " ---> ").concat(msg);
            logger.log(msg);
            expect(mockLog).toHaveBeenCalledTimes(1);
            expect(mockLog).toHaveBeenCalledWith(expectedLog);
        });
        test('Log error message with location', function () {
            var msg = 'Cool error';
            var expectedError = "".concat(location, " ---> ").concat(msg);
            logger.error(msg);
            expect(mockError).toHaveBeenCalledTimes(1);
            expect(mockError).toHaveBeenCalledWith(expectedError);
        });
    });
    describe('Log without location', function () {
        beforeEach(function () {
            logger = new logger_1.Logger();
        });
        test('Log message', function () {
            var msg = 'Cool log';
            logger.log(msg);
            expect(mockLog).toHaveBeenCalledTimes(1);
            expect(mockLog).toHaveBeenCalledWith(msg);
        });
        test('Log error', function () {
            var error = 'Cool error';
            logger.error(error);
            expect(mockError).toHaveBeenCalledTimes(1);
            expect(mockError).toHaveBeenCalledWith(error);
        });
    });
    describe('Test setLocation method', function () {
        test('Location is set', function () {
            var msg = 'Setting';
            logger = new logger_1.Logger();
            logger.log(msg);
            expect(mockLog).toHaveBeenCalledTimes(1);
            expect(mockLog).toHaveBeenCalledWith(msg);
            var location = 'my tets';
            logger.setLocation(location);
            var expectedLog = "".concat(location, " ---> ").concat(msg);
            logger.log(msg);
            expect(mockLog).toHaveBeenCalledTimes(2);
            expect(mockLog).toHaveBeenCalledWith(expectedLog);
        });
    });
});
