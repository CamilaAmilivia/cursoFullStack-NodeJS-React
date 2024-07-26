import app from './app.js'; //como es un modulo que yo cree lleva el .js. En caso de express x ejemplo no
import { connectDB } from './db.js';


connectDB();
app.listen(3000);
console.log('Server on port', 3000);