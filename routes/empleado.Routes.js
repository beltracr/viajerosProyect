import {Router} from "express";
import {getEmpleados, postEmpleado} from "../controlers/empleadoControler.js"



const empleadosRouter = Router();



empleadosRouter.get('/', getEmpleados);

empleadosRouter.post('/', postEmpleado);


export default empleadosRouter