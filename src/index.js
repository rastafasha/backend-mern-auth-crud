import app from './app.js';
import {connectDb} from './db.js';
// import {dotenv} from 'dotenv'

connectDb();
app.listen( 4000);
console.log('Server on port',4000)