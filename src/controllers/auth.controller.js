import User from '../entidades-models/user.model.js'

export const register = async (req,res) => {
    const {email, password, username} = req.body;

    try{
        const newUser = new User({ //lo hacemos asi y no con el user.create xq de esta manera estamos creando un objeto y modificandolo, queda mas prolijo
            username,
            email,
            password,
        });
        const userSave = await newUser.save(); //xq mi newUser no tiene guardada la fecha
        res.json(userSave);
    }
    catch(error){
        console.log(error);
    }
}
export const login = (req,res) => res.send('login');