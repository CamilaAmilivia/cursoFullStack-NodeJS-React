import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost/nombrebasededatos'); //esto funciona de manera asincrona asiq va dentro de una funcion
        console.log('<<<<< DB is connected>>>')
    }
    catch(error){
        console.log(error);
    }
};