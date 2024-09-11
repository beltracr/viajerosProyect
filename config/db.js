import mongoose from "mongoose";


const connectionMongo = async () => {
    await mongoose.connect(process.env.CONNECTION_DB,{})

    try{
        console.log("conexion exitosa con la base de datos");} catch(error){console.error("error de conexion: ", error.message)}      








}

export default connectionMongo