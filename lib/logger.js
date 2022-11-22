"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger(location) {
        this.location = location;
    }
    Logger.prototype.setLocation = function (location) {
        this.location = location;
    };
    Logger.prototype.log = function (msg) {
        if (this.location) {
            this.logWithLocation(console.log, msg);
        }
        else {
            console.log(msg);
        }
    };
    Logger.prototype.error = function (msg) {
        if (this.location) {
            this.logWithLocation(console.error, msg);
        }
        else {
            console.error(msg);
        }
    };
    Logger.prototype.logWithLocation = function (cb, msg) {
        if (!this.location) {
            throw new Error('Location not defined in logger');
        }
        var messageToLog = "".concat(this.location, " ---> ").concat(msg);
        cb(messageToLog);
    };
    return Logger;
}());
exports.Logger = Logger;
