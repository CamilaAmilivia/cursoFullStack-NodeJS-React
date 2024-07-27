import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ //definimos la forma en la que se guarda en la BD
    username : {
        type: String,
        require: true, //tiene q estar si o si el campo
        trim: true, // quita los espacios
    },
    email : {
        type: String,
        require: true,
        unique: true,
    },
    password : {
        type: String,
        require: true,
    }

},{
    timestamps: true
});

export default mongoose.model('user',userSchema)
 //sirve para interactuar con la base de datos
/*esto del model y user lo tenemos q hacer, xq mi variable userSchema basicamente es como un objeto que me 
dice como esta estructurado, entonces en esta linea que como poner mi user model esta estructurado en base 
a mi userSchema > */