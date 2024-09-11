import { empleadoModel } from "../model/empleadoModel.js";

export const postEmpleado = async (req,res) =>{

    try{
        const {nombre, departamento, edad,numeroCedula} = req.body;
        
        
    

    if (!nombre || !departamento|| !edad || !numeroCedula ) {
        return res.status(400).json({message:"debe diligenciar todos los campos"})
    }
    const newEmpleado = await empleadoModel.create({nombre, departamento, edad,numeroCedula})
    return res.status(201).json({
        estado: "201",
        mensaje: "empleado creado correctamente",
        datos:newEmpleado
    })

}catch(error){
    return res.status(400).json({
        estado: "400",
        mensaje:"ocurrio un problema al crear el empleado",
        datos: error
    })
}

} 



export const getEmpleados =async (req, res)=> {

    try {
        const allEmpleados= await empleadoModel.find();
        if(allEmpleados.length === 0){
            return res.status(201).json({
                estado:"201",
                mensaje: "no hay empleados en la base de datos",
                datos: null
            })
        }
        return res.status(200).json({
            estado:"200",
            mensaje:"empleados",
            datos:allEmpleados
        })


    }catch(error){
        return res.status(400).json({
            estado:"400",
            mensaje:"error",
            datos:error.message

        })
    }

    
}