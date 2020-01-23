// import { a ,getData as get} from "./modules/db";
import db from './modules/db'
import { C } from "./modules/c";
console.log(db.a+'-----')
db.getData('2121')
var c = new C.Animal();
c.eat()