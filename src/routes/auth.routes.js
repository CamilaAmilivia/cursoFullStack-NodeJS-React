import { Router } from "express";
import { login , register } from '../controllers/auth.controller.js';


const router = Router()

router.post('/register', register);
router.post('/login', login);
/*cuando se ejecuta un post tambien ejecuta la funcion despues de 
la coma */

export default router //hay que exportarlo xq esto va en app q 