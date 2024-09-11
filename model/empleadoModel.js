import mongoose from "mongoose";


const schema = mongoose.Schema;
const empleadoSchema = new schema({

    nombre:{
        type: String,
        required: true
    },

    
    departamento:{
        type:String,
        required:true
    },

    edad:{
        type:Number,
        required:true
    },
    numeroCedula:{
        type:Number,
        require: true
    }

});

export const empleadoModel = mongoose.model("empleados",empleadoSchema);