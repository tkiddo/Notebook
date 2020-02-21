"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { a ,getData as get} from "./modules/db";
var db_1 = __importDefault(require("./modules/db"));
var c_1 = require("./modules/c");
console.log(db_1.default.a + '-----');
db_1.default.getData('2121');
var c = new c_1.C.Animal();
c.eat();
