"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C;
(function (C) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.eat = function () {
            console.log('eatting');
        };
        return Animal;
    }());
    C.Animal = Animal;
})(C = exports.C || (exports.C = {}));
