import express from 'express'
import morgan from 'morgan' //ayuda a ver las peticiones q llegan al back-end
import authRoutes from './routes/auth.routes.js'

const app = express() //app basicamente es como el servidor 

app.use(morgan('dev'));

app.use(authRoutes);//es debajo de morgan xq morgan muestra la peticion que llegó
export default app;
